const makeExpressCallBack = require("../express-callback");

function makeUserRoutes({ router, UserController }){
    return router
        .get("/me", makeExpressCallBack(UserController.getMe))
    ;
}

module.exports = makeUserRoutes;