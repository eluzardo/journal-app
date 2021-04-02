import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBbZl-poDDxFUpy-tkugKs-j6DxFd69PrM",
    authDomain: "react-app-journal-screen.firebaseapp.com",
    projectId: "react-app-journal-screen",
    storageBucket: "react-app-journal-screen.appspot.com",
    messagingSenderId: "572409486231",
    appId: "1:572409486231:web:22ea8b0a5dbd187b8842d2"
};
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}