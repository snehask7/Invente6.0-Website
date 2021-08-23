import { firestore, serverTimestamp } from '../../lib/firebase';
import Cors from 'cors';

const cors = Cors({
  methods: ['GET'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    const {
      uid,
      email,
      username,
      firstName,
      lastName,
      phone,
      registerNumber,
      year,
      department,
    } = req.body;

    const userDoc = firestore.collection('users').doc(username);
    const usernameDoc = firestore.collection('usernames').doc(username);

    const batch = firestore.batch();
    batch.set(usernameDoc, {
      uid: uid,
      email: email,
      username: username,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    batch.set(userDoc, {
      email: email,
      username: username,
      firstName: firstName,
      lastName: lastName,
      registerNumber: registerNumber,
      year: year,
      department: department,
      phone: phone,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    try {
      await batch.commit();
      res.status(200).send({
        message: 'User created successfully',
      });
    } catch (err) {
      res.status(400).send({
        message: 'Bad request',
        error: err.toString(),
      });
    }
  }

  if (req.method == 'GET') {
    const { username } = req.query;
    const userRef = firestore.collection('users').doc(username);
    try {
      const data = (await userRef.get()).data();
      res.status(200).send(data);
    } catch (err) {
      res.status(404).send({
        message: 'Not found',
        error: err.toString(),
      });
    }
  }
}
