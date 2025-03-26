# backend/face_register.py
import cv2
import face_recognition
import pickle

cap = cv2.VideoCapture(0)
print("Press 's' to capture your face")

while True:
    ret, frame = cap.read()
    cv2.imshow("Register", frame)
    if cv2.waitKey(1) & 0xFF == ord('s'):
        face_locations = face_recognition.face_locations(frame)
        if face_locations:
            face_encoding = face_recognition.face_encodings(frame)[0]
            with open("registered_face.pkl", "wb") as f:
                pickle.dump(face_encoding, f)
            print("✅ Face registered")
            break

cap.release()
cv2.destroyAllWindows()
