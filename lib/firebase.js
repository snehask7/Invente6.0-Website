import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDt-RLInUZUGKBTPJRJ3ls6rZNVsGEB8C0',
  authDomain: 'invente-dc607.firebaseapp.com',
  projectId: 'invente-dc607',
  storageBucket: 'invente-dc607.appspot.com',
  messagingSenderId: '681111391781',
  appId: '1:681111391781:web:85fc065b9de9317607f9cc',
  measurementId: 'G-QRWPW4T9B8',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
