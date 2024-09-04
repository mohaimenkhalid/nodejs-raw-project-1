const url = require('url')
const {StringDecoder} = require('string_decoder')
const routes = require('../routes')
const handler = {};

handler.handleReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method;
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    const decoder = new StringDecoder('utf-8')
    let realData = '';
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    }
    const chosenHandler = routes[trimmedPath]
    chosenHandler(requestProperties, (statusCode, payload) => {
        console.log("aaaaaaaaaa......")
        console.log(statusCode, payload)

    });


    req.on('data', (buffer) => {
        realData += decoder.write(buffer)
    })

    req.on('end', () => {
        realData += decoder.end()
        console.log(realData)
    })

    res.end("Hello server")
}

module.exports = handler;