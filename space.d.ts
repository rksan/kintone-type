import { portal } from "./portal.d";

export namespace space {}
export type space = {
  portal: portal;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/space/get-space/
   */
  get: () => Promise<{ id: string; name: string; isGuest: boolean }>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/space/get-space-permissions/
   */
  getPermissions: () => Promise<boolean>;
};
