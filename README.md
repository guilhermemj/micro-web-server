# Micro Web Server

A simple and opinionated web server powered by [Express](http://expressjs.com/).

> This documentation is a work in progress.

- [Installation](#installation)
- [Simple Usage](#simple-usage)
  - [Javascript example](#javascript-example)
  - [Typescript example](#typescript-example)
- [Options](#options)
  - [`httpPort`](#httpport)
  - [`parserOptions`](#parseroptions)
  - [`corsOptions`](#corsoptions)
  - [`routes`](#routes)
  - [`beforeEach`](#beforeeach)

## Installation

``` bash
npm i @guilhermemj/micro-web-server
```

## Simple Usage

### Javascript example

``` javascript
var WebServer = require("@guilhermemj/micro-web-server");

var HTTP_PORT = 3000;

var webServer = new WebServer({
  httpPort: HTTP_PORT,
  routes: [
    {
      method: "get",
      path: "/",
      controller: (req, res) => {
        res.send("Hi there!");
      },
    },
  ],
});

webServer.start().then(function () {
  console.log("Web server started at port " + HTTP_PORT);
});
```

### Typescript example

``` typescript
import WebServer, { Request, Response } from "@guilhermemj/micro-web-server";

const HTTP_PORT = 3000;

const webServer = new WebServer({
  httpPort: HTTP_PORT,
  routes: [
    {
      method: "get",
      path: "/",
      controller: (req: Request, res: Response) => {
        res.send("Hi there!");
      },
    },
  ],
});

(async () => {
  await webServer.start();
  console.log(`Web server started at port ${HTTP_PORT}`);
})();
```

## Options

`WebServer` constructor accepts an object with the following properties:

### `httpPort`

- **Type:** `number`.
- **Default:** `3000`.

The HTTP port that the server will listen to.

### `parserOptions`

- **Type:** `BodyParserOptions`.
- **Default:** `undefined`.

Options object passed to [express.json](https://expressjs.com/pt-br/api.html#express.json).

### `corsOptions`

- **Type:** `CorsOptions`.
- **Default:** `undefined`.

Options object passed to [cors](https://www.npmjs.com/package/cors).

### `routes`

- **Type:** `Array<Route>`.
- **Default:** `[]`.

Your application route definitions. Details will be described below.

### `beforeEach`

- **Type:** `Controller`.
- **Default:** `undefined`.

Middleware that should run before each route controller. It's usually used for logging purposes.
