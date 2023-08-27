# Provider block
provider "azurerm" {
  features {}
}

# Azure resource group

resource "azurerm_resource_group" "swa" {
  name     = var.website_name
  location = var.region
  tags     = var.common_tags
}

# Azure static web app

resource "azurerm_static_site" "swa" {
  name                = var.website_name
  resource_group_name = azurerm_resource_group.swa.name
  location            = azurerm_resource_group.swa.location
  sku_tier            = var.static_web_app_sku
  tags                = var.common_tags
}

resource "azurerm_static_site_custom_domain" "txt" {
  static_site_id  = azurerm_static_site.swa.id
  domain_name     = var.custom_domain_name
  validation_type = "dns-txt-token"
}


# Azure DNS

resource "azurerm_dns_zone" "swa" {
  name                = var.custom_domain_name
  resource_group_name = azurerm_resource_group.swa.name
  tags                = var.common_tags
}

resource "azurerm_dns_txt_record" "txt" {
  name                = "@"
  zone_name           = azurerm_dns_zone.swa.name
  resource_group_name = azurerm_resource_group.swa.name
  ttl                 = 300
  record {
    # Conditional required due to issue https://github.com/hashicorp/terraform-provider-azurerm/issues/14750
    value = azurerm_static_site_custom_domain.txt.validation_token == "" ? "validated" : azurerm_static_site_custom_domain.txt.validation_token
  }
}

resource "azurerm_dns_a_record" "alias" {
  name                = "@"
  zone_name           = azurerm_dns_zone.swa.name
  resource_group_name = azurerm_resource_group.swa.name
  ttl                 = 300
  target_resource_id  = azurerm_static_site.swa.id
}

