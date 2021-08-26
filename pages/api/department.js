import data from '../../data.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { did } = req.query;
    if (data[did] !== undefined) {
      res.status(200).json(data[did]);
    } else {
      res.status(404).json({
        message: 'Not Found',
      });
    }
  }
}
