import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBdIPB41zgRBNYS4S1Gxs4V6BQluHaU3Yo",
        authDomain: "line-clone-react-73468.firebaseapp.com",
        projectId: "line-clone-react-73468",
        storageBucket: "line-clone-react-73468.appspot.com",
        messagingSenderId: "938562839454",
        appId: "1:938562839454:web:256ab19d9ae70dfcedec8f"
      }
);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth}