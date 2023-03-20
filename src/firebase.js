// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx7CX3m51KSBpAkpeKgfD1qq-PC7Z6YVQ",

  authDomain: "coffee-website-cb1f9.firebaseapp.com",

  projectId: "coffee-website-cb1f9",

  storageBucket: "coffee-website-cb1f9.appspot.com",

  messagingSenderId: "484163325361",

  appId: "1:484163325361:web:fab6facb4855ab03854190",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
