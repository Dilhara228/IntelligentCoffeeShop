# backend/face_login.py
import cv2
import face_recognition
import pickle

with open("registered_face.pkl", "rb") as f:
    known_face = pickle.load(f)

cap = cv2.VideoCapture(0)
print("🔍 Scanning face...")

while True:
    ret, frame = cap.read()
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    locations = face_recognition.face_locations(rgb)
    encodings = face_recognition.face_encodings(rgb, locations)

    for encoding in encodings:
        match = face_recognition.compare_faces([known_face], encoding)
        if match[0]:
            print("✅ Face verified")
            cap.release()
            cv2.destroyAllWindows()
            exit(0)

    cv2.imshow("Login - Press q to quit", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
exit(1)
