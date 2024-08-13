// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkCJgSMdel28mRsmDRNmNUdbAyBOb_430",
  authDomain: "inventory-management-a49d9.firebaseapp.com",
  projectId: "inventory-management-a49d9",
  storageBucket: "inventory-management-a49d9.appspot.com",
  messagingSenderId: "557642395999",
  appId: "1:557642395999:web:bfb2da0e2bb844c69006ea",
  measurementId: "G-WV7GV7HQCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}