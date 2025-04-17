import type { field } from "./field/field";

/**
 * @see https://cybozu.dev/ja/kintone/docs/overview/field-types/#field-type
 */
export type Field = SystemField | CustomField | NonValueField | OtherField;

export type SystemField =
  | field.RECORD_NUMBER
  | field.CREATOR
  | field.CREATED_TIME
  | field.MODIFIER
  | field.UPDATED_TIME;

export type CustomField =
  | field.SINGLE_LINE_TEXT
  | field.MULTI_LINE_TEXT
  | field.RICH_TEXT
  | field.NUMBER
  | field.CALC
  | field.CHECK_BOX
  | field.RADIO_BUTTON
  | field.MULTI_SELECT
  | field.DROP_DOWN
  | field.USER_SELECT
  | field.ORGANIZATION_SELECT
  | field.GROUP_SELECT
  | field.DATE
  | field.TIME
  | field.DATETIME
  | field.LINK
  | field.FILE;

export type NonValueField =
  | field.REFERENCE_TABLE
  | field.LABEL
  | field.SPACER
  | field.HR
  | field.GROUP;

export type OtherField =
  | field.CATEGORY
  | field.RECORD_ID
  | field.REVISION
  | field.SUBTABLE
  | field.STATUS
  | field.STATUS_ASSIGNEE;
