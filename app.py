from flask import Flask , render_template, request
from flask_sqlalchemy import SQLAlchemy
import os
import game as g

app = Flask(__name__)

@app.route('/' , methods = ["GET"])
def index():
    return render_template("index.html")

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == "POST":
        value = request.form["value"]
        score = str(g.game(value))
    return render_template('submit.html', s = score)

if __name__ == '__main__':
     app.debug = False
     port = int(os.environ.get('PORT', 33507))
     waitress.serve(app, port=port)