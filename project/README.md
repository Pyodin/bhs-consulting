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
