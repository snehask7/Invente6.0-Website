import * as functions from 'firebase-functions';
import { firestore } from './admin';
import * as mailgun from 'mailgun-js';
import { DOMAIN } from './constants';
import { docs } from 'googleapis/build/src/apis/docs';

const mg = mailgun({
  apiKey: 'ebb6c4e2a083268fddb367eb1e51b20b-a3c55839-89643b78',
  domain: DOMAIN,
  host: 'api.eu.mailgun.net',
});

const AlertMail = functions.https.onRequest(async (req, res) => {
  const users = await firestore
    .collection('users')
    .where('email', '==', '')
    .get();
  functions;
});

export default AlertMail;
