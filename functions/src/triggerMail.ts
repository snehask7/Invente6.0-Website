import * as functions from 'firebase-functions';

const TriggerMail = functions.firestore
  .document('payments')
  .onUpdate(async (change, context) => {
    functions.logger.log('Hello World!', change.after.data());
  });

export default TriggerMail;
