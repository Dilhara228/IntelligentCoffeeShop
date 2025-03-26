# backend/app.py
from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

@app.route("/api/face-login")
def face_login():
    result = subprocess.run(["python", "face_login.py"])
    return jsonify({"success": result.returncode == 0})

if __name__ == "__main__":
    app.run(debug=True)
