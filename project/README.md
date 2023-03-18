# My Flask Application

This is a simple Flask application that uses Gunicorn to run in a Docker container.

## Project Tree

```
project/
│
├── app/
│   ├── __init__.py    # Initializes the Flask application
│   ├── routes.py      # Contains the Flask routes
│   ├── models.py      # Contains the data models
│   ├── static/        # Folder for static files like CSS and JavaScript
│   │   └── style.css
│   └── templates/     # Folder for HTML templates
│       ├── base.html  # Base template that other templates extend
│       ├── index.html # Homepage template
│       └── about.html # About page template
│
├── tests/             # Folder for test files
│   ├── test_routes.py # Tests for the Flask routes
│   ├── test_models.py # Tests for the data models
│   └── conftest.py    # Configuration file for pytest
│
├── requirements.txt   # File that lists all the required packages for the application
├── Dockerfile         # Dockerfile for the appliation
└── run.py             # Runs the Flask application
```

## Running the Application with Docker 

To run the Flask application in a Docker container:

1. Build the Docker image: `docker build -t myapp .`
2. Run the Docker container: `docker run -p 8000:8000 myapp`

The application will be available at `http://localhost:8000`.

## Running the Application locally

To run the Flask application on your own machine:

1. Install the required dependencies.
```
pip install -r requirements.in
```

2. To run the application, use the following command:
```
cd project
python3 run.py
```
The application will be available at `http://localhost:5000`.

## Run tests 
1. Make sure that pytest is installed. You can install it by running `pip install pytest` in your terminal.
2. Navigate to the `project` directory.
3. Run the command `pytest` to run all tests.