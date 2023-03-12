//! this file needs `app` variable

//! const app = express(); --> (not doing this again) It will be an full app

const express = require("express");
require('../models/user_new');

// const { getUserDataByName, getAllUser } = require("../models/user_old");
// require("../models/connection");

const route = express.Router();

route.get("/", function (req, res) {
  let sortBy = req.query.sortBy || "";

  getAllUser({ sortBy }).then((result) => {
    res.render("tableData", { data: result.rows });
  });
});

route.get("/:user", async function (req, res) {
  const username = req.params.user;

  //! Promise-style code
  //   getUserDataByName(username).then((result) => {
  //     res.render('singleUser', {name: result.rows[0].name, age: result.rows[0].age})
  //   });

  //! async style code
  const data = await getUserDataByName(username);
  res.render("singleUser", { name: data.rows[0].name, age: data.rows[0].age });
});

module.exports = {
  dataMiniApp: route,
};
