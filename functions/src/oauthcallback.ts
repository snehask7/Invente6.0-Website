import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { OAuth2Client } from 'google-auth-library';
import {
  CONFIG_CLIENT_ID,
  CONFIG_CLIENT_SECRET,
  FUNCTIONS_REDIRECT,
  DB_TOKEN_PATH,
} from './constants';

export const functionsOauthClient = new OAuth2Client(
  CONFIG_CLIENT_ID,
  CONFIG_CLIENT_SECRET,
  FUNCTIONS_REDIRECT,
);

const OAuthCallback = functions.https.onRequest(async (req, res) => {
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

export default OAuthCallback;
