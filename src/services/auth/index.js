const { UserDb } = require("../../db");
const { hashPassword, isPasswordMatch } = require("./password");
const { makeAuthToken, decodeAuthToken } = require("./jwt");

const makeSignUp = require("./sign-up");
const makeSignIn = require("./sign-in");

module.exports = Object.freeze({
    signUp: makeSignUp({ UserDb, hashPassword, makeAuthToken }),
    signIn: makeSignIn({ UserDb, isPasswordMatch, generateAuthToken: makeAuthToken}),
    getUserFromToken: decodeAuthToken,
    hashPassword,
});
