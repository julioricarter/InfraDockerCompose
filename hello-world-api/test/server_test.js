'use strict';
/*
 * REST API server to check deployment process
 *
 * Copyright Nobuyuki Matsui<nobuyuki.matsui>.
 *
 * SPDX-License-Identifier: MIT
 */

const server = require('src/server');
const Config = require('src/config');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);

const config = new Config();

describe('Test server', () => {
    const methods = ['get', 'post', 'put', 'patch', 'delete'];
    const paths = ['/', '/any'];
    methods.forEach(method => {
        paths.forEach(path => {
            describe(`Test ${method} to ${path}`, () => {
                it('should be return 200 OK and default message if MESSAGE environment variable is not set', () => {
                    chai.request(server)[method](path)
                        .then(response => {
                            response.should.to.have.status(200);
                            response.should.to.be.json;
                            response.body.message.should.be.eq(config.DEFAULT_MESSAGE);
                        })
                        .catch(err => {
                            throw err;
                        });
                });
                it('should be return 200 OK and given message if MESSAGE environment variable is set', () => {
                    let givenMessage = 'given message';
                    process.env.MESSAGE = givenMessage;
                    chai.request(server)[method](path)
                        .then(response => {
                            response.should.to.have.status(200);
                            response.should.to.be.json;
                            response.body.message.should.be.eq(givenMessage);
                            delete process.env.MESSAGE;
                        })
                        .catch(err => {
                            throw err;
                        });
                });
            });
        });
    });
});
