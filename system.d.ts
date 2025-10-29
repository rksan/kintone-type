import kintone from "kintone.d";

export namespace system {}
export type system = {
  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/system/get-available-features/
   */
  getAvailableFeatures: () => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/system/get-system-permissions/
   */
  getPermissions: () => Promise<kintone.Response>;
};
