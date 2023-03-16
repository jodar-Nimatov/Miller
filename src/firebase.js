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

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBSK0r1Ix834EMV2VqQUCm28MdUxuS86A8",
//   authDomain: "coffee-website-441ca.firebaseapp.com",
//   databaseURL: "https://coffee-website-441ca-default-rtdb.firebaseio.com",
//   projectId: "coffee-website-441ca",
//   storageBucket: "coffee-website-441ca.appspot.com",
//   messagingSenderId: "1084779597603",
//   appId: "1:1084779597603:web:1a7baad6a8bdf0edf5c696",
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAQlzv9RS6BwnQttNIEdV_9RdIujwQ3DyE",
//   authDomain: "miller-4cf06.firebaseapp.com",
//   projectId: "miller-4cf06",
//   storageBucket: "miller-4cf06.appspot.com",
//   messagingSenderId: "257106544948",
//   appId: "1:257106544948:web:d155bb3804aeccc26cbd61",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAQlzv9RS6BwnQttNIEdV_9RdIujwQ3DyE",
//   authDomain: "miller-4cf06.firebaseapp.com",
//   projectId: "miller-4cf06",
//   storageBucket: "miller-4cf06.appspot.com",
//   messagingSenderId: "257106544948",
//   appId: "1:257106544948:web:d155bb3804aeccc26cbd61",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

// export const storage = getStorage();

// export const provider = new GoogleAuthProvider();
// export default app;

// import firebase from "firebase";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDrbs9JTiiCvaRN5EHmb6tbV3YiQoPYPx0",
  authDomain: "gogletest-1e5f0.firebaseapp.com",
  databaseURL: "https://gogletest-1e5f0-default-rtdb.firebaseio.com",
  projectId: "gogletest-1e5f0",
  storageBucket: "gogletest-1e5f0.appspot.com",
  messagingSenderId: "897439102343",
  appId: "1:897439102343:web:3dcbda622a4005535f4f22",
};

// export const firedb = firebase.initializeApp(firebaseConfig);
// export default firedb.database();
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app)