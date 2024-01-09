// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY81Yyjt9J2a9IBRWDZjQVjYKcW_U2jCE",
  authDomain: "mern-book-inventory-6cb09.firebaseapp.com",
  projectId: "mern-book-inventory-6cb09",
  storageBucket: "mern-book-inventory-6cb09.appspot.com",
  messagingSenderId: "484902483650",
  appId: "1:484902483650:web:8ec2f268936cc0ae772d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;