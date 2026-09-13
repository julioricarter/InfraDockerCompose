'use strict';
/*
 * REST API server to check deployment process
 *
 * Copyright Nobuyuki Matsui<nobuyuki.matsui>.
 *
 * SPDX-License-Identifier: MIT
 */

const logLevels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];

class Config {
    constructor() {
        this.DEFAULT_MESSAGE = 'hello world!';
        this.DEFAULT_PORT = 3000;
        this.DEFAULT_LOG_LEVEL = 'info';
    }
    get port() {
        let port = Number.parseInt(process.env.PORT || this.DEFAULT_PORT);
        if (!Number.isInteger(port) || port < 0 || 65535 < port) {
            port = this.DEFAULT_PORT;
        }
        return port;
    }
    get message() {
        return process.env.MESSAGE || this.DEFAULT_MESSAGE;
    }
    get logLevel() {
        let logLevel = process.env.LOG_LEVEL || this.DEFAULT_LOG_LEVEL;
        if (!logLevels.includes(logLevel.toLowerCase())) {
            logLevel = this.DEFAULT_LOG_LEVEL;
        }
        return logLevel;
    }
}
module.exports = Config;
