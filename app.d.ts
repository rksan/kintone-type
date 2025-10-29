import type kintone from "./kintone.d";
import type { record } from "./app/record.d";

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
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-app/
   */
  get: () => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-app-id/
   */
  getId: () => number | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-form-fields/
   */
  getFormFields: () => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-form-layout/
   */
  getFormLayout: () => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/is-test-environment/
   */
  isTestEnvironment: () => Promise<boolean>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/is-maintenance-mode/
   */
  isMaintenanceMode: () => Promise<boolean>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/show-or-hide-app-description/
   */
  showDescription: (state: "OPEN" | "CLOSED") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-app-icon-urls/
   */
  getIcons: (apps: number[]) => Promise<{ app: number; url: string }[]>;

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
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-view/
   */
  getView: () => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-views/
   */
  getViews: () => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-query/
   */
  getQueryCondition: () => string | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-record-list-query-with-order-by-limit-offset/
   */
  getQuery: () => string | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-lookup-target/
   */
  getLookupTargetAppId: (fieldCode: string) => number | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-related-records-target/
   */
  getRelatedRecordsTargetAppId: (fieldCode: string) => number | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-status/
   */
  getStatus: () => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-categories/
   */
  getCategories: () => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-app-permissions/
   */
  getPermissions: () => Promise<{ addRecord: boolean; editApp: boolean }>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-add-record-button/
   */
  showAddRecordButton: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-app-settings-button/
   */
  showAppSettingsButton: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-option-button/
   */
  showOptionsButton: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-filter-button/
   */
  showFilterButton: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-report-button/
   */
  showReportButton: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-view-and-report-selector/
   */
  showViewAndReportSelector: (state: "VISIBLE" | "HIDDEN") => Promise<void>;
};
