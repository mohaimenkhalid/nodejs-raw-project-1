const handler = {}

handler.sampleHandler = (requestProperties, callback) => {
    callback(200, {
        message: "successful"
    })
}

module.exports = handler;