from app import app
from flask import render_template


@app.route("/")
def root():
    return "Hello, World!"


@app.route("/index")
def index():
    return render_template("index.html", title="Home")


@app.route("/about")
def about():
    return render_template("about.html", title="About")
