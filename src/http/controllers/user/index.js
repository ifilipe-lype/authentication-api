const UserService = require("../../../services/user");
const AppError = require("../../../utils/AppError");

const getMe = require("./get-me")({ UserService, AppError });

module.exports = Object.freeze({
    getMe
});
