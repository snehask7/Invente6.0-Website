import { SCOPES } from './constants';
import * as functions from 'firebase-functions';
import { functionsOauthClient } from './oauthcallback';

const AuthGoogleAPI = functions.https.onRequest((req, res) => {
  res.set('Cache-Control', 'private, max-age=0, s-maxage=0');
  res.redirect(
    functionsOauthClient.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent',
    }),
  );
});

export default AuthGoogleAPI;
