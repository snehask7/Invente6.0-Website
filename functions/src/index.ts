/* eslint-disable require-jsdoc */
/* eslint-disable no-async-promise-executor */
import OAuthCallback from './oauthcallback';
import AuthGoogleAPI from './authGoogleApi';
import CreateFiles from './createFiles';
import ExportToSheets from './exportToSheets';
import ExportEventToSheet from './exportEventToSheet';
import AddHeaders from './addHeaders';
import triggerMail from './triggerMail';

// visit the URL for this Function to request tokens
exports.authgoogleapi = AuthGoogleAPI;
exports.oauthcallback = OAuthCallback;

// Create sheets for all departments. (CALL THIS ONLY ONCE, already done)
exports.createFiles = CreateFiles;

// Export the users to sheets
exports.exportToSheets = ExportToSheets;

// Export specific event to sheet
exports.exportEventToSheet = ExportEventToSheet;

// Add headers to all the sheets. (Call just once, already done)
exports.addHeaders = AddHeaders;

// Shoot mail to verified payment users
exports.triggerMail = triggerMail;
