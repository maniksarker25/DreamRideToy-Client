// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Ah4a7_zrH44uPRwR0Vo1EPuE_N1x3EY",
  authDomain: "dream-ride-toy.firebaseapp.com",
  projectId: "dream-ride-toy",
  storageBucket: "dream-ride-toy.appspot.com",
  messagingSenderId: "273895088507",
  appId: "1:273895088507:web:5fa5c6b657e8be25c1ddde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;