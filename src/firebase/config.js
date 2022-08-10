// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT5-Gs2HusT-RYmB_iABrNa04oYAQkJdk",
    authDomain: "carrito-euge.firebaseapp.com",
    projectId: "carrito-euge",
    storageBucket: "carrito-euge.appspot.com",
    messagingSenderId: "865393061735",
    appId: "1:865393061734:web:e1482554cd5ab17b41e2a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseConnectiosns = () => app