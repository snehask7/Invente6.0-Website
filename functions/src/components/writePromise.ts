/* eslint-disable require-jsdoc */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import * as functions from 'firebase-functions';
import { google } from 'googleapis';
import { getAuthorizedClient } from './getAuthorizedClient';

// eslint-disable-next-line require-jsdoc
export function writePromise(requestWithoutAuth: any): Promise<any> {
  // eslint-disable-next-line no-async-promise-executor
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
