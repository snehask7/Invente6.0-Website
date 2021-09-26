import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { DB_FOLDER_ID_PATH } from './constants';
import { driveCreatePromise } from './components/driveCreatePromise';
import { firestore } from './admin';

const CreateFiles = functions.https.onRequest(async (req, res) => {
  const snapshot = await firestore.collection('events').get();
  const events: any = snapshot.docs.map((rec: any) => {
    return {
      ...rec.data(),
      id: rec.id,
    };
  });
  const deptIDs: any = {};
  const batch = firestore.batch();

  res.status(200).send({
    message: 'Sheets creation triggered',
  });

  for (const event of events) {
    // if (event.department !== 'CSE') continue;
    const DEPT_ID = DB_FOLDER_ID_PATH + '/' + event.department;

    deptIDs[DEPT_ID] =
      deptIDs[DEPT_ID] ||
      (await admin.database().ref(DEPT_ID).once('value')).val();

    const fileMetadata = {
      mimeType: 'application/vnd.google-apps.spreadsheet',
      name: event.name,
      parents: [deptIDs[DEPT_ID]],
    };

    try {
      const file: any = await driveCreatePromise({
        resource: fileMetadata,
        fields: 'id',
      });
      const eventsDoc = firestore.collection('events').doc(event.id);
      batch.update(eventsDoc, { sheetsID: file.id });
      functions.logger.info('Drive response', {
        eventName: event.name,
        eventDept: event.department,
        id: file.id,
      });
    } catch (err: any) {
      functions.logger.error('An error occurred:', { error: err.toString() });
      return;
    }
  }

  try {
    await batch.commit();
  } catch (err: any) {
    functions.logger.error('An error occurred:', { error: err.toString() });
    // return;
  }
});

export default CreateFiles;
