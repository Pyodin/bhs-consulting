# Azure resource group name
variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
}

# Azure location
variable "location" {
  description = "Azure location"
  type        = string
}

# Custom name for azure storage account 
variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
}

# Custom name for azure table storage
variable "table_name" {
  description = "Name of the table storage"
  type        = string
}