import type * as common from "./common";
import type * as js from "./js";

/**
 * @see https://cybozu.dev/ja/kintone/docs/js-api/
 */
export type kintone = {
  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/api/
   */
  api: kintone.api;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/
   */
  app: kintone.app;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/events/
   */
  events: kintone.events;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/proxy/kintone-proxy/
   */
  proxy: kintone.proxy;

  portal: kintone.portal;

  space: kintone.space;

  mobile: kintone.mobile;

  plugin: kintone.plugin;

  /**
   * @returns {kintone.LoginUser} - ログインユーザー
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/user/
   */
  getLoginUser: () => kintone.LoginUser;

  /**
   * @returns {number} 1 or 2
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-design/
   */
  getUiVersion: () => number;

  /**
   * @returns {string} CSRF トークン
   * @see https://cybozu.dev/ja/kintone/docs/js-api/api/get-csrf-token/
   */
  getRequestToken: () => string;
};

export namespace kintone {
  type LoginUser = js.LoginUser;

  type Record = common.Record;

  type Field = common.Field;

  type Event = any;

  type Response = any;

  type Error = any;

  type api = js.api;

  type proxy = js.proxy;

  type events = js.events;

  type app = js.app;

  type portal = js.portal;

  type space = js.space;

  type mobile = js.mobile;

  type plugin = js.plugin;
}
