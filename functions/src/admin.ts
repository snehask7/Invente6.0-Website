import * as admin from 'firebase-admin';

// Initial config.
admin.initializeApp({
  projectId: 'invente-development',
  storageBucket: 'invente-development.appspot.com',
  databaseURL: 'https://invente-development-default-rtdb.firebaseio.com/',
});

export const firestore = admin.firestore();
