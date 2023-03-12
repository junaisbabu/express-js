const express = require("express");
const { User } = require("../models/user_new");

const route = express.Router();

route.get("/", async function (req, res) {
  let sortBy = req.query.sortBy || "";

  // getAllUser({ sortBy }).then((result) => {
  //   res.render("tableData", { data: result.rows });
  // });

  const results = await User.findAll({ orderBy: sortBy }); //! I don't create `findAll`, findAll given to me from sequelize

  res.render("tableData", { data: results.map((el) => el.dataValues) });
});

route.get("/:user", async function (req, res) {
  const username = req.params.user;

  // const data = await getUserDataByName(username);
  // res.render("singleUser", { name: data.rows[0].name, age: data.rows[0].age });

  const data = await User.findOne({
    where: {
      name: username,
    },
  });

  console.log(data);

  res.render("singleUser", {
    name: data.dataValues.name,
    age: data.dataValues.age,
  });
});

module.exports = {
  dataMiniApp: route,
};
