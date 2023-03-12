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

const sequelize = new Sequelize(connectionString);


async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connect();

module.exports = {
  sequelize,
}