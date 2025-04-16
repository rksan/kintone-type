import type { record } from "./app/record";

export namespace app {}

/**
 * @see https://cybozu.dev/ja/kintone/docs/js-api/app/
 */
export type app = {
  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/
   */
  record: record;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-app-id/
   */
  getId: () => number | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-app-icon-urls/
   */
  getIcons: (apps: number[]) => Promise<any[]>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-field-elements/
   */
  getFieldElements: (fieldCode: string) => Element[] | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-header-menu-element/
   */
  getHeaderMenuSpaceElement: () => Element | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-header-element/
   */
  getHeaderSpaceElement: () => Element | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-lookup-target/
   */
  getLookupTargetAppId: (fieldCode: string) => number | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-related-records-target/
   */
  getRelatedRecordsTargetAppId: (fieldCode: string) => number | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-query/
   */
  getQueryCondition: () => string | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-query-with-order-by-limit-offset/
   */
  getQuery: () => string | null;
};
