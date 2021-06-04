function makeGetMe({ UserService, AppError }){
    return async (requestObjt) => {
        try {
            const { userId } = requestObjt;
            const user = await UserService.getProfile({ id: userId });
            return {
                statusCode: 200,
                body: { user }
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

module.exports = makeGetMe;
