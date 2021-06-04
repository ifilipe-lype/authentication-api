function makePostSignIn({ AuthService, AppError }){
    return async (requestObjt) => {
        try {
            const {
                email,
                password,
            } = requestObjt.body;
    
            const token = await AuthService.signIn({ email, password });

            return {
                headers: { "x-auth-token": `Bearer ${token}` },
                statusCode: 200,
                body: { token }
            }
        } catch (e) {
            if(e instanceof AppError){
                return {
                    statusCode: 400,
                    body: {
                        error: e.message
                    }
                }
            }

            throw e;
        }
    }
}

module.exports = makePostSignIn;