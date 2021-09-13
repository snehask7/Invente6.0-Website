import { OAuth2Client } from 'google-auth-library';

import * as functions from 'firebase-functions';

export const FUNCTIONS_REDIRECT =
  functions.config().googleapi.functions_redirect_live;
export const CONFIG_CLIENT_ID = functions.config().googleapi.client_id;
export const CONFIG_CLIENT_SECRET = functions.config().googleapi.client_secret;
export const DB_TOKEN_PATH = functions.config().googleapi.db_token_path;
export const DB_FOLDER_ID_PATH = functions.config().googleapi.db_folder_id_path;

export const TIMEOUT = 1 * 1000;
export const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive',
];

export const DOMAIN = 'sandboxe003bbcca3c04e79ad19448f1f5cc5e7.mailgun.org';
export const functionsOauthClient = new OAuth2Client(
  CONFIG_CLIENT_ID,
  CONFIG_CLIENT_SECRET,
  FUNCTIONS_REDIRECT,
);
