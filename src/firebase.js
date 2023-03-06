// {
//     "uid": "7b719d70-cfac-4a46-a112-0ceff3aac81c",
//     "token": {
//       "sub": "7b719d70-cfac-4a46-a112-0ceff3aac81c",
//       "authFields": {
//         "email": "",
//         "email_verified": false,
//         "phone_number": "",
//         "name": ""
//       },
//       "firebase": {
//         "sign_in_provider": "google.com"
//       }
//     }

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSK0r1Ix834EMV2VqQUCm28MdUxuS86A8",
  authDomain: "coffee-website-441ca.firebaseapp.com",
  databaseURL: "https://coffee-website-441ca-default-rtdb.firebaseio.com",
  projectId: "coffee-website-441ca",
  storageBucket: "coffee-website-441ca.appspot.com",
  messagingSenderId: "1084779597603",
  appId: "1:1084779597603:web:1a7baad6a8bdf0edf5c696",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
