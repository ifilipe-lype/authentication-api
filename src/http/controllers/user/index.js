const UserService = require("../../../services/user");
const AppError = require("../../../utils/AppError");
const CloudinaryService = require("../../../services/cloudinary");

const getMe = require("./get-me")({ UserService, AppError });
const putMe = require("./put-me")({ UserService, CloudinaryService, AppError });

module.exports = Object.freeze({
    getMe,
    putMe
});
