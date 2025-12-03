const mysql = require('mysql2/promise')

const connection = await mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'test',
});

module.exports = createPool;
