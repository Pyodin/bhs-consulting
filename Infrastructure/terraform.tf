terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }

  backend "azurerm" {
    key = "terraform.tfstate"
    resource_group_name = "bhsconsulting-tfdata"
  }
}
