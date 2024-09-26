const handler = {}

handler.notFoundHandler = (requestProperties, callback) => {
    callback(400, {
        status: 400,
        message: "Path not Found"
    })
}

module.exports = handler;