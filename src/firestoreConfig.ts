// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc, query, updateDoc
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp6rvAXxQShBq9NQ8K-xPojfDtUVgKYkU",
  authDomain: "carltodo.firebaseapp.com",
  projectId: "carltodo",
  storageBucket: "carltodo.appspot.com",
  messagingSenderId: "720458045472",
  appId: "1:720458045472:web:4702b906aaf12427908445"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const todoRef = collection(db, "todos")



