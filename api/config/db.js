//const { Pool, Client } = require("pg");
const Pool = require('pg').Pool

const credentials = {
  user: 'posgress',
  host: 'localhost',
  database: 'lmis_db',
  password: "root1234",
  port: 5432,
};

var sql = new Pool(credentials);


module.exports = sql;
