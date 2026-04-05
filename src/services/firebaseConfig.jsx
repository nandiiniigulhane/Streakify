import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtT1vgFgZfl-CgDQ-kRsffnMjKAsLv5u8",
  authDomain: "streakify-ad5f7.firebaseapp.com",
  projectId: "streakify-ad5f7",
  storageBucket: "streakify-ad5f7.firebasestorage.app",
  messagingSenderId: "480610650087",
  appId: "1:480610650087:web:5596b2a8c2b7f043bd5f42",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
