// import db from '../../helpers/db';

const fake = [
  {
    id: '1',
    type: 'create',
    user: 'Jared',
    timestamp: new Date().toISOString()
  },
  {
    id: '2',
    type: 'update',
    user: 'Marcelo',
    timestamp: new Date().toISOString()
  }
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // const query = `SELECT * from Event`;
      // const result = await db.query(query);
      // console.log(result)
      res.status(200).json(fake);
    }
    catch(e) {
      res.status(500);  
    }
  }
  else {
    res.status(404);
  }
}
