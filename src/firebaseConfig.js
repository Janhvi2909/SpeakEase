// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDGI6KGtphlUHN3Y6VCVsw1QzwLoq-nGN0",
  authDomain: "speakease-26828.firebaseapp.com",
  projectId: "speakease-26828",
  storageBucket: "speakease-26828.appspot.com",
  messagingSenderId: "498435754923",
  appId: "1:498435754923:web:0318b804a8b9fc600720ee",
  measurementId: "G-LX6J2TP7M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// export { auth };
export { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword };