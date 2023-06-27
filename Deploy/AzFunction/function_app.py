import os
import logging

import azure.functions as func
from azure.cosmosdb.table.tableservice import TableService
from azure.cosmosdb.table.models import Entity
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


SENDGRID_API_KEY = None

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)


def send_email(sender_email, recipient_email, subject, body):
    message = Mail(
        from_email=sender_email,
        to_emails=recipient_email,
        subject=subject,
        plain_text_content=body,
    )

    try:
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)
        logging.info("Email sent successfully.")
    except Exception as e:
        logging.info("Error sending email:", str(e))
        return False
    else:
        return True


@app.route(route="HttpTrigger", methods=["POST"])
def HttpTrigger(
    req: func.HttpRequest,
) -> func.HttpResponse:
    logging.info("Python HTTP trigger function processed a request.")

    global SENDGRID_API_KEY
    SENDGRID_API_KEY = os.environ["SendGridApiKey"]

    logging.info(req.form)
    name, mail, phone, company, message = (
        req.form.get("name"),
        req.form.get("email"),
        req.form.get("phone"),
        req.form.get("company"),
        req.form.get("message"),
    )

    logging.info(f"SENDGRID_API_KEY: {SENDGRID_API_KEY}")

    sender_email = "no-replys@bhsconsulting.fr"
    recipient_email = "p.bourhis56@gmail.com"
    subject = f"You just received a message from {mail} from bhsconsulting.fr"
    body = f"""
        Name: {name}\n
        Mail: {mail}\n
        Phone: {phone}\n\n
        Company: {company}\n\n
        Message: {message}\n
    """

    res = send_email(sender_email, recipient_email, subject, body)

    if res:
        return func.HttpResponse(
            "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
            status_code=200,
        )
    else:
        return func.HttpResponse(
            "Error sending email",
            status_code=500,
        )


@app.route(route="HttpTriggerMail", methods=["POST"])
def HttpTriggerMail(req: func.HttpRequest) -> func.HttpResponse:
    global TABLE_SERVICE_CONNECTION_STRING
    TABLE_SERVICE_CONNECTION_STRING = os.environ["TableServiceConnectionString"]

    email = req.form.get("email")

    if email:
        # Check for duplicate entries
        if email_exists(email):
            logging.warning(f"Duplicate email address: {email}")
            return func.HttpResponse("Email address already exists", status_code=400)

        # Store the email address in Azure Table Storage
        table_service = TableService(connection_string=TABLE_SERVICE_CONNECTION_STRING)
        subscriber_entity = {
            "PartitionKey": "Subscribers",
            "RowKey": email,
            "Email": email,
        }
        table_service.insert_entity("Subscribers", subscriber_entity)

        logging.info(f"Successfully registered email: {email}")
        return func.HttpResponse(
            f"Successfully registered email: {email}", status_code=200
        )
    else:
        logging.warning("No email address provided")
        return func.HttpResponse("Please provide an email address", status_code=400)


def email_exists(email):
    # Check if the email address already exists in Azure Table Storage
    table_service = TableService(connection_string=TABLE_SERVICE_CONNECTION_STRING)
    filter_condition = f"Email eq '{email}'"
    entities = table_service.query_entities("Subscribers", filter=filter_condition)
    return any(entities)
