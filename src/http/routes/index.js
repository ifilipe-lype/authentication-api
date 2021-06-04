const Router = require("express").Router;

const AuthController = require("../controllers/auth");
const UserController = require("../controllers/user");

const { authMiddleware } = require("../middlewares")

const authRoutes = require("./auth.routes")({ router: new Router, AuthController });
const userRoutes = require("./user.routes")({ router: new Router, UserController });

const routes = new Router();

routes.use("/auth", authRoutes);
routes.use("/users", authMiddleware, userRoutes);

module.exports = routes;
