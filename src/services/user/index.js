const { UserDb } = require("../../db");

const AuthService = require("../auth");

const makeGetProfile = require("./get-profile");
const makeUpdateUser = require("./update-user");

module.exports = Object.freeze({
    getProfile: makeGetProfile({ UserDb }),
    updateUser: makeUpdateUser({ UserDb, AuthService }),
});
