export default function handler(req, res) {
  res.status(200).json(
    [
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
  )
}