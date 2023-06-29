# Terraform resource to create a storage account and table storage

# Storage account
resource "azurerm_storage_account" "mytable" {
  name                     = "subscribersstorage"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  min_tls_version          = "TLS1_2"

  identity {
    type = "SystemAssigned"
  }
}

# Table storage
resource "azurerm_storage_table" "mytable" {
  name                = "subscribersTable"
  storage_account_name = azurerm_storage_account.mytable.name
}

