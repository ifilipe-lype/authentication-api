const makeExpressCallBack = require("../express-callback");

function makeAuthRoutes({ router, AuthController }){
    return router
        .post("/signup", makeExpressCallBack(AuthController.postSignUp))
        .post("/signin", makeExpressCallBack(AuthController.postSignIn))
    ;
}

module.exports = makeAuthRoutes;
