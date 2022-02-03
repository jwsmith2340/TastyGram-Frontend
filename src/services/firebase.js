import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9L-CPgRG4kGsoHf4L0Ggc9bFkyklH7Dg",
    authDomain: "auth-dev-b65fe.firebaseapp.com",
    projectId: "auth-dev-b65fe",
    storageBucket: "auth-dev-b65fe.appspot.com",
    messagingSenderId: "778738552353",
    appId: "1:778738552353:web:d0d2ff7f9cf374ea341d60"
  };
  


// activate firebase app
firebase.initializeApp(firebaseConfig);

// config settings
const auth = firebase.auth();

// set up provider
const provider = new firebase.auth.GoogleAuthProvider();

// set up auth functions
function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}

export {login, logout, auth};
