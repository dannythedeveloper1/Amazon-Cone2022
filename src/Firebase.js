import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBrg2P64LIJBXiGaqE1y-OEGXksJgdbCXA",
    authDomain: "fir-437f4.firebaseapp.com",
    projectId: "fir-437f4",
    storageBucket: "fir-437f4.appspot.com",
    messagingSenderId: "773017216538",
    appId: "1:773017216538:web:4f7ec5cc01cfb27d95d3a3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();


export { auth, db };
