//! this file needs `app` variable

//! const app = express(); --> (not doing this again) It will be an full app

const express = require("express");
const route = express.Router();
const { getUserDataByName } = require("../models/user");

route.get("/", function (req, res) {
  let sortBy = req.query.sortBy || "";

  if (!["age", "name"].includes(sortBy.toLowerCase())) {
    sortBy = "name";
  }
  let sql = `SELECT * FROM userdata ORDER BY ${sortBy}`;
  //   client.query(sql).then((result) => {
  //     res.json(result.rows);
  //   });

  res.end("response from /data");
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
