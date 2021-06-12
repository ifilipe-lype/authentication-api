const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");
const AppError = require("../../utils/AppError");

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRECT
});


// const upload_stream = utils.promisify(cloudinary.uploader.upload_stream)({ tags: 'auth_app_photo' });
// console.log(upload_stream)
async function uploadWithStream(filePath){
    return new Promise((resolve, reject) => {
        const upload_stream = cloudinary.uploader.upload_stream({
            tags: 'image_upload_sample_app'
        }, (err, image) => {
            if (err){
                return reject(new AppError("Couldn't upload image file!"));
            }
            return resolve(image);
        });
        fs.createReadStream(filePath).pipe(upload_stream);
    })

}

module.exports = Object.freeze({
    uploadWithStream
});
