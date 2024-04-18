// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMWPTguhc-Jme2eNvoniOndvDGbqZLk2w",
  authDomain: "careerguidance-ca22a.firebaseapp.com",
  projectId: "careerguidance-ca22a",
  storageBucket: "careerguidance-ca22a.appspot.com",
  messagingSenderId: "393862392143",
  appId: "1:393862392143:web:7099e8d66bdfc06ebb3d3a",
};

const app = initializeApp(firebaseConfig);
const FIREBASE_DB = getFirestore(app);
const storage = getStorage(app, "gs://careerguidance-ca22a.appspot.com");

export { FIREBASE_DB, storage };
