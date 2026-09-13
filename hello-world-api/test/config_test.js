'use strict';
/*
 * REST API server to check deployment process
 *
 * Copyright Nobuyuki Matsui<nobuyuki.matsui>.
 *
 * SPDX-License-Identifier: MIT
 */

const Config = require('src/config');
const chai = require('chai');
chai.should();

describe('Test Config class', () => {
    const config = new Config();
    describe('get port', () => {
        it('should be return the default port if PORT environment variable is not set', () => {
            config.port.should.be.eq(config.DEFAULT_PORT);
        });
        it('should be return the given port if PORT environment variable is set', () => {
            let sPort = '9999';
            process.env.PORT = sPort;
            config.port.should.be.eq(Number.parseInt(sPort));

            let iPort = 8888;
            process.env.PORT = iPort;
            config.port.should.be.eq(iPort);

            delete process.env.PORT;
        });
        it('should be return the default port if PORT environment variable is not an integer', () => {
            process.env.PORT = 'foo bar';
            config.port.should.be.eq(config.DEFAULT_PORT);

            process.env.PORT = '';
            config.port.should.be.eq(config.DEFAULT_PORT);

            delete process.env.PORT;
        });
        it('should be return the default port if PORT environment variable is less than 0', () => {
            process.env.PORT = -1;
            config.port.should.be.eq(config.DEFAULT_PORT);

            delete process.env.PORT;
        });
        it('should be return the default port if PORT environment variable is grater than 65535', () => {
            process.env.PORT = 65536;
            config.port.should.be.eq(config.DEFAULT_PORT);

            delete process.env.PORT;
        });
    });
    describe('get message', () => {
        it('should be return the default message if MESSAGE environment variable is not set', () => {
            config.message.should.be.eq(config.DEFAULT_MESSAGE);
        });
        it('should be return the given message if MESSAGE environment variable is set', () => {
            let message = 'given message';
            process.env.MESSAGE = message;
            config.message.should.be.eq(message);

            delete process.env.MESSAGE;
        });
        it('should be return the default message if MESSAGE environment variable is empty', () => {
            let message = '';
            process.env.MESSAGE = message;
            config.message.should.be.eq(config.DEFAULT_MESSAGE);

            delete process.env.MESSAGE;
        });
    });
    describe('get logLevel', () => {
        const logLevels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];
        logLevels.push(...['TRACE', 'Debug', 'iNfO']);
        it('should be return the default logLevel if LOG_LEVEL environment variable is not set', () => {
            config.logLevel.should.be.eq(config.DEFAULT_LOG_LEVEL);
        });
        logLevels.forEach(logLevel => {
            it(`should be return the given logLevel (${logLevel}) if LOG_LEVEL environment variable is set`, () => {
                process.env.LOG_LEVEL = logLevel;
                config.logLevel.should.be.eq(logLevel);

                delete process.env.LOG_LEVEL;
            });
        });
        it('should be return the default logLevel if LOG_LEVEL environment variable is empty', () => {
            process.env.LOG_LEVEL = '';
            config.logLevel.should.be.eq(config.DEFAULT_LOG_LEVEL);

            delete process.env.LOG_LEVEL;
        });
        it('should be return the default logLevel if LOG_LEVEL environment variable is invalid', () => {
            process.env.LOG_LEVEL = 'invalid';
            config.logLevel.should.be.eq(config.DEFAULT_LOG_LEVEL);

            delete process.env.LOG_LEVEL;
        });
    });
});
