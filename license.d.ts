export namespace license {}
export type license = {
  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/license/is-trial/
   */
  isTrial: () => Promise<boolean>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/license/get-course/
   */
  getSubscriptionPlan: () => Promise<any>;
};
