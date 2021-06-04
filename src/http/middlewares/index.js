const AuthService = require("../../services/auth");
const AppError = require("../../utils/AppError");

function makeAuthMiddleware({ AuthService }) {
  return async (req, res, next) => {
    try {
    
      const token = req.header("x-auth-token") ? req.header("x-auth-token").split(" ")[1] : null;
      const { user } = await AuthService.getUserFromToken(token);
      req.userId = user;

      next();
    } catch (e) {
        if(e instanceof AppError){
            return res.status(401).json({ error: "Access Dinied. Invalid authentication token!" });
        }
        throw e;
    }
  };
}

module.exports = Object.freeze({
    authMiddleware: makeAuthMiddleware({ AuthService }),
});
