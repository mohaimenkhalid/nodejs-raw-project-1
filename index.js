const http = require('http')
const {handleReqRes} = require('./helpers/handleReqRes')
//scaffolding
const app = {};

//app configuration
app.config = {
    port: 3000,
}

//server create
app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, () => {
        console.log(` listening on port ${app.config.port}`)
    })
}

//handle request & response
app.handleReqRes = handleReqRes;
//initializing app
app.createServer();