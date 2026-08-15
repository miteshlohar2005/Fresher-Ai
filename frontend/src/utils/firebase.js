
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fresherai-9fb6f.firebaseapp.com",
  projectId: "fresherai-9fb6f",
  storageBucket: "fresherai-9fb6f.firebasestorage.app",
  messagingSenderId: "777138072767",
  appId: "1:777138072767:web:791d673872706a8ec3ea0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth , provider}