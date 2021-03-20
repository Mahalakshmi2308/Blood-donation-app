import firebase from 'firebase';
require('@firebase/firestore')

 var firebaseConfig = {
    apiKey: "AIzaSyD2Ww3GiW5H1WMMN1HI33e2JESPafPTLtA",
    authDomain: "blood-donate-b4076.firebaseapp.com",
    projectId: "blood-donate-b4076",
    storageBucket: "blood-donate-b4076.appspot.com",
    messagingSenderId: "337796047423",
    appId: "1:337796047423:web:ff6405cc9c863b77e18e8a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();