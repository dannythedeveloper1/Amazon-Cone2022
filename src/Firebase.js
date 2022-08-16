// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdtZ27Suq1XzmVramTeWzl26c03ToTOwU",
    authDomain: "fir-4eaea.firebaseapp.com",
    projectId: "fir-4eaea",
    storageBucket: "fir-4eaea.appspot.com",
    messagingSenderId: "704004796350",
    appId: "1:704004796350:web:acd481a7154cae35ded3ef",
    measurementId: "G-K9HG56Q708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };