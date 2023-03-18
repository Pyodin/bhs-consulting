FROM python:3.9-slim-buster

WORKDIR /app

COPY requirements.in .
RUN pip install -r requirements.in

COPY app/ .

# Expose port 8000 for the Gunicorn server
EXPOSE 8000

CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:8000"]