import { createServer, Server } from 'http';
import express, { Express } from 'express';
import cors from 'cors';

import { ServerOptions, Route } from './types';

class WebServer {
  app: Express;
  httpServer: Server | null = null;

  httpPort: number;
  beforeEach: ServerOptions['beforeEach'];

  constructor(opt: ServerOptions = {}) {
    this.httpPort = opt.httpPort ?? 3000;
    this.beforeEach = opt.beforeEach;

    this.app = express();

    this.app.use(cors());
    this.app.use(express.json());

    if (Array.isArray(opt.routes)) {
      opt.routes.forEach(route => this.registerRoute(route));
    }
  }

  registerRoute(route: Route): void {
    const {
      path,
      controller,
      method = 'use',
      middlewares = [],
    } = route;

    if (this.beforeEach) {
      middlewares.push(this.beforeEach);
    }

    this.app[method](path, ...middlewares, controller);

    console.log(`Registered route ${method.toUpperCase()} ${path}`);
  }

  start(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = createServer(this.app);

      this.app.listen(this.httpPort, resolve);
    });
  }

  shutdown(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.httpServer) {
        resolve();
        return;
      }

      this.httpServer.close((err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }
}

export {
  WebServer,
};