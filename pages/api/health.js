import { cors } from '../../lib/middleware';

export default async function handler(req, res) {
  await cors(req, res, ['GET']);
  res.status(200).json({ ok: 'true' });
}
