// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1U-HQBrJOymUgpaurV2JRVP-PX2-82_M",
    authDomain: "netflix-talk.firebaseapp.com",
    projectId: "netflix-talk",
    storageBucket: "netflix-talk.appspot.com",
    messagingSenderId: "23691982392",
    appId: "1:23691982392:web:67682346c543850f7dd8cd",
    measurementId: "G-4WM6DMMTV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);