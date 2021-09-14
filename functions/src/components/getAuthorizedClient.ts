/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable require-jsdoc */
import * as admin from 'firebase-admin';
import { functionsOauthClient } from '../oauthcallback';
import { DB_TOKEN_PATH } from '../constants';

let oauthTokens: any = null;

export async function getAuthorizedClient() {
  if (oauthTokens) {
    return functionsOauthClient;
  }
  const snapshot = await admin.database().ref(DB_TOKEN_PATH).once('value');
  oauthTokens = snapshot.val();
  functionsOauthClient.setCredentials(oauthTokens);
  return functionsOauthClient;
}
