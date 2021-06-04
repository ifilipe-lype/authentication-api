const UserService = require("../../../services/user");
const AppError = require("../../../utils/AppError");

const getMe = require("./get-me")({ UserService, AppError });
const putMe = require("./put-me")({ UserService, AppError });

module.exports = Object.freeze({
    getMe,
    putMe
});
