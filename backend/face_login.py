# backend/face_login.py

import cv2
import face_recognition
import pickle
from flask import Flask, jsonify

app = Flask(__name__)

# Load the registered face encoding
with open("registered_face.pkl", "rb") as f:
    known_face = pickle.load(f)

@app.route("/api/face-login")
def face_login():
    cap = cv2.VideoCapture(0)
    print("🔍 Scanning face...")

    user_email = "recognized_user@example.com"  # You can update this dynamically later

    success = False
    while True:
        ret, frame = cap.read()
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        locations = face_recognition.face_locations(rgb)
        encodings = face_recognition.face_encodings(rgb, locations)

        for encoding in encodings:
            match = face_recognition.compare_faces([known_face], encoding)
            if match[0]:
                print("✅ Face verified")
                success = True
                break

        cv2.imshow("Face Login - Press 'q' to cancel", frame)
        if success or (cv2.waitKey(1) & 0xFF == ord('q')):
            break

    cap.release()
    cv2.destroyAllWindows()

    if success:
        return jsonify({'success': True, 'email': user_email})
    else:
        return jsonify({'success': False, 'message': 'Face not recognized'}), 401

if __name__ == "__main__":
    app.run(debug=True)
