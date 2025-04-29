// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAC7YQS8a1wXVmKBH5TvtYxSKCGTbThXUA",
  authDomain: "elitepartnerstestimonials.firebaseapp.com",
  projectId: "elitepartnerstestimonials",
  storageBucket: "elitepartnerstestimonials.firebasestorage.app",
  messagingSenderId: "883634080426",
  appId: "1:883634080426:web:692b0138cac9b855f75ed3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default  db ;