# Micro Web Server

A simple and opinionated web server powered by express

## Installation

> This package was not published yet

``` bash
npm i @guilhermemj/micro-web-server
```

## Usage

### Javascript

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
  console.log(`Web server started at port ${HTTP_PORT}`);
});
```

### Typescript

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
