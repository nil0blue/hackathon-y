export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json(req.body)
  } else {
    res.status(404);
  }
};
