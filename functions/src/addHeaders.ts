import * as functions from 'firebase-functions';
import { firestore } from './admin';
import { writePromise } from './components/writePromise';
import { TIMEOUT } from './constants';

const AddHeaders = functions.https.onRequest(async (req, res) => {
  const snapshot = await firestore.collection('events').get();
  const events = snapshot.docs.map((rec) => rec.data());

  res.status(200).send({
    message: 'Add header call triggered.',
  });

  for (const event of events) {
    // if (event.department !== 'CSE') continue;
    writePromise({
      spreadsheetId: event.sheetsID,
      range: 'A1:H1',
      valueInputOption: 'USER_ENTERED',
      // insertDataOption: 'OVERWRITE',
      resource: {
        values: [
          [
            'Name:',
            'Department:',
            'College Name:',
            'Email:',
            'Phone:',
            'Register Number:',
            'Year:',
            'Paid:',
          ],
        ],
      },
    })
      .then((data: any) => {
        functions.logger.info(
          'Sheets response',
          data.spreadsheetId,
          event.department,
          event.name,
        );
      })
      .catch((err: any) => {
        functions.logger.error('An error occurred:', { error: err.toString() });
        return;
      });
    // wait for sometime to not exceed per-minute write request quota
    await new Promise((resolve) => setTimeout(resolve, TIMEOUT));
  }
});

export default AddHeaders;
