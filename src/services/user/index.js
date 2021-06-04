const { UserDb } = require("../../db");
const makeGetProfile = require("./get-profile");

module.exports = Object.freeze({
    getProfile: makeGetProfile({ UserDb }),
});
