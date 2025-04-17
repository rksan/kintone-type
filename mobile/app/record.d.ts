import type kintone from "../../kintone.d";

export namespace record {}

export type record = {
  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-record-id/
   */
  getId: () => number | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-record/
   */
  get: () => kintone.Record | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/set-record-value/
   */
  set: (record: kintone.Record) => void;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-record-field-element/
   */
  getFieldElement(fieldCode: string): Element | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/get-space-element/
   */
  getSpaceElement(id: string): Element | null;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/open-field-group/
   */
  setGroupFieldOpen(fieldCode: string, isOpen: boolean): void;

  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-a-field/
   */
  setFieldShown(fieldCode: string, isShown: boolean): void;

  // getHeaderMenuSpaceElement(): Element | null;
};
