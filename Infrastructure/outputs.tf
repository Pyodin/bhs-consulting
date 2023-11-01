# API Token for SWA
output "api_token" {
  value = azurerm_static_site.swa.api_key
  sensitive = true
}

output "name_servers" {
  value = azurerm_dns_zone.swa.name_servers
}

# Primary connection string for the storage account.
output "storage_connection_string" {
  value = module.storage.primary_connection_string
  sensitive = true
}