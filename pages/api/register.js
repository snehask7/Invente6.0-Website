import { firestore, serverTimestamp, arrayUnion } from '../../lib/firebase';
import { cors } from '../../lib/middleware';

// NOTE: currently, existence of username is checked to prevent server crash.
export default async function handler(req, res) {
  await cors(req, res);

  if (req.method === 'POST') {
    const { username, eventid } = req.body;

    // bad request format
    if (username === null || eventid === null) {
      res.status(400).send({
        message: 'Bad request',
        error: 'One are more body parameters are missing',
      });
    } else {
      const userDoc = firestore.collection('users').doc(username);
      let result;

      try {
        result = await userDoc.update({
          events: arrayUnion(eventid),
          updatedAt: serverTimestamp(),
        });
      } catch (err) {
        //console.error(err);
        res.status(400).send({
          message: 'Bad request',
          error: 'Username not found',
        });
      }

      // if result exists (document exists and has been updated)
      if (result) {
        try {
          res.status(200).send({
            message: 'User registered for event successfully',
          });
        } catch (err) {
          res.status(500).send({
            message: 'Server error',
            error: err.toString(),
          });
        }
      }
    }
  }
}
