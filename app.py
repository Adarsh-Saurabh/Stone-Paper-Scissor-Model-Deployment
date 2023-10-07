from flask import Flask , render_template, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
import os
import game as g

app = Flask(__name__)

point = 0

@app.route('/' , methods = ["GET"])
def index():
    return render_template("index.html")

@app.route('/submit', methods=['POST'])
def submit():
    global point
    value = request.form.get("value")

    if value is None:
        return jsonify({"error": "Please select a valid input"})

    scores = g.game(value)
    score = str(scores[0])
    point += scores[1]
    points = str(point)

    return jsonify({"score": score, "points": points, "bot": scores[2]})


if __name__ == '__main__':
    # app.run(debug = False)
    # app.run(debug=True, port = 8000)
    # app.run(host = '0.0.0.0', port = 88)
    app.run(debug=False)
    # app.run(debug=False, port = 8000)
