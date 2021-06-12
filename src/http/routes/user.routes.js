const makeExpressCallBack = require("../express-callback");
const { multipart } = require("../middlewares");

function makeUserRoutes({ router, UserController }){
    return router
        .get("/me", makeExpressCallBack(UserController.getMe))
        .put("/me", multipart, makeExpressCallBack(UserController.putMe))
    ;
}

module.exports = makeUserRoutes;