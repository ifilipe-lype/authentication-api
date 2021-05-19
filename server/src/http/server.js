const path = require("path");
require("dotenv").config({
  path: process.env.NODE_ENV === "development" ? path.resolve(__dirname, ".env.dev") : path.resolve(__dirname, ".env")
});

const Express = require("express");
const routes = require("./routes");

const app = Express();

// Setup json encoding, and forms data
app.use(Express.json());
app.use(Express.urlencoded());

// Setup routes.
app.use("/api", routes);

module.exports = app;
