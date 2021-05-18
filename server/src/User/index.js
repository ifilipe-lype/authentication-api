const { userValidation } = require("../utils/validation");

function buildMakeUser({ validateUser }){
    return async (userData) => {
        const {
            name,
            email,
            password
        } = await validateUser(userData);

        return Object.freeze({
            getName: () => name,
            getEmail: () => email,
            getPassword: () => password,
        })
    }
}

module.exports = buildMakeUser({
    validateUser: userValidation.create
});
