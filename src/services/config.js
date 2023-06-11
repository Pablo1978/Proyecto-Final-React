import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "acuario-pablo-s.firebaseapp.com",
    projectId: "acuario-pablo-s",
    storageBucket: "acuario-pablo-s.appspot.com",
    messagingSenderId: "1050699449430",
    appId: "1:1050699449430:web:69481198fe6ac817f1a7f7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);