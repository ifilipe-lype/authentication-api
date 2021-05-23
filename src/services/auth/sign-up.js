const makeUser = require("../../User");
const AppError = require("../../utils/AppError");

function makeSignUp({ UserDb, hashPassword, makeAuthToken }) {
  return async (userInfo) => {
    const user = makeUser(userInfo);

    // Email already taken!
    const foundUser = await UserDb.findByEmail(user.getEmail());
    if(foundUser) throw new AppError("Email is already taken!");

    const hashedPwd = await hashPassword(user.getPassword());

    const createdUser = await UserDb.insertOne({
      name: user.getName(),
      email: user.getEmail(),
      password: hashedPwd,
    });

    return await makeAuthToken({ user: createdUser._id });
  };
}

module.exports = makeSignUp;
