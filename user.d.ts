import kintone from "./kintone.d";

export namespace user {}
export type user = {
  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-organizations/
   */
  getOrganizations: (code?: string) => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-groups/
   */
  getGroups: (code?: string) => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-custom-fields/
   */
  getCustomFields: (code?: string) => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/kintone/get-user-icons/
   */
  getIcons: (users: string[]) => Promise<{ user: string; url: string }[]>;
};
