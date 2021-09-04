const Pool = require("pg").Pool;
const pool = new Pool({
    user:  process.env.POSTGRESS_DB_USER,
    password: process.env.POSTGRESS_DB_PASSWORD,
    host: process.env.POSTGRESS_DB_HOST,
    port: process.env.POSTGRESS_DB_PORT,
    database: process.env.POSTGRESS_DB_NAME,
    ssl: { rejectUnauthorized: false }
});

/* var mysql = require('mysql2');
var pool  = mysql.createPool({
  host            : 'containers-us-west-4.railway.app',
  user            : 'root',
  password        : 'FCqWqBUxeVc0rHrmdwDW',
  database        : 'railway',
  port:7462,
  ssl: { rejectUnauthorized: false }
}); */
module.exports = pool;