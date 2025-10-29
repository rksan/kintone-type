import type kintone from "../kintone.d";

export namespace record {}

/**
 * @see https://cybozu.dev/ja/kintone/docs/js-api/record/
 */
export type record = {
  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-record-id/
   */
  getId: () => number | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-record/
   */
  get: () => { record: any } | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/set-record-value/
   */
  set: (record: { record: any }) => void;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-record-field-element/
   */
  getFieldElement: (fieldCode: string) => Element | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-space-element/
   */
  getSpaceElement: (id: string) => Element | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/open-field-group/
   */
  setGroupFieldOpen: (fieldCode: string, isOpen: boolean) => void;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/is-group-field-open/
   */
  isGroupFieldOpen: (fieldCode: string) => Promise<boolean>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-record-header-menu-element/
   */
  getHeaderMenuSpaceElement: () => Element | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-record-permissions/
   */
  getPermissions: () => Promise<{ editRecord: boolean; deleteRecord: boolean }>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-record-field-permissions/
   */
  getFieldPermissions: () => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-status-history/
   */
  getStatusHistory: (
    offset?: number,
    limit?: number
  ) => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-a-field/
   */
  setFieldShown: (fieldCode: string, isShown: boolean) => void;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/is-field-visible/
   */
  isFieldVisible: (fieldCode) => Promise<boolean>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-status-actions/
   */
  getStatusActions: () => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/app/get-status-assignees/
   */
  getAssignees: () => Promise<kintone.Response>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-edit-record-button/
   */
  showEditRecordButton: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-duplicate-record-button/
   */
  showDuplicateRecordButton: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-record-nav-button/
   */
  showPager: (state: "VISIBLE" | "HIDDEN") => Promise<void>;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-side-bar/
   */
  showSideBar: (
    state: "OPEN" | "CLOSED" | "COMMENTS" | "HISTORY"
  ) => Promise<void>;
};
