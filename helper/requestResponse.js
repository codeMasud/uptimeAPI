const url = require('url');
const { StringDecoder } = require('string_decoder');
const { stringify } = require('querystring');
const routes = require('../routes');
const { errorHandler } = require('../handler/routeHandler/errorHandler');

const requestResponse = {};
requestResponse.handelReqRes = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimPath = path.replace(/\\|\//g, '');
    const queryObj = parsedUrl.query;
    const method = req.method.toLowerCase();
    const header = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimPath,
        queryObj,
        method,
        header,
    };
    const decoder = new StringDecoder('utf-8');
    let reqData = '';
    req.on('data', (buffer) => {
        reqData += decoder.write(buffer);
    });
    req.on('end', (buffer) => {
        reqData += decoder.end(buffer);
        const choosenHandler = routes[trimPath] ? routes[trimPath] : errorHandler;
        choosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};
            payloadSting = JSON.stringify(payload);
            res.writeHead(statusCode);
            res.end(payloadSting);
        });
    });
};
module.exports = requestResponse;
