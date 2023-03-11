const { Client } = require("pg");

const PG_PORT = 5432;

const client = new Client({
  host: "localhost",
  user: "junais",
  port: PG_PORT,
  database: "postgres",
  password: "postgres",
});

async function createTable(req, res) {
  //! start connecting to the DB
  await client.connect();

  await client.query(`
  CREATE TABLE userdata (
      name TEXT NOT NULL,
      age INT CHECK (age > 0)
  );
  `);
}

createTable();

function addUser(fullname, age) {
  const parametrizedQuery = "INSERT INTO userdata VALUES ($1, $2) RETURNING *";
  return client.query(parametrizedQuery, [fullname, age]);
}

function getUserDataByName(name) {
  const sql = "SELECT * FROM userdata WHERE name = $1";

  return client.query(sql, [name]);
}


module.exports = {
  addUser,
  getUserDataByName
}