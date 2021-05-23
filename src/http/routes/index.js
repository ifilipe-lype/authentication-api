const Router = require("express").Router;

const AuthController = require("../controllers/auth");

const authRoutes = require("./auth.routes")({ router: new Router, AuthController });

const routes = new Router();

routes.use("/auth", authRoutes);

module.exports = routes;
