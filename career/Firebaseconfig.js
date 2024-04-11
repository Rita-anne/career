// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMWPTguhc-Jme2eNvoniOndvDGbqZLk2w",
  authDomain: "careerguidance-ca22a.firebaseapp.com",
  projectId: "careerguidance-ca22a",
  storageBucket: "careerguidance-ca22a.appspot.com",
  messagingSenderId: "393862392143",
  appId: "1:393862392143:web:7099e8d66bdfc06ebb3d3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FIREBASE_DB = getFirestore(app);

export { FIREBASE_DB };
