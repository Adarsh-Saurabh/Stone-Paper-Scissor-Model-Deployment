from flask import Flask , render_template, request
# from flask_sqlalchemy import SQLAlchemy
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
    # app.run(debug = False)
    # app.run(debug=True, port = 8000)
    # app.run(host = '0.0.0.0', port = 88)
    app.run()
    # app.run(debug=False, port = 8000)
