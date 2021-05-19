const makeExpressCallBack = require("../express-callback");

function makeAuthRoutes({ router, AuthController }){
    return router
        .post("/signup", makeExpressCallBack(AuthController.postSignUp))
    ;
}

module.exports = makeAuthRoutes;
