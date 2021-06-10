const { filterProps, filterFalsyProps } = require("../../utils");

const makeUser = require("../../User");
const AppError = require("../../utils/AppError");

function makeUpdateUser({ UserDb, AuthService }){
    return async (id, updates) => {
        const existingUser = await UserDb.findById(id);

        if(!existingUser) throw new AppError("User not found!");

        const userData = makeUser({
            ...filterProps(existingUser, { _id: true }),
            ...filterFalsyProps(updates),
        });

        let hashedPassword = userData.getPassword();

        if(updates.password){
            hashedPassword = await AuthService.hashPassword(updates.password);
        }

        const updatedUser = await UserDb.updateById(id, {
            name: userData.getName(),
            email: userData.getEmail(),
            phone: userData.getPhone(),
            photo: userData.getPhoto(),
            bio: userData.getBio(),
            password: hashedPassword,
        });
        return filterProps(updatedUser, { password: true });
    }
}

module.exports = makeUpdateUser;
