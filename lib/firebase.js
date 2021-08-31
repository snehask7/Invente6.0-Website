import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBK3zy_bNCFlvKDyC_R4l2OJA2K5IWtfIY',
  authDomain: 'invente-development.firebaseapp.com',
  projectId: 'invente-development',
  storageBucket: 'invente-development.appspot.com',
  messagingSenderId: '310653477634',
  appId: '1:310653477634:web:064937d5aeb4bc0cfa981b',
  measurementId: 'G-2GWR4KN4ZW',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

const firestore = firebase.firestore();

export { auth, firestore };

// severTimestamp for `createdAt` and `updatedAt`
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

// emailVerification and password reset
export const verifyPasswordResetCode = auth.verifyPasswordResetCode;
export const applyActionCode = auth.applyActionCode;
export const confirmPasswordReset = auth.confirmPasswordReset;
