//! import the ORM
const { Sequelize } = require("sequelize");

//! connect to the database
const options = {
  host: "localhost",
  port: 5432, // by default port
  username: "",
  password: "postgres",
  databaseName: "postgres",
};

// Option 1: Passing a connection URI   ->  //TODO: new Sequelize("postgres://user:pass@example.com:5432/dbname");

const connectionString = `postgres://${options.username}:${options.password}@${options.host}:${options.port}/${options.databaseName}`;

let sequelize = new Sequelize(connectionString);

module.exports = {
  sequelize,
};
