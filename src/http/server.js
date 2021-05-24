
if(process.env.NODE_ENV === "development"){
  require("dotenv").config({
    path: ".env.dev",
  });
}

const cors = require("cors");
const Express = require("express");
const routes = require("./routes");

const app = Express();

// Setup json encoding, and forms data
app.use("*", cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Setup routes.
app.use("/api", routes);

module.exports = app;
