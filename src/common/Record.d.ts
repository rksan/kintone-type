import type { SystemField, CustomField, OtherField } from "./Field.d";

export type Record = {
  [fieldCode: string]: SystemField | CustomField | OtherField;
};
