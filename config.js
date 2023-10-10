import firebase from 'firebase/compat';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyAbwWYMsSqPnpnaZgR37kNGz0xNoL-6f_A",
    authDomain: "test-3aea8.firebaseapp.com",
    projectId: "test-3aea8",
    storageBucket: "test-3aea8.appspot.com",
    messagingSenderId: "235686328554",
    appId: "1:235686328554:web:ebca27376b035b5a9b3f93",
    measurementId: "G-NQ9429W1GP"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }