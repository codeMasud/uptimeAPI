const http = require('http');
const url = require('url');

const app = {};
app.config = {
    host: '127.0.0.1',
    port: 3000,
};
app.startServer = () => {
    const server = http.createServer(app.handelReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server runing at http://${app.config.host}:${app.config.port}/`);
    });
};

app.handelReqRes = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

app.startServer();
