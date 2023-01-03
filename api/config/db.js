//const { Pool, Client } = require("pg");
const Pool = require('pg').Pool

const credentials = {
  user: 'ghost',
  host: 'localhost',
  database: 'lmis',
  password: "ghost",
  port: 5432,
};

var sql = new Pool(credentials);


module.exports = sql;
