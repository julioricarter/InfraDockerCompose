'use strict';
/*
 * REST API server to check deployment process
 *
 * Copyright Nobuyuki Matsui<nobuyuki.matsui>.
 *
 * SPDX-License-Identifier: MIT
 */

const http = require('http');
const logger = require('log4js').getLogger();
const Config = require('src/config');

const config = new Config();
logger.level = config.logLevel;

module.exports = http.createServer((request, response) => {
    logger.info(`Received ${request.method} request to: ${request.url}`);
    logger.info(`Received header: ${JSON.stringify(request.headers)}`);
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        logger.info(`Received body: ${Buffer.concat(body).toString()}`);
    });
    let result = JSON.stringify({'message': config.message});
    response.writeHead(200, {'Content-Type': 'application/json'});
    logger.info(`Respond JSON: ${result}`);
    response.end(result);
}).listen(config.port);
logger.info(`Start server at port ${config.port}`);
