const { phone } = require("faker");
const { userValidation } = require("../utils/validation");

function buildMakeUser({ validateUser }){
    return async (userData) => {
        const {
            name,
            email,
            photo,
            bio,
            phone,
            password
        } = await validateUser(userData);

        return Object.freeze({
            getName: () => name,
            getPhoto: () => photo,
            getBio: () => bio,
            getPhone: () => phone,
            getEmail: () => email,
            getPassword: () => password,
        })
    }
}

module.exports = buildMakeUser({
    validateUser: userValidation.create
});
