import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { firestore } from './admin';
import { writePromise } from './components/writePromise';
import { TIMEOUT } from './constants';

const ExportToSheets = functions
  .runWith({
    timeoutSeconds: 540,
    memory: '512MB',
  })
  .https.onRequest(async (req, res) => {
    const snapshot = await firestore.collection('events').get();
    const events = snapshot.docs.map((rec) => rec.data());
    const flag = (await admin.database().ref('/eventFlag').once('value')).val();

    res.status(200).send({
      message: 'Sheet update triggered!',
    });
    const users: any = {};
    let count = 0;
    const end = events.length;
    const half = end / 2;

    const chosenEvents = flag ? events.slice(0, half) : events.slice(half, end);

    // functions.logger.info('Info', flag, half, chosenEvents);
    for (const event of chosenEvents) {
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
            users[username].paid = payment;
          }
          if (users[username].paid[event['category']] === true) {
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
              user.paid[event['category']] === true ? 'Yes' : 'No',
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
    await admin.database().ref('/eventsFlag').set(!flag);
  });

export default ExportToSheets;
