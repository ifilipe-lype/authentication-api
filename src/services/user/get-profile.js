function makeGetProfile({ UserDb }){
    return async ({ id }) => {
        return await UserDb.findById(id);
    }
}

module.exports = makeGetProfile;
