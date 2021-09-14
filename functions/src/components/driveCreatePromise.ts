/* eslint-disable require-jsdoc */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getAuthorizedClient } from './getAuthorizedClient';
import { google } from 'googleapis';
import * as functions from 'firebase-functions';

export function driveCreatePromise(requestWithoutAuth: any) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const client = await getAuthorizedClient();
    const drive = google.drive('v3');
    const request = requestWithoutAuth;
    request.auth = client;
    return drive.files.create(request, function (err: any, response: any) {
      if (err) {
        functions.logger.log(`The API returned an error: ${err}`);
        return reject(err);
      }
      return resolve(response.data);
    });
  });
}
