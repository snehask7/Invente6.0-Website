import * as functions from 'firebase-functions';
import { firestore } from './admin';
import { writePromise } from './components/writePromise';

const ExportEventToSheet = functions
  .runWith({
    timeoutSeconds: 540,
  })
  .https.onRequest(async (req, res) => {
    const { eventID } = req.body;
    if (!eventID) {
      res.status(400).send({
        error: 'Bad request format!',
      });
      return;
    }

    const eventRef = firestore.collection('events').doc(eventID);
    let event: any;
    try {
      event = (await eventRef.get()).data();
      res.status(200).send({
        message: 'Sheet update triggered for event ' + event.name + '!',
      });
    } catch (err: any) {
      res.status(404).send({
        message: 'Event not found',
        error: err.toString(),
      });
      return;
    }

    const users: any = {};

    try {
      // functions.logger.info(event);
      let userDataPaid = [];
      const userDataUnpaid = [];
      const userCollection = firestore.collection('users');
      const paymentsCollection = firestore.collection('payments');

      for (const username of event.registeredUsers) {
        if (!(username in users)) {
          users[username] = (await userCollection.doc(username).get()).data();
          const payment = (await paymentsCollection.doc(username).get()).data();
          users[username].paid = payment;
        }
        if (users[username].paid[event['category']] === true) {
          userDataPaid.push(users[username]);
        } else {
          userDataUnpaid.push(users[username]);
        }
      }

      userDataPaid = userDataPaid.concat(userDataUnpaid);
      const sheetsData = {
        spreadsheetId: event.sheetsID,
        range: 'A2:H' + (1 + userDataPaid.length),
        valueInputOption: 'USER_ENTERED',
        // insertDataOption: 'OVERWRITE',
        resource: {
          values: userDataPaid.map((user) => [
            user.fullName,
            user.department,
            user.collegeName,
            user.email,
            user.phone,
            user.registerNumber,
            user.year,
            user.paid[event['category']] === true ? 'Yes' : 'No',
          ]),
        },
      };
      await writePromise(sheetsData);
      functions.logger.info(
        'Event',
        event.name,
        event.department,
        event.registeredUsers.length,
      );
    } catch (err: any) {
      // Error handling is bad..
      functions.logger.error('An error occurred:', { error: err.toString() });
      // return;
    }
    functions.logger.info('Event export complete!');
  });

export default ExportEventToSheet;
