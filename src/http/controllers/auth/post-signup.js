function makePostSignUp({ AuthService, AppError }){
    return async (requestObjt) => {
        try {
            const {
                name,
                email,
                password,
            } = requestObjt.body;
    
            const token = await AuthService.signUp({ name, email, password });

            return {
                headers: { "X-Auth-Token": `Bearer ${token}` },
                statusCode: 201,
                body: { token }
            }
        } catch (e) {
            if(e instanceof AppError){
                return {
                    statusCode: 400,
                    body: {
                        error: e.message,
                    }
                }
            }

            throw e;
        }
    }
}

module.exports = makePostSignUp;
