// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5qQkI_3nRCcM26FYy1Q3wuIEh_ALw9JQ",
  authDomain: "netflix-gpt-742a4.firebaseapp.com",
  projectId: "netflix-gpt-742a4",
  storageBucket: "netflix-gpt-742a4.appspot.com",
  messagingSenderId: "842491495172",
  appId: "1:842491495172:web:a1309df972edfb41034651",
  measurementId: "G-82HM8PDTGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();