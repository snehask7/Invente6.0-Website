/* eslint-disable require-jsdoc */
/* eslint-disable no-async-promise-executor */
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';

// Initial config.
admin.initializeApp({
  projectId: 'invente-development',
  storageBucket: 'invente-development.appspot.com',
  databaseURL: 'https://invente-development-default-rtdb.firebaseio.com/',
});

const firestore = admin.firestore();

// Replace with functions_redirect_local if running with the local emulator.
const FUNCTIONS_REDIRECT = functions.config().googleapi.functions_redirect_live;
const CONFIG_CLIENT_ID = functions.config().googleapi.client_id;
const CONFIG_CLIENT_SECRET = functions.config().googleapi.client_secret;
const DB_TOKEN_PATH = functions.config().googleapi.db_token_path;
const DB_FOLDER_ID_PATH = functions.config().googleapi.db_folder_id_path;

// Delay between writes to Sheets
const TIMEOUT = 1 * 1000;
const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive',
];

const functionsOauthClient = new OAuth2Client(
  CONFIG_CLIENT_ID,
  CONFIG_CLIENT_SECRET,
  FUNCTIONS_REDIRECT,
);

// OAuth token cached locally.
let oauthTokens: any = null;

// visit the URL for this Function to request tokens
exports.authgoogleapi = functions.https.onRequest((req, res) => {
  res.set('Cache-Control', 'private, max-age=0, s-maxage=0');
  res.redirect(
    functionsOauthClient.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent',
    }),
  );
});

exports.oauthcallback = functions.https.onRequest(async (req, res) => {
  res.set('Cache-Control', 'private, max-age=0, s-maxage=0');
  const code = `${req.query.code}`;
  try {
    const { tokens } = await functionsOauthClient.getToken(code);
    await admin.database().ref(DB_TOKEN_PATH).set(tokens);
    res
      .status(200)
      .send(
        'Successfully configured with new credentials. You can now close this page.',
      );
  } catch (error) {
    res.status(400).send(error);
  }
});

// Create sheets for all departments. (CALL THIS ONLY ONCE, already done)
exports.createFiles = functions.https.onRequest(async (req, res) => {
  const snapshot = await firestore.collection('events').get();
  const events: any = snapshot.docs.map((rec) => {
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

// Export the users to sheets
exports.exportToSheets = functions.https.onRequest(async (req, res) => {
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

// Add headers to all the sheets. (Call just once, already done)
exports.addHeaders = functions.https.onRequest(async (req, res) => {
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
      .catch((err) => {
        functions.logger.error('An error occurred:', { error: err.toString() });
        return;
      });
    // wait for sometime to not exceed per-minute write request quota
    await new Promise((resolve) => setTimeout(resolve, TIMEOUT));
  }
});

function writePromise(requestWithoutAuth: any) {
  return new Promise(async (resolve, reject) => {
    const client = await getAuthorizedClient();
    const sheets = google.sheets('v4');
    const request = requestWithoutAuth;
    request.auth = client;
    return sheets.spreadsheets.values.update(
      request,
      (err: any, response: any) => {
        if (err) {
          functions.logger.log(`The API returned an error: ${err}`);
          return reject(err);
        }
        return resolve(response.data);
      },
    );
  });
}

function driveCreatePromise(requestWithoutAuth: any) {
  return new Promise(async (resolve, reject) => {
    const client = await getAuthorizedClient();
    const drive = google.drive('v3');
    const request = requestWithoutAuth;
    request.auth = client;
    return drive.files.update(request, function (err: any, response: any) {
      if (err) {
        functions.logger.log(`The API returned an error: ${err}`);
        return reject(err);
      }
      return resolve(response.data);
    });
  });
}

// checks if oauthTokens have been loaded into memory, and if not, retrieves them
async function getAuthorizedClient() {
  if (oauthTokens) {
    return functionsOauthClient;
  }
  const snapshot = await admin.database().ref(DB_TOKEN_PATH).once('value');
  oauthTokens = snapshot.val();
  functionsOauthClient.setCredentials(oauthTokens);
  return functionsOauthClient;
}
