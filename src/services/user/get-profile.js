const { filterProps } = require("../../utils");

function makeGetProfile({ UserDb }){
    return async ({ id }) => {
        const user = await UserDb.findById(id);
        return filterProps(user, { password : true })
    }
}

module.exports = makeGetProfile;
