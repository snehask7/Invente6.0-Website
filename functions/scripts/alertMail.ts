import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';
import * as mailgun from 'mailgun-js';

const mg = mailgun({
  apiKey: 'ebb6c4e2a083268fddb367eb1e51b20b-a3c55839-89643b78',
  domain: 'verification.ssninvente.com',
  host: 'api.eu.mailgun.net',
});

const app = initializeApp({
  apiKey: 'AIzaSyBK3zy_bNCFlvKDyC_R4l2OJA2K5IWtfIY',
  authDomain: 'invente-development.firebaseapp.com',
  databaseURL: 'https://invente-development-default-rtdb.firebaseio.com',
  projectId: 'invente-development',
  storageBucket: 'invente-development.appspot.com',
  messagingSenderId: '310653477634',
  appId: '1:310653477634:web:064937d5aeb4bc0cfa981b',
  measurementId: 'G-2GWR4KN4ZW',
});

const firestore = getFirestore(app);

async function main() {
  const users = await getDocs(
    query(
      collection(firestore, 'users'),
      where('email', '==', 'sneha18157@cse.ssn.edu.in'),
    ),
  );
  await Promise.all(
    users.docs.map(async (document) => {
      console.log(document.data());
      await Promise.all(
        document.data().events.map(async (event: any) => {
          console.log(event);
          const details: any = await getDoc(doc(firestore, 'events', event));
          const category: any = details.data().category;
          const paymentStatus: any = await getDoc(
            doc(firestore, 'payments', document.data().username),
          );
          console.log(paymentStatus.exists());
          const variables = {
            name: document.data().fullName,
          };
          const data = {
            from: 'SSN Invente Team <noreply@verification.ssninvente.com>',
            to: document.data().email,
            subject: 'Reminder - Payment',
            template: 'alert',
            'h:X-Mailgun-Variables': JSON.stringify(variables),
          };
          if (paymentStatus.data()[category] == false) {
            console.log('Sending a mail');
            await mg.messages().send(data, function (error, body) {
              if (error !== undefined) {
                console.error(error);
              } else {
                console.log(body.message);
              }
            });
          }
        }),
      );
    }),
  );
}

main().then();
