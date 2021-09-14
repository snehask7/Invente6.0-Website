import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  connectFirestoreEmulator,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';

const firebase = initializeApp({
  projectId: 'invente-development',
  storageBucket: 'invente-development.appspot.com',
  databaseURL: 'https://invente-development-default-rtdb.firebaseio.com/',
});

const firestore = getFirestore(firebase);
connectFirestoreEmulator(firestore, 'localhost', 8080);

async function main(): Promise<any> {
  const payments = collection(firestore, 'payments');
  const names = [];
  (await getDocs(payments)).forEach(async (payment) => {
    names.push(payment.id);
  });
  await Promise.all(
    names.map(async (name) => {
      if (Math.floor(Math.random() * 2) === 1) {
        await updateDoc(doc(firestore, `payments/${name}`), {
          bmeHack: true,
          updatedAt: serverTimestamp(),
        });
      }
    }),
  );
}

main()
  .then(() => {
    console.log('done');
  })
  .finally(() => {
    process.exit(0);
  });
