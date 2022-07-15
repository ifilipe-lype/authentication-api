function makeExpressCallback(Controller) {
    return (req, res) => {
        const RequestOptions = {
            body: req.body,
            query: req.query,
            params: req.params,
            userId: req.userId,
            file: req.file,
        }
        Controller(RequestOptions)
            .then(result => {
                if (result && result.headers) res.set(result.headers)
                res.status(result.statusCode).json(result.body)
            })
            .catch((e) => {
                res.status(500).json({
                    error: "Internal server error!",
                    e
                });
                throw e;
            });
    }
}

module.exports = makeExpressCallback;
