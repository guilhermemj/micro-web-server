import { ErrorRequestHandler, RequestHandler } from 'express';
import { Options as BodyParserOptions } from 'body-parser';
import { CorsOptions } from 'cors';

export type Controller = RequestHandler | ErrorRequestHandler;

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options';

export interface Route {
  path: string;
  controller: Controller;
  method?: HttpMethod | 'all' | 'use';
  middlewares?: Controller[];
}

export interface ServerOptions {
  httpPort?: number;
  parserOptions?: BodyParserOptions;
  corsOptions?: CorsOptions;
  routes?: Route[];
  beforeEach?: Controller;
}
