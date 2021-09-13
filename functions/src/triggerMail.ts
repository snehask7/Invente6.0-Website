import * as functions from 'firebase-functions';

const TriggerMail = functions.firestore
  .document('/payments/{userId}')
  .onUpdate(async (change, context) => {
    const userId = context.params.userId;
    functions.logger.info(userId);
  });

export default TriggerMail;
