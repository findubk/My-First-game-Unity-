import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



var firebaseConfig = {
    apiKey: "AIzaSyANrCmF3YSnCCt6hCdYPO_kkPnsDJt0LYE",
    authDomain: "react-redux-firebase-41167.firebaseapp.com",
    projectId: "react-redux-firebase-41167",
    storageBucket: "react-redux-firebase-41167.appspot.com",
    messagingSenderId: "548443601262",
    appId: "1:548443601262:web:3ed7cef17a51b90e5b297f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({thimestampsInSnapshots:true});


  export default firebase;