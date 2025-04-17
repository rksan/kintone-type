import type { SystemField, CustomField, OtherField } from "./Field";

export type Record = {
  [fieldCode: string]: SystemField | CustomField | OtherField;
};
