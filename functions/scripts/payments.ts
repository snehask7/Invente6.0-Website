import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  writeBatch,
  connectFirestoreEmulator,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import * as faker from 'faker';

const firebase = initializeApp({
  projectId: 'invente-development',
  storageBucket: 'invente-development.appspot.com',
  databaseURL: 'https://invente-development-default-rtdb.firebaseio.com/',
});

const firestore = getFirestore(firebase);
connectFirestoreEmulator(firestore, 'localhost', 8080);

const batch = writeBatch(firestore);
for (let i = 0; i < 100; i++) {
  batch.set(doc(firestore, 'payments', faker.name.firstName()), {
    bmeHack: false,
    cseHack: false,
    nonTech: false,
    tech: false,
    wsCentral: false,
    wsCivil: false,
    updatedAt: serverTimestamp(),
  });
}

batch
  .commit()
  .then(() => {
    console.log('done');
  })
  .finally(() => {
    process.exit(0);
  });
