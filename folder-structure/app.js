const express = require("express");

//! executes data.js
//! importing the mini-app
const { dataMiniApp } = require("./routes/data");
const { userRoutes } = require("./routes/users");


const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


//! combine the mini-app
app.use("/", userRoutes);
//*     /data/
//*     /data/junais
app.use("/data", dataMiniApp); //! `/abcd` that becomes a prefix of everything in the dataMiniApp (/abcd/data)




let PORT = 4567;
app.listen(PORT);
