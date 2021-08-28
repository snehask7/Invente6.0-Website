import { firestore, serverTimestamp } from '../../lib/firebase';
import { cors } from '../../lib/middleware';

export default async function handler(req, res) {
  await cors(req, res);

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
    const usernameDoc = firestore.collection('usernames').doc(uid);

    const batch = firestore.batch();

    try {
      batch.set(usernameDoc, {
        email: email,
        username: username,
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
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      res.status(400).send({
        message: 'Bad request',
        error: 'One are more body parameters are missing',
      });
    }

    try {
      await batch.commit();
      res.status(200).send({
        message: 'User created successfully',
        username,
      });
    } catch (err) {
      res.status(500).send({
        message: 'Server error',
        error: err.toString(),
      });
    }
  }

  if (req.method == 'GET') {
    const { username } = req.query;
    const userRef = firestore.collection('users').doc(username);
    try {
      const data = (await userRef.get()).data();
      data['updatedAt'] = data['updatedAt'].seconds;
      res.status(200).send(data);
    } catch (err) {
      res.status(404).send({
        message: 'Not found',
        error: err.toString(),
      });
    }
  }
}
