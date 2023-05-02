// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAverdFEkOPEbNqGiPRhNLifrJxvFe5X5I",
  authDomain: "spicy-club-firebase-auth.firebaseapp.com",
  projectId: "spicy-club-firebase-auth",
  storageBucket: "spicy-club-firebase-auth.appspot.com",
  messagingSenderId: "459124999929",
  appId: "1:459124999929:web:50326da261988e2b330428",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
