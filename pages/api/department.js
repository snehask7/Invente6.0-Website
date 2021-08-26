import data from '../../data.json';

export default function handler(req, res) {
  const { department } = req.query;
  if (data[department] !== undefined) {
    res.status(200).json(data[department]);
  } else {
    req.status(404).json({
      message: 'Not Found',
    });
  }
}
