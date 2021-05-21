import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDdfDKYIFJBDChUO-34Cevy3smXPtz5dww",
    authDomain: "playlist-app-quangddinh.firebaseapp.com",
    projectId: "playlist-app-quangddinh",
    storageBucket: "playlist-app-quangddinh.appspot.com",
    messagingSenderId: "775471471887",
    appId: "1:775471471887:web:de3c268a93d9519fedb27a",
    measurementId: "G-JFNQSB082L",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
