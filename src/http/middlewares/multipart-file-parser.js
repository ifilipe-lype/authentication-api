const formidable = require('formidable');

const form = formidable({
    multiples: false,
    maxFileSize: 5 * 1024 * 1024,
    keepExtensions: true,
});

module.exports = (req, res, next) => {
    const contentType = req.headers['content-type'];

    form.onPart = (part) => {
        if (part.mime && part.mime.match(/image\/*/)) {
            form.handlePart(part);
        } else if (part.mime) {
            res.status(400).json({ error: "file type not supported!" })
        }
    }

    if (contentType && contentType.indexOf('multipart/form-data') !== -1) {
        form.parse(req, (err, fields, file) => {
            if (!err) {
                req.body = fields; // sets the body field in the request object
                req.file = file; // sets the file field in the request object
            }
            next(); // continues to the next middleware or route handler
        })
    } else {
        next();
    }
}
