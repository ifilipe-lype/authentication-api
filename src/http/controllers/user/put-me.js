function makePutMe({ UserService, AppError }){
    return async (req) => {
        const id = req.userId;
        const {
            name,
            email,
            phone,
            password,
            bio,
            photo
        } = req.body;

        try {
            const updatedUser = await UserService.updateUser(id, {
                name, email, password, bio, photo, phone
            });

            return {
                statusCode: 201,
                body: {
                    updatedUser
                }
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

module.exports = makePutMe;
