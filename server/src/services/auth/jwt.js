const jwt = require("jsonwebtoken");
const AppError = require("../../utils/AppError");

async function makeAuthToken({ user }){
    return jwt.sign({ user }, process.env.JWT_SECRET);
}

async function decodeAuthToken(token){
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
        throw new AppError("Invalid token");
    }
}

module.exports = Object.freeze({
    makeAuthToken,
    decodeAuthToken
});
