import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCYBZeHua_lAckQ8WqNHd_FBip_4HhLtio",
    authDomain: "auth-redux-924d3.firebaseapp.com",
    projectId: "auth-redux-924d3",
    storageBucket: "auth-redux-924d3.appspot.com",
    messagingSenderId: "147008256823",
    appId: "1:147008256823:web:272e4086fbb894f667b8b2"
  };

const firebase_app=firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();

export {auth ,provider};
