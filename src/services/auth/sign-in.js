const AppError = require("../../utils/AppError");

function makeSignIn({ UserDb, isPasswordMatch, generateAuthToken }){
    return async ({ email, password }) => {
        
        if(!email || !password) throw new AppError("Invalid Email or Password!");
        
        const user = await UserDb.findByEmail(email);
        if(!user || !(await isPasswordMatch(password, user.password))){
            throw new AppError("Invalid Email or Password!");
        }

        return generateAuthToken({ user: user._id });

    }
}

module.exports = makeSignIn;
