# hello-world-api
Simple REST API Server which always respond 200 OK.

[![TravisCI Status](https://travis-ci.org/nmatsui/hello-world-api.svg?branch=master)](https://travis-ci.org/nmatsui/hello-world-api)
[![DockerHub Status](https://dockerbuildbadges.quelltext.eu/status.svg?organization=nmatsui&repository=hello-world-api)](https://hub.docker.com/r/nmatsui/hello-world-api/builds/)

## Description

The docker container which is run from this image start nodejs http server and respond 'application/json' payload.

## Install

Pull `nmatsui/hello-world-api` from DockerHub:

```bash
$ docker pull nmatsui/hello-world-api
```

Or build `nmatsui/hello-world-api` from Dockerfile:

```bash
$ git clone https://github.com/nmatsui/hello-world-api.git
$ cd hello-world-api
$ docker build -t nmatsui/hello-world-api .
```

## Usage

1. start container

    ```bash
    $ docker run -d --rm -p 3000:3000 nmatsui/hello-world-api
    ```
1. call REST API

    ```bash
    $ curl -i http://localhost:3000/
    HTTP/1.1 200 OK
    Content-Type: application/json
    Date: Sat, 21 Apr 2018 00:56:01 GMT
    Connection: keep-alive
    Transfer-Encoding: chunked

    {"message":"hello world!"}
    ```
1. If you want to change message or listening port, give the 'MESSAGE' or 'PORT' environment variable

    ```bash
    $ docker run -d --rm -p 8888:8888 -e MESSAGE="FOO BAR" -e PORT="8888" nmatsui/hello-world-api
    ```

    ```bash
    $ curl -i http://localhost:8888/any/path
    HTTP/1.1 200 OK
    Content-Type: application/json
    Date: Sat, 21 Apr 2018 00:57:25 GMT
    Connection: keep-alive
    Transfer-Encoding: chunked

    {"message":"FOO BAR"}
    ```

## License

[MIT License](/LICENSE)

## Copyright
Copyright (c) 2018 Nobuyuki Matsui <nobuyuki.matsui@gmail.com>
