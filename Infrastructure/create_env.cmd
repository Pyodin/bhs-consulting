set website_name=bhsitconsulting
set region=westeurope

## Create an resource group
az group create -n "%website_name%-tfdata" -l %region%

## Create a storage account
az storage account create --name "%website_name%tfdata" --resource-group "%website_name%-tfdata"  --location %region% --sku Standard_LRS

## Create a storage account container
az storage container create -n tfdata --account-name "%website_name%tfdata" --resource-group "%website_name%-tfdata"

## Set up backend config file
echo resource_group_name="%website_name%-tfdata" > backend-config.txt
echo storage_account_name="%website_name%tfdata" >> backend-config.txt
echo container_name="tfdata" >> backend-config.txt
