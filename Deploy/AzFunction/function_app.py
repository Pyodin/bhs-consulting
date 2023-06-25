import os
import logging

import azure.functions as func
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