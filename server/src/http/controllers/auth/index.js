const AuthService = require("../../../services/auth");
const AppError = require("../../../utils/AppError");

const postSignUp = require("./post-signup")({ AuthService, AppError });

module.exports = Object.freeze({
    postSignUp
});

