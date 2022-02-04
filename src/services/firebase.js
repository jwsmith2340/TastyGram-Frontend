import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDzDILvM8h-Y7bb4aREEkS9l7X_zUu6DYM",
    authDomain: "tastygram-66c02.firebaseapp.com",
    projectId: "tastygram-66c02",
    storageBucket: "tastygram-66c02.appspot.com",
    messagingSenderId: "678445359188",
    appId: "1:678445359188:web:c21af5b792b5a1dfc50dc1"
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
