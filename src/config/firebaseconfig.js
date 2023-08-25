import firebase from 'firebase';
import 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = firebase.firestore();
export default database;
