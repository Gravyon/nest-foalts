import { controller, IAppController } from "@foal/core";

import { ApiController, PostsController } from "./controllers";

export class AppController implements IAppController {
  subControllers = [
    controller("/api", ApiController),
    controller("/posts", PostsController),
  ];
}
