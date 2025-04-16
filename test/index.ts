import kintone from "./kintone";

(async () => {
  const user: kintone.LoginUser = kintone.getLoginUser();

  console.info("[INFO]", user.id);
  console.info("[INFO]", user.code);

  const token: string = kintone.getRequestToken();
  console.info("[INFO]", token);

  const version: number = kintone.getUiVersion();
  console.info("[INFO]", version);

  let record: kintone.Record | null;

  record = {
    $id: {
      type: "__ID__",
      value: "1",
    },
    $revision: {
      type: "__REVISION__",
      value: "1",
    },
    レコード番号: {
      type: "RECORD_NUMBER",
      value: "1",
    },
    作成者: {
      type: "CREATOR",
      value: { code: "user-name@domain.co.jp" },
    },
    作成日時: {
      type: "CREATED_TIME",
      value: "2012-01-11T23:30:00Z",
    },
    更新者: {
      type: "MODIFIER",
      value: { code: "user-name@domain.co.jp" },
    },
    更新日時: {
      type: "UPDATED_TIME",
      value: "2012-01-11T23:30:00Z",
    },
    txt_Field_1: {
      type: "SINGLE_LINE_TEXT",
      value: "文字列(１行)",
    },
    mtxt_Field_1: {
      type: "MULTI_LINE_TEXT",
      value: "文字列(複数行)",
    },
    rt_Field_1: {
      type: "RICH_TEXT",
      value: "<b>リッチエディター</b>",
    },
    nm_Field_1: {
      type: "NUMBER",
      value: "1",
    },
    cal_Field_1: {
      type: "CALC",
      value: "計算",
    },
    ckb_Field_1: {
      type: "CHECK_BOX",
      value: ["チェックボックス"],
    },
    rdo_Field_1: {
      type: "RADIO_BUTTON",
      value: "ラジオボタン",
    },
    msl_Field_1: {
      type: "MULTI_SELECT",
      value: ["複数選択"],
    },
    drp_Field_1: {
      type: "DROP_DOWN",
      value: "ドロップダウン",
    },
    usr_Field_1: {
      type: "USER_SELECT",
      value: [{ code: "user_name@domain.co.jp" }],
    },
    org_Field_1: {
      type: "ORGANIZATION_SELECT",
      value: [{ code: "000" }],
    },
    grp_Field_1: {
      type: "GROUP_SELECT",
      value: [{ code: "000" }],
    },
    dt_Field_1: {
      type: "DATE",
      value: "2012-01-11",
    },
    tm_Field_1: {
      type: "TIME",
      value: "11:30",
    },
    dttm_Field_1: {
      type: "DATETIME",
      value: "2012-01-11T11:30:00Z",
    },
    lnk_Field_1: {
      type: "LINK",
      value: "https://domain.co.jp/",
    },
    att_Field_1: {
      type: "FILE",
      value: [{ fileKey: "xxxx" }],
    },
    tbl_Field_1: {
      type: "SUBTABLE",
      value: [
        {
          id: "1",
          value: {
            txt_Field_2: {
              type: "SINGLE_LINE_TEXT",
              value: "文字列(１行)",
            },
          },
        },
      ],
    },
    ct_Field_1: {
      type: "CATEGORY",
      value: ["カテゴリ"],
    },
    st_Field_1: {
      type: "STATUS",
      value: "未処理",
    },
    sa_Field_1: {
      type: "STATUS_ASSIGNEE",
      value: [{ code: "user-name@domain.co.jp" }],
    },
  };

  // ---
  // kintone.api
  const path = "/k/v1/record";

  let url: string = "";

  url = kintone.api.url(path);
  url = kintone.api.url(path, true);

  url = kintone.api.urlForGet(url);
  url = kintone.api.urlForGet(url, { app: "1", fields: ["field_code"] });
  url = kintone.api.urlForGet(url, { app: "2", fields: ["field_code"] }, true);

  let response: kintone.Response;

  response = await kintone.api.getConcurrencyLimit();

  kintone.api(
    url,
    "GET",
    { id: "1" },
    (res: kintone.Response) => {
      console.log(res);
    },
    (err: kintone.Error) => {
      console.error(err);
    }
  );

  response = await kintone.api(url, "GET", { id: "1" });

  // ---
  // kintone.app
  // kintone.mobile.app
  let id: number | null = null;

  id = kintone.app.getId();
  id = kintone.mobile.app.getId();

  response = await kintone.app.getIcons([1]);

  let elements: Element[] | null = null;

  elements = kintone.app.getFieldElements("field_code");
  elements = kintone.mobile.app.getFieldElements("field_code");

  let element: Element | null = null;

  element = kintone.app.getHeaderMenuSpaceElement();

  element = kintone.app.getHeaderSpaceElement();
  element = kintone.mobile.app.getHeaderSpaceElement();

  id = kintone.app.getLookupTargetAppId("field_code");
  id = kintone.mobile.app.getLookupTargetAppId("field_code");

  id = kintone.app.getRelatedRecordsTargetAppId("field_code");
  id = kintone.mobile.app.getRelatedRecordsTargetAppId("field_code");

  let query: string | null;

  query = kintone.app.getQueryCondition();
  query = kintone.mobile.app.getQueryCondition();

  query = kintone.app.getQuery();
  query = kintone.mobile.app.getQuery();

  // ---
  // kintone.app.record
  // kintone.mobile.app.record
  id = kintone.app.record.getId();
  id = kintone.mobile.app.record.getId();

  record = kintone.app.record.get();
  record = kintone.mobile.app.record.get();

  if (record) kintone.app.record.set(record);

  // ---
  // kintone.event
  const EVENT_TYPE = "app.record.index.show";
  const EVENT_TYPES = ["app.record.index.show", "mobile.app.record.index.show"];

  let handler1 = () => {};
  let handler2 = () => true;
  let handler3 = (kevent: kintone.Event) => kevent;
  let handler4 = async (kevent: kintone.Event) => kevent;

  kintone.events.on(EVENT_TYPE, handler1);
  kintone.events.on(EVENT_TYPES, handler1);
  kintone.events.on(EVENT_TYPE, handler2);
  kintone.events.on(EVENT_TYPES, handler2);
  kintone.events.on(EVENT_TYPE, handler3);
  kintone.events.on(EVENT_TYPES, handler3);
  kintone.events.on(EVENT_TYPE, handler4);
  kintone.events.on(EVENT_TYPES, handler4);

  let flg: boolean;

  flg = kintone.events.off(EVENT_TYPE, handler1);
  flg = kintone.events.off(EVENT_TYPES, handler1);
  flg = kintone.events.off(EVENT_TYPE, handler2);
  flg = kintone.events.off(EVENT_TYPES, handler2);
  flg = kintone.events.off(EVENT_TYPE, handler3);
  flg = kintone.events.off(EVENT_TYPES, handler3);
  flg = kintone.events.off(EVENT_TYPE, handler4);
  flg = kintone.events.off(EVENT_TYPES, handler4);
  flg = kintone.events.off(EVENT_TYPE);
  flg = kintone.events.off(EVENT_TYPES);
  flg = kintone.events.off();

  // kintone.proxy
  kintone.proxy(
    path,
    "GET",
    { "Content-Type": "application/json" },
    { id: "1" },
    (body, status, headers) => {
      console.log(body, status, headers);
    },
    (err) => {
      console.error(err);
    }
  );

  let aryRes = null;
  aryRes = await kintone.proxy(
    path,
    "GET",
    { "Content-Type": "application/json" },
    { id: "1" }
  );

  // kintone.portal
  element = kintone.portal.getContentSpaceElement();
  element = kintone.mobile.portal.getContentSpaceElement();

  // kintone.space
  element = kintone.space.portal.getContentSpaceElement();
  element = kintone.mobile.space.portal.getContentSpaceElement();

  // kintone.plugin
  const pluginId = "pluginId";

  let config: any;
  config = kintone.plugin.app.getConfig(pluginId);

  kintone.plugin.app.setConfig(config);
  kintone.plugin.app.setConfig(config, () => {});

  const proxyPath = "https://domain.co.jp/api/";

  const { headers, data } = kintone.plugin.app.getProxyConfig(proxyPath, "GET");

  kintone.plugin.app.setProxyConfig(proxyPath, "GET", headers, data);
  kintone.plugin.app.setProxyConfig(proxyPath, "GET", headers, data, () => {});

  kintone.plugin.app.proxy(
    pluginId,
    proxyPath,
    "GET",
    {
      "Content-Type": "application/json",
    },
    { id: "1" },
    (body, status, headers) => {},
    (err) => {}
  );

  aryRes = await kintone.plugin.app.proxy(
    pluginId,
    proxyPath,
    "GET",
    {
      "Content-Type": "application/json",
    },
    { id: "1" }
  );

  kintone.plugin.app.proxy.upload(
    pluginId,
    proxyPath,
    "POST",
    {
      "Content-Type": "application/json",
    },
    {
      format: "RAW",
      value: new Blob(),
    },
    (body, status, headers) => {},
    (err) => {}
  );

  aryRes = await kintone.plugin.app.proxy.upload(
    pluginId,
    proxyPath,
    "POST",
    {
      "Content-Type": "application/json",
    },
    {
      format: "RAW",
      value: new Blob(),
    }
  );
})();
