// @ts-check

/**
 * @typedef {import("../kintone.d")} kintone
 * @typedef {import("../kintone.d").Record} kintone.Record
 * @typedef {import("../kintone.d").Field} kintone.Field
 */
(async (
  /** @type {kintone} */
  kintone
) => {
  try {
    const url = kintone.api.url("/k/v1/record");

    const response = await kintone.api(url, "GET", {
      app: "100",
      id: "1",
    });

    /** @type {kintone.Record} */
    const record = response.record;

    /** @type {kintone.Field} */
    const field = record["field_code"];

    if (field.type === "SINGLE_LINE_TEXT") {
      const value = field.value;
      console.log("[INFO]", field.type, value);
    } else if (field.type === "CHECK_BOX") {
      const values = field.value;
      console.log("[INFO]", field.type, values);
    } else if (field.type === "USER_SELECT") {
      const users = field.value;
      console.log("[INFO]", field.type, users);
    } else {
      console.log("[INFO]", field.type, field.value);
    }
  } catch (err) {
    console.error("[ERR]", err);
  }
})(
  // @ts-ignore
  window.kintone
);
