// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import{getFirestore}from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration

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
const app = getApps().length == 0 ? initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage};


