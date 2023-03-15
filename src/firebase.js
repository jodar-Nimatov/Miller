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

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQlzv9RS6BwnQttNIEdV_9RdIujwQ3DyE",
  authDomain: "miller-4cf06.firebaseapp.com",
  projectId: "miller-4cf06",
  storageBucket: "miller-4cf06.appspot.com",
  messagingSenderId: "257106544948",
  appId: "1:257106544948:web:d155bb3804aeccc26cbd61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;
