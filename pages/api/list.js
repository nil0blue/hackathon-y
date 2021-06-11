import db from '../../helpers/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      res.status(200).json(await requestData());
    }
    catch(e) {
      res.status(500);  
    }
  }
  else {
    res.status(404);
  }
}

async function requestData() {
  const query = `SELECT * from Event`;
  const result = await db.query(query);
  return result;
}
