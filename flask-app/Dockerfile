FROM python:alpine3.10

COPY . /app

WORKDIR /app
RUN pip install -r requirements.in

CMD [ "gunicorn",  "main:app", "--bind=0.0.0.0:5000"]