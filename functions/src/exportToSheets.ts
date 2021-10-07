import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { firestore } from './admin';
import { writePromise } from './components/writePromise';

const ExportToSheets = functions
  .runWith({
    timeoutSeconds: 540,
  })
  .pubsub.schedule('every 15 minutes')
  .timeZone('America/New_York')
  .onRun(async (context) => {
    const snapshot = await firestore.collection('events').get();
    const events = snapshot.docs.map((rec) => rec.data());
    const flag = (await admin.database().ref('/eventFlag').once('value')).val();

    // res.status(200).send({
    //   message: 'Sheet update triggered!',
    // });
    const users: any = {};
    let userCount = 0;
    const half = events.length / 2;
    let count = 0;

    let chosenEvents: FirebaseFirestore.DocumentData[] = [];
    if (flag == 0) chosenEvents = events.slice(0, half / 2);
    else if (flag == 1) chosenEvents = events.slice(half / 2, half);
    else if (flag == 2) chosenEvents = events.slice(half, (3 * half) / 2);
    else if (flag == 3)
      chosenEvents = events.slice((3 * half) / 2, events.length);
    functions.logger.info('Flag', flag);
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
            const payment = (
              await paymentsCollection.doc(username).get()
            ).data();
            users[username].paid = payment;
            userCount++;
          }
          if (users[username].paid[event['category']] === true) {
            userDataPaid.push(users[username]);
          } else {
            userDataUnpaid.push(users[username]);
          }
        }

        userDataPaid = userDataPaid.concat(userDataUnpaid);
        if (userDataPaid.length === 0) continue;
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
          userCount,
        );
      } catch (err: any) {
        // Error handling is bad..
        functions.logger.error('An error occurred:', { error: err.toString() });
        // return;
      }
      count++;
      // wait for sometime to not exceed per-minute write request quota
      // await new Promise((resolve) => setTimeout(resolve, TIMEOUT));
    }
    functions.logger.info(
      'Export complete! Events exported (with > 0 registrations):',
      count,
    );
    await admin
      .database()
      .ref('/eventFlag')
      .set((flag + 1) % 4);
  });

export default ExportToSheets;
