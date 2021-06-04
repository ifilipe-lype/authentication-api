const { filterProps, filterFalsyProps } = require("../../utils");

const makeUser = require("../../User");

function makeUpdateUser({ UserDb }){
    return async (id, updates) => {
        const existingUser = await UserDb.findById(id);

        const userData = makeUser({
            ...filterProps(existingUser, { _id: true }),
            ...filterFalsyProps(updates),
        });

        const updatedUser = await UserDb.updateById(id, {
            name: userData.getName(),
            email: userData.getEmail(),
            phone: userData.getPhone(),
            photo: userData.getPhoto(),
            bio: userData.getBio(),
            password: userData.getPassword(),
        });
        return filterProps(updatedUser, { password: true });
    }
}

module.exports = makeUpdateUser;
