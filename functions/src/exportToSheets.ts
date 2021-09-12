import * as functions from 'firebase-functions';
import { firestore } from './admin';
import { writePromise } from './components/writePromise';
import { TIMEOUT } from './constants';

const ExportToSheets = functions.https.onRequest(async (req, res) => {
  const snapshot = await firestore.collection('events').get();
  const events = snapshot.docs.map((rec) => rec.data());

  res.status(200).send({
    message: 'Sheet update triggered!',
  });
  const users: any = {};
  let count = 0;

  for (const event of events) {
    try {
      // functions.logger.info(event);
      let userDataPaid = [];
      const userDataUnpaid = [];
      const userCollection = firestore.collection('users');
      const paymentsCollection = firestore.collection('payments');

      for (const username of event.registeredUsers) {
        if (!(username in users)) {
          users[username] = (await userCollection.doc(username).get()).data();
          const payment: any = (
            await paymentsCollection.doc(username).get()
          ).data();
          users[username].paid = payment[event['category']];
        }
        if (users[username].paid === true) {
          userDataPaid.push(users[username]);
        } else {
          userDataUnpaid.push(users[username]);
        }
      }

      userDataPaid = userDataPaid.concat(userDataUnpaid);
      if (userDataPaid.length === 0) continue;
      await writePromise({
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
            user.paid === true ? 'Yes' : 'No',
          ]),
        },
      });
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
    count++;
    // wait for sometime to not exceed per-minute write request quota
    await new Promise((resolve) => setTimeout(resolve, TIMEOUT));
  }
  functions.logger.info(
    'Export complete! Events exported (with > 0 registrations):',
    count,
  );
});

export default ExportToSheets;
