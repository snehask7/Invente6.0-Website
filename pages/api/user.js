import { firestore, serverTimestamp } from '../../lib/firebase';
import { cors } from '../../lib/middleware';

export default async function handler(req, res) {
  await cors(req, res);

  if (req.method === 'POST') {
    const {
      uid,
      email,
      username,
      fullName,
      phone,
      registerNumber,
      collegeName,
      year,
      department,
    } = req.body;

    const userDoc = firestore.collection('users').doc(username);
    const usernameDoc = firestore.collection('usernames').doc(uid);
    const paymentDoc = firestore.collection('payments').doc(username);

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
        fullName: fullName,
        registerNumber: registerNumber,
        year: year,
        department: department,
        phone: phone,
        collegeName: collegeName,
        events: [], // to store the list of registered events.
        updatedAt: serverTimestamp(),
      });

      batch.set(paymentDoc, {
        tech: false,
        nonTech: false,
        wsCentral: false,
        wsCivil: false,
        bmeHack: false,
        eceHack: false,
        cseHack: false,
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      res.status(400).send({
        message: 'Bad request',
        error: 'One are more body parameters are missing',
      });
      return;
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
      return;
    }
  }

  if (req.method == 'GET') {
    const { username } = req.query;
    const userRef = firestore.collection('users').doc(username);
    const paymentRef = firestore.collection('payments').doc(username);
    try {
      const userData = (await userRef.get()).data();
      const paymentData = (await paymentRef.get()).data();
      userData['updatedAt'] = userData['updatedAt'].seconds;
      paymentData['updatedAt'] = paymentData['updatedAt'].seconds;
      res.status(200).send({ ...userData, paid: paymentData });
      //res.status(200).send(userData);
    } catch (err) {
      res.status(404).send({
        message: 'Not found',
        error: err.toString(),
      });
    }
  }
}
