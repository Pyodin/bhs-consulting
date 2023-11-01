# Terraform resource to create a storage account and table storage

# Storage account
resource "azurerm_storage_account" "storageAccount" {
  name                     = var.storage_account_name
  resource_group_name      = var.resource_group_name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  min_tls_version          = "TLS1_2"

  identity {
    type = "SystemAssigned"
  }
}

# Table storage
resource "azurerm_storage_table" "subscribersTable" {
  name                 = var.table_name
  storage_account_name = azurerm_storage_account.storageAccount.name
}

