import Cors from 'cors';

export const cors = (req, res, methods) => {
  const cors = Cors({
    methods: methods || ['GET', 'POST', 'PUT', 'DELETE'],
  });
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        console.log(result.message);
        return reject(result);
      }
      return resolve(result);
    });
  });
};
