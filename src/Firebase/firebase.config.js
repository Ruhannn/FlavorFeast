// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBMU_t19MkXyLKGnB5nx5ZpSilWu2ADrcQ",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "b8a10-brandshop-ruhannn.firebaseapp.com",
  projectId: "b8a10-brandshop-ruhannn",
  storageBucket: "b8a10-brandshop-ruhannn.appspot.com",
  messagingSenderId: "567039983552",
  appId: "1:567039983552:web:d8d5fb70b0c2c883d41225",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
