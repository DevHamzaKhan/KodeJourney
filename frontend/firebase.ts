import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-r8PjeZp8UopLmwZrLyIE1074GztaKxc",
  authDomain: "kodejourney-68cf9.firebaseapp.com",
  projectId: "kodejourney-68cf9",
  storageBucket: "kodejourney-68cf9.firebasestorage.app",
  messagingSenderId: "912607969353",
  appId: "1:912607969353:web:eec067c03ceb956b407f98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, db, auth };