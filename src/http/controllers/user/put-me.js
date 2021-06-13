function makePutMe({ UserService, AppError, CloudinaryService }){
    return async (req) => {
        const id = req.userId;
        const {
            name,
            email,
            phone,
            password,
            bio
        } = req.body;

        let { photo } = req.body;

        try {

            if(req.file && req.file.imageFile){
                const image = await CloudinaryService.uploadWithStream(req.file.imageFile.path);
                photo = image.secure_url;
            }

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
