// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-425804.firebaseapp.com",
  projectId: "x-next-425804",
  storageBucket: "x-next-425804.appspot.com",
  messagingSenderId: "659078447135",
  appId: "1:659078447135:web:631addb84d65479f8c952a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);