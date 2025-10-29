# overview

[kintone JavaScript API](https://cybozu.dev/ja/kintone/docs/js-api/) の TypeScript 型定義

# install

```bash
npm install -D @rksan/kintone-type
```

# Requirement

Node.js - v18.x

# usage

```ts
// [TypeScript]
import type kintone from "@rksan/kintone-type";

(async (kintone: kintone) => {
  try {
    const url = kintone.api.url("/k/v1/record");

    const response = await kintone.api(url, "GET", {
      app: "100",
      id: "1",
    });

    const record: kintone.Record = response.record;

    const field: kintone.Field = record["field_code"];

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

  // @ts-ignore
})(window.kintone);
```

```js
// [JavaScript]
// @ts-check

/** @typedef {import("@rksan/kintone-type")} kintone */
/** @typedef {import("@rksan/kintone-type").Record} kintone.Record */
/** @typedef {import("@rksan/kintone-type").Field} kintone.Field */

(async (/** @type {kintone} */ kintone) => {
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

  // @ts-ignore
})(window.kintone);
```

# History

- 1.1.1
  - `kintone.app.record.get() | se()`のバグ修正
- 1.1.0
  - 2025/10/12 アップデートに対応
  - [kintone API アップデート情報](https://cybozu.dev/ja/kintone/news/api-updates/2025-10/)
- 1.0.1
  - バグ修正
- 1.0
  - 初版

# Author

@rksan https://github.com/rksan | github

# Licence

MIT
