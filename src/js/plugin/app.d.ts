import type { proxy } from "./app/proxy";

export type app = {
  proxy: proxy;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/plugins/get-config/
   */
  getConfig(pluginId: string): any;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/plugins/set-config/
   */
  setConfig(config: any, successCallback?: () => void): void;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/plugins/get-config-for-proxy/
   */
  getProxyConfig(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE"
  ): { headers: any; data: any };

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/plugins/set-config-for-proxy/
   */
  setProxyConfig(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    headers: any,
    data: any,
    successCallback?: () => void
  ): void;
};
