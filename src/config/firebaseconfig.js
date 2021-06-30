import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyD3XSYthv7UwgrIWcopCNkQryMydS1n4S4",
    authDomain: "olx-clone-cae0f.firebaseapp.com",
    projectId: "olx-clone-cae0f",
    storageBucket: "olx-clone-cae0f.appspot.com",
    messagingSenderId: "774654027977",
    appId: "1:774654027977:web:2f6b4b1976ef88b8238518"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const db = firebase.firestore();


  export const auth = firebase.auth();