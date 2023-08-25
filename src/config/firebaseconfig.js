// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZnTNPQKi56qsLLhcHWHf2Y-TiPIvopX4",
  authDomain: "crud-teste-e1e67.firebaseapp.com",
  databaseURL: "https://crud-teste-e1e67-default-rtdb.firebaseio.com",
  projectId: "crud-teste-e1e67",
  storageBucket: "crud-teste-e1e67.appspot.com",
  messagingSenderId: "994911958536",
  appId: "1:994911958536:web:eb8b9156826afa5c5ac3bd",
  measurementId: "G-73EYGKD20H"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
