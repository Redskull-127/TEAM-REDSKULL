import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


initializeApp({
  apiKey: "AIzaSyCh8nd7w9QbWD9z-BL5-Z3-kV_HoNgR--E",
  authDomain: "team-redskull.firebaseapp.com",
  projectId: "team-redskull",
  storageBucket: "team-redskull.appspot.com",
  messagingSenderId: "727979282334",
  appId: "1:727979282334:web:1e2bbfed7c0a44b269d08f",
  measurementId: "G-C4T38F9X70",
});

const firestore = getFirestore();

export {firestore};