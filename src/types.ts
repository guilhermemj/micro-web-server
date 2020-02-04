import { ErrorRequestHandler, RequestHandler } from 'express';

export type Controller = RequestHandler | ErrorRequestHandler | Array<Controller>;

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options';

export interface Route {
  path: string;
  controller: Controller;
  method?: HttpMethod | 'all' | 'use';
  middlewares?: Array<Controller>;
}

export interface ServerOptions {
  httpPort?: number;
  routes?: Array<Route>;
  beforeEach?: Controller;
}
