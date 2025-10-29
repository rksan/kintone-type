import type * as common from "./_common";
import type * as js from "./_lib/kintone-js.d";

declare namespace kintone {
  type LoginUser = js.LoginUser;

  type UserPreference = js.UserPreference;

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
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/
   */
  user: js.user;

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

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/system/
   */
  system: js.system;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/license/
   */
  license: js.license;

  mobile: js.mobile;

  plugin: js.plugin;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/user/
   */
  getLoginUser: () => kintone.LoginUser;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-user-preference/
   */
  getUserPreference: () => Promise<kintone.UserPreference>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/is-user-and-system-administrator/
   */
  isUsersAndSystemAdministrator: () => Promise<boolean>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-design/
   */
  getUiVersion: () => number;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-available-services/
   */
  getAvailableServices: () => Promise<{
    garoon: boolean;
    office: boolean;
    mailwise: boolean;
  }>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-domains/
   */
  getDomain: () => Promise<{ subdomain: boolean; baseDomain: string }>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-available-api-types/
   */
  getAvailableApiTypes: () => Promise<string[]>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/is-access-with-client-certificate-authentication/
   */
  isAccessWithClientCertificateAuthentication: () => Promise<boolean>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/is-mobile-app/
   */
  isMobileApp: () => Promise<boolean>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/is-mobile-page/
   */
  isMobilePage: () => Promise<boolean>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/is-revamped-ui/
   */
  isRevampedUI: () => Promise<boolean>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-page-type/
   */
  getPageType: () => Promise<{ type: string; page: string }>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/show-confirm-dialog/
   */
  showConfirmDialog: (config: {
    title?: string;
    body?: string;
    showOkButton?: boolean;
    okButtonText?: string;
    showCancelButton?: boolean;
    cancelButtonText?: string;
    showCloseButton?: boolean;
  }) => Promise<"OK" | "CANCEL" | "CLOSE">;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/create-dialog/
   */
  createDialog: (config: {
    title?: string;
    body?: Element;
    showOkButton?: boolean;
    okButtonText?: string;
    showCancelButton?: boolean;
    cancelButtonText?: string;
    showCloseButton?: boolean;
    beforeClose?: (
      result: "OK" | "CANCEL" | "CLOSE"
    ) => boolean | Promise<boolean | void> | void;
  }) => Promise<{
    show: () => Promise<"OK" | "CANCEL" | "CLOSE" | "FUNCTION">;
    close: () => void;
  }>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/show-notification/
   */
  showNotification: (
    type: "ERROR" | "SUCCESS" | "INFO",
    message: string
  ) => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/show-loading/
   */
  showLoading: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/api/get-csrf-token/
   */
  getRequestToken: () => string;
};

//export default kintone;
export = kintone;
