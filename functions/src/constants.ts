import { OAuth2Client } from 'google-auth-library';

import * as functions from 'firebase-functions';

export const FUNCTIONS_REDIRECT =
  functions.config().env.googleapi.functions_redirect_live;
export const CONFIG_CLIENT_ID = functions.config().env.googleapi.client_id;
export const CONFIG_CLIENT_SECRET =
  functions.config().env.googleapi.client_secret;
export const DB_TOKEN_PATH = functions.config().env.googleapi.db_token_path;
export const DB_FOLDER_ID_PATH =
  functions.config().env.googleapi.db_folder_id_path;

export const TIMEOUT = 1 * 1000;
export const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive',
];

export const DOMAIN = 'verification.ssninvente.com';
export const functionsOauthClient = new OAuth2Client(
  CONFIG_CLIENT_ID,
  CONFIG_CLIENT_SECRET,
  FUNCTIONS_REDIRECT,
);
