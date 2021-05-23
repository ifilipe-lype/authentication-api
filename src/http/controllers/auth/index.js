const AuthService = require("../../../services/auth");
const AppError = require("../../../utils/AppError");

const postSignUp = require("./post-signup")({ AuthService, AppError });
const postSignIn = require("./post-signin")({ AuthService, AppError });

module.exports = Object.freeze({
    postSignUp,
    postSignIn
});

