// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU94qA1T0Of5Vis1lwLk6VUnUOIvQl108",
  authDomain: "petly-5aa0e.firebaseapp.com",
  projectId: "petly-5aa0e",
  storageBucket: "petly-5aa0e.firebasestorage.app",
  messagingSenderId: "257747745539",
  appId: "1:257747745539:web:014bc692c6674e22754736"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);