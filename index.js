const http = require('http')

//scaffolding
const app = {};


app.config = {
    port: 3000,
}

app.createServer = () => {
    const server = http.createServer(app.serverReqRes)
    server.listen(app.config.port, () => {
        console.log(`listening on port ${app.config.port}`)
    })
}

app.serverReqRes = (req, res) => {
    res.end("Hello server")
}
//initializing app
app.createServer();