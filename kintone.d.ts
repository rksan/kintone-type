import type * as common from "./_common";
import type * as js from "./_lib/kintone-js.d";

declare namespace kintone {
  type LoginUser = js.LoginUser;

  type Record = common.Record;

  type Field = common.Field;

  type Event = any;

  type Response = any;

  type Error = any;
}

/**
 * @see https://cybozu.dev/ja/kintone/docs/js-api/
 */
type kintone = {
  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/api/
   */
  api: js.api;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/
   */
  app: js.app;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/events/
   */
  events: js.events;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/proxy/kintone-proxy/
   */
  proxy: js.proxy;

  portal: js.portal;

  space: js.space;

  mobile: js.mobile;

  plugin: js.plugin;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/user/
   */
  getLoginUser: () => kintone.LoginUser;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-design/
   */
  getUiVersion: () => number;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/api/get-csrf-token/
   */
  getRequestToken: () => string;
};

export default kintone;
