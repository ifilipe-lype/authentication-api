const { filterProps } = require("../../utils");
const AppError = require("../../utils/AppError");

function makeGetProfile({ UserDb }){
    return async ({ id }) => {
        const user = await UserDb.findById(id);
        if(!user) throw new AppError("User not found!");
        
        return filterProps(user, { password : true })
    }
}

module.exports = makeGetProfile;
