const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./connection");

/* 
    CREATE TABLE userdata (
      name TEXT NOT NULL,
      age INT CHECK (age > 0)
  );
*/

//! Description of a table in postgres
//! If you create table called `user` -> it will be `users`      (because it pluralized everything automatically)
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.TEXT,
      allowNull: false, // NOT NULL
    },
    age: {
      type: DataTypes.INTEGER,
      validate(value) {
        if (value <= 0) {
          throw new Error("age must be bigger than 0");
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
    },
  }
  //   {freezeTableName: true} //! don't pluralized the table name
);

//! create the table if it does not exist
User.sync();
