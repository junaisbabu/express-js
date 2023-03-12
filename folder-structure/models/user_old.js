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

function getAllUser({ sortBy }) {
  if (!["age", "name"].includes(sortBy.toLowerCase())) {
    sortBy = "name";
  }
  let sql = `SELECT * FROM userdata ORDER BY ${sortBy}`;
  return client.query(sql);
}


function changeName(newName, oldName) {
  //! Two problems with writing your own SQL statement
  //* 1. You have to be careful of SQL Injections
  //* 2. You have to wirte SQL 

  //! ORM helps at this level
  // If you use an ORM
  //    -> It's going to take care of SQL Injections
  //    -> It's going to ensure that there are no SQL vulnerabily
  //    -> It's going to write SQL for you
  let sql = `UPDATE userdata SET name=${newName} WHERE name=${oldName}`;
  return client.query(sql);
}

module.exports = {
  addUser,
  getUserDataByName,
};
