import { app } from "./mobile/app.d";
import { portal } from "./mobile/portal.d";
import { space } from "./mobile/space.d";

export namespace mobile {}

export type mobile = {
  app: app;
  portal: portal;
  space: space;
};
