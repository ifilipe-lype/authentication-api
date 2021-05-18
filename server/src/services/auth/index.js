const { UserDb } = require("../../db");
const { hashPassword } = require("./password");
const { makeAuthToken } = require("./jwt");

const makeSignUp = require("./sign-up");

module.exports = Object.freeze({
    signUp: makeSignUp({ UserDb, hashPassword, makeAuthToken }),
});
