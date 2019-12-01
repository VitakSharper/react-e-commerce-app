import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAA1m230Ot3z_SeS83TwMFolp8UMf-VCZY",
    authDomain: "react-e-commerce-app.firebaseapp.com",
    databaseURL: "https://react-e-commerce-app.firebaseio.com",
    projectId: "react-e-commerce-app",
    storageBucket: "react-e-commerce-app.appspot.com",
    messagingSenderId: "470981735500",
    appId: "1:470981735500:web:2a1cdde1327ec831b0b0e9"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
