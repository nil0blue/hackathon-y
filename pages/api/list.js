import db from '../helpers/db';

export const list = async (req, res) => {
  if (req.method === 'GET') {
    const query = `SELECT *`;

    const result = await db.query(query);

    res.status(200).json(result);
  } else {
    res.status(404);
  }
};
