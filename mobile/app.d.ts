import type { record } from "./app/record.d";

export namespace app {}

export type app = {
  record: record;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-app-id/
   */
  getId: () => number | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-field-elements/
   */
  getFieldElements(fieldCode: string): Element[] | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-query/
   */
  getQueryCondition(): string | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-query-with-order-by-limit-offset/
   */
  getQuery(): string | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-mobile-header-element/
   */
  getHeaderSpaceElement(): Element | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-lookup-target/
   */
  getLookupTargetAppId(fieldCode: string): number | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-related-records-target/
   */
  getRelatedRecordsTargetAppId(fieldCode: string): number | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-add-record-button/
   */
  showAddRecordButton: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-option-button/
   */
  showOptionsButton: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-filter-button/
   */
  showFilterButton: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-mobile-view-selector/
   */
  showViewSelector: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-mobile-report-selector/
   */
  showReportSelector: (state: "VISIBLE" | "HIDDEN") => Promise<void>;
};
