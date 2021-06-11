import mysql from 'mysql';

let connection;

const client = () => {
  if (!connection) {
    connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
    });

    connection.connect((err) => {
      if (err) throw err;
    });
  }

  return connection;
}

async function query(query) {
  return new Promise((resolve, reject) => {
    client().query(query, (err, rows) => {
      if (err) reject(err);

      resolve(rows);
    });
  });
}

const db = {
  client,
  query,
};

export default db;
