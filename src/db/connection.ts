import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost',
  port: 33060,
  user: 'root',
  password: 'root',
  database: 'list-resttrict',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default connection;
