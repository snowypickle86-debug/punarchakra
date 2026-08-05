// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

// TODO: Replace the following credentials with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1KOQsyVmW_g3UPo2R39XW7VmptgB-jlU",
  authDomain: "punarchakra-b79ea.firebaseapp.com",
  projectId: "punarchakra-b79ea",
  storageBucket: "punarchakra-b79ea.firebasestorage.app",
  messagingSenderId: "894740722467",
  appId: "1:894740722467:web:1940419f84057e8b4dd296"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore database
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("Firebase initialized successfully for Punarchakra!");
