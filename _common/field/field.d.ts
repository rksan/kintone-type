import { CustomField } from "../Field";
import { base } from "./base";

export type field = {};

export namespace field {
  type RECORD_NUMBER = base.Field<"RECORD_NUMBER">;
  type RECORD_ID = base.Field<"__ID__">;
  type REVISION = base.Field<"__REVISION__">;
  type CREATOR = base.Field<"CREATOR", val.CodeAndName>;
  type CREATED_TIME = base.Field<"CREATED_TIME">;
  type MODIFIER = base.Field<"MODIFIER", val.CodeAndName>;
  type UPDATED_TIME = base.Field<"UPDATED_TIME">;
  // custom-fields
  type SINGLE_LINE_TEXT = base.Field<"SINGLE_LINE_TEXT">;
  type MULTI_LINE_TEXT = base.Field<"MULTI_LINE_TEXT">;
  type RICH_TEXT = base.Field<"RICH_TEXT">;
  type NUMBER = base.Field<"NUMBER", string | val.NonValue>;
  type CALC = base.Field<"CALC">;
  type CHECK_BOX = base.Field<"CHECK_BOX", string[] | val.NonValue>;
  type RADIO_BUTTON = base.Field<"RADIO_BUTTON">;
  type MULTI_SELECT = base.Field<"MULTI_SELECT", string[] | val.NonValue>;
  type DROP_DOWN = base.Field<"DROP_DOWN">;
  type USER_SELECT = base.Field<
    "USER_SELECT",
    val.CodeAndName[] | val.NonValue
  >;
  type ORGANIZATION_SELECT = base.Field<
    "ORGANIZATION_SELECT",
    val.CodeAndName[] | val.NonValue
  >;
  type GROUP_SELECT = base.Field<
    "GROUP_SELECT",
    val.CodeAndName[] | val.NonValue
  >;
  type DATE = base.Field<"DATE">;
  type TIME = base.Field<"TIME">;
  type DATETIME = base.Field<"DATETIME">;
  type LINK = base.Field<"LINK">;
  type FILE = base.Field<"FILE", val.FileInfo[]>;
  type SUBTABLE = base.Field<"SUBTABLE", val.SubTableRecord[]>;
  type REFERENCE_TABLE = base.NonValueField<"REFERENCE_TABLE">;
  type CATEGORY = base.Field<"CATEGORY", string[] | val.NonValue>;
  type STATUS = base.Field<"STATUS">;
  type STATUS_ASSIGNEE = base.Field<
    "STATUS_ASSIGNEE",
    val.CodeAndName[] | val.NonValue
  >;
  type LABEL = base.NonValueField<"LABEL">;
  type SPACER = base.NonValueField<"SPACER">;
  type HR = base.NonValueField<"HR">;
  type GROUP = base.NonValueField<"GROUP">;

  namespace val {
    type CodeAndName = {
      code: string;
      name?: string;
    };

    type FileInfo = {
      contentType?: string;
      fileKey: string;
      name?: string;
      size?: string;
    };

    type SubTableRecord = {
      id: string;
      value: {
        [fieldCode: string]: CustomField;
      };
    };

    type NonValue = null | undefined;
  }
}
