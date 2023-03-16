FROM python:alpine3.10

COPY . /app

RUN pip install -r requirements.install

CMD [ "gunicorn",  "main::app" ]