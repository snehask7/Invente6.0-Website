import * as functions from 'firebase-functions';
import { firestore } from './admin';
import * as mailgun from 'mailgun-js';
import { DOMAIN } from './constants';

interface User {
  email: string;
  fullName: string;
  collegeName: string;
  events: string[];
  phone: string;
  department: string;
  year: string;
  updatedAt: string;
  username: string;
}

const eventType: { [key: string]: string } = {
  bmeHack: 'BME Hackathon',
  cseHack: 'CSE Hackathon',
  eceHack: 'ECE Hackathon',
  wsCentral: 'Workshop Central',
  wsCivil: 'Workshop Civil',
  tech: 'All Technical events',
  nonTech: 'All Non-Technical events',
};

const mg = mailgun({
  apiKey: functions.config().env.mailgun.apikey,
  domain: DOMAIN,
  host: 'api.eu.mailgun.net',
});

const TriggerMail = functions.firestore
  .document('/payments/{userId}')
  .onUpdate(async (change, context) => {
    const events = change.after.data();

    if (
      events.bmeHack === true ||
      events.cseHack === true ||
      events.eceHack === true ||
      events.wsCentral === true ||
      events.wsCivil === true ||
      events.tech === true ||
      events.nonTech === true
    ) {
      const userId = context.params.userId;
      const user: User | undefined = (
        await firestore.collection('users').doc(userId).get()
      ).data() as User;

      const eligible: { event: string }[] = [];
      delete events.updatedAt;
      for (const event of Object.keys(events)) {
        if (events[event]) {
          eligible.push({ event: eventType[event] });
        }
      }
      const variables = {
        name: user.fullName,
        eligible,
      };

      const data = {
        from: 'SSN Invente Team <noreply@verification.ssninvente.com>',
        to: user.email,
        subject: 'Your payment is verified',
        template: 'payment',
        'h:X-Mailgun-Variables': JSON.stringify(variables),
      };

      await mg.messages().send(data, function (error, body) {
        if (error !== undefined) {
          functions.logger.error(error);
        } else {
          functions.logger.info(body.message);
        }
      });
    } else {
      functions.logger.info('No eligible events');
    }
  });

export default TriggerMail;
