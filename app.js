const http = require('http');
const { handelReqRes } = require('./helper/requestResponse');
const currentEnv = require('./helper/environments');

const app = {};
app.startServer = () => {
    const server = http.createServer(handelReqRes);
    server.listen(currentEnv.port, () => {
        console.log(`Server runing at http://${currentEnv.host}:${currentEnv.port}/`);
    });
};
app.startServer();
