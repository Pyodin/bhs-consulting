# Terraform Configuration for Azure Static Web App

This Terraform configuration sets up the necessary infrastructure for an Azure Static Web App, including DNS settings for a custom domain, Azure Table Storage for data persistence, and Azure DevOps for CI/CD pipelines.

## Prerequisites

Before you begin, ensure you have the following:
- An Azure subscription
- Terraform installed on your machine
- A custom domain name registered
- A SendGrid account for email services


## Components

- **Azure Static Web App:** Configured to serve static content with automatic GitHub actions or Azure DevOps pipeline deployment.
  
- **DNS Configuration:** Sets up a DNS zone and records for your custom domain in Azure.

- **Azure Table Storage:** Provisions a storage account and table to store application data such as email addresses for a newsletter.

- **Azure DevOps CI/CD Pipeline:** Automates the build and deployment of the static web app using the provided YAML pipeline definition.

## Outputs

After applying your Terraform configuration, the following outputs will be displayed:

- `api_token`: The API token for Azure Static Web App, used for CI/CD.
- `name_servers`: The name servers for your DNS zone, to be configured with your domain registrar.

