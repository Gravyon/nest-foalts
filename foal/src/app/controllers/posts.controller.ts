import { Context, Get, HttpResponseOK } from '@foal/core';

export class PostsController {

  @Get('/')
  foo(ctx: Context) {
    return new HttpResponseOK();
  }

}
