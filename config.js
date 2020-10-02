import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC6Rj0mYtTHNy7Zqv91UALugvR5wxAB8b8",
  authDomain: "booksantaapp-659a7.firebaseapp.com",
  databaseURL: "https://booksantaapp-659a7.firebaseio.com",
  projectId: "booksantaapp-659a7",
  storageBucket: "booksantaapp-659a7.appspot.com",
  messagingSenderId: "590275443376",
  appId: "1:590275443376:web:31a74b288dda7512311975",
  measurementId: "G-PKXXBTPT1V"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
