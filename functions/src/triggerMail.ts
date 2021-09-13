import * as functions from 'firebase-functions';
import * as mailgun from 'mailgun-js';
import { DOMAIN } from './constants';

const mg = mailgun({
  apiKey: 'ebb6c4e2a083268fddb367eb1e51b20b-a3c55839-89643b78',
  domain: DOMAIN,
});

const TriggerMail = functions.firestore
  .document('/payments/{userId}')
  .onUpdate(async (change, context) => {
    const userId = context.params.userId;
    const data = {
      from: 'Excited User <verification@ssninvente.com>',
      to: 'harithiru2018@gmail.com',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomeness!' + userId,
    };
    await mg.messages().send(data, function (error, body) {
      if (error !== undefined) {
        functions.logger.error(error);
      } else {
        functions.logger.info(body.message);
      }
    });
  });

export default TriggerMail;
