import type { plugin } from "plugin.d";
import app from "./plugin/app";

const plugin: plugin = {
  app: app,
};

export default plugin;
