import type { app } from "@/js/plugin/app.d";
import proxy from "./app/proxy";

const app: app = {
  proxy: proxy,
  getConfig: function (pluginId: string): any {
    throw new Error("Function not implemented.");
  },
  setConfig: function (config: any, successCallback?: () => void): void {
    throw new Error("Function not implemented.");
  },
  getProxyConfig: function (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE"
  ): { headers: any; data: any } {
    throw new Error("Function not implemented.");
  },
  setProxyConfig: function (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    headers: any,
    data: any,
    successCallback?: () => void
  ): void {
    throw new Error("Function not implemented.");
  },
};

export default app;
