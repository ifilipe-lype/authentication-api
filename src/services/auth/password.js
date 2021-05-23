const bcrypt = require("bcryptjs");

const hashPassword = async (password) => bcrypt.hash(password, 8);
const isPasswordMatch = async (password, hash) => bcrypt.compare(password, hash);

module.exports = Object.freeze({
    hashPassword,
    isPasswordMatch
});
