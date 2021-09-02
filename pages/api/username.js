import { firestore } from '../../lib/firebase';
import { cors } from '../../lib/middleware';

export default async function handler(req, res) {
  await cors(req, res);
  if (req.method == 'GET') {
    const { uid } = req.query;

    if (uid == null) {
      res.status(400).send({
        message: 'Bad request',
        error: 'One are more query parameters are missing',
      });
      return;
    }

    const usernameDoc = firestore.collection('usernames').doc(uid);
    try {
      const { username } = (await usernameDoc.get()).data();
      res.status(200).send({ username });
    } catch (err) {
      //console.error(err.toString());
      res.status(404).send({
        message: 'Not found',
      });
    }
  }
}
