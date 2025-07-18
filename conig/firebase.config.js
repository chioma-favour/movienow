// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "movienow-e3765.firebaseapp.com",
  projectId: "movienow-e3765",
  storageBucket: "movienow-e3765.firebasestorage.app",
  messagingSenderId: "921790293760",
  appId: "1:921790293760:web:1048c0aa352dc2769ef5e5",
  measurementId: "G-CQNWKYCMTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);