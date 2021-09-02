import { arrayUnion, firestore, serverTimestamp } from '../../lib/firebase';
import { cors } from '../../lib/middleware';

// NOTE: currently, existence of username is checked to prevent server crash.
export default async function handler(req, res) {
  await cors(req, res);

  if (req.method === 'POST') {
    const { username, eventid } = req.body;
    // bad request format
    if (username == null || eventid == null) {
      res.status(400).send({
        message: 'Bad request',
        error: 'One are more body parameters are missing',
      });
    } else {
      const userDoc = firestore.collection('users').doc(username);
      const eventDoc = firestore.collection('events').doc(eventid);
      try {
        await userDoc.update({
          events: arrayUnion(eventid),
          updatedAt: serverTimestamp(),
        });
        await eventDoc.update({
          registeredUsers: arrayUnion(username),
          updatedAt: serverTimestamp(),
        });
        res.status(200).send({
          message: 'User registered for event successfully',
        });
      } catch (err) {
        //console.error(err);
        res.status(400).send({
          message: 'Bad request',
          error: 'Username not found',
        });
      }
    }
  }
}
