import kintone from "kintone.d";

(async (kintone: kintone) => {
  const user: kintone.LoginUser = kintone.getLoginUser();

  console.info("[INFO]", user.id);
  console.info("[INFO]", user.code);

  const preference: kintone.UserPreference = await kintone.getUserPreference();
  console.info("[INFO]", preference.timeFormat);
  console.info("[INFO]", preference.emailNotifications);
  console.info("[INFO]", preference.desktopNotifications);

  if (kintone.isUsersAndSystemAdministrator()) {
    console.info("[INFO]", "user is Administrator");
  }

  const token: string = kintone.getRequestToken();
  console.info("[INFO]", token);

  const version: number = kintone.getUiVersion();
  console.info("[INFO]", version);

  const services = await kintone.getAvailableServices();
  console.info("[INFO]", services);

  const domain = await kintone.getDomain();
  console.info("[INFO]", domain);

  const apis = await kintone.getAvailableApiTypes();
  console.info("[INFO]", apis);

  if (await kintone.isAccessWithClientCertificateAuthentication()) {
    console.info("[INFO]", "certificate auth.");
  }

  if (await kintone.isMobileApp()) {
    console.info("[INFO]", "mobile app.");
  }

  if (await kintone.isMobilePage()) {
    console.info("[INFO]", "mobile page");
  }

  if (await kintone.isRevampedUI()) {
    console.info("[INFO]", "revamped ui.");
  }

  const pageType = await kintone.getPageType();
  console.info("[INFO]", pageType);

  await kintone.showConfirmDialog({
    title: "タイトル",
    body: "ボディ",
    showOkButton: true,
    okButtonText: "OK",
    showCancelButton: true,
    cancelButtonText: "Cancel",
  });

  let confirm = await kintone.showConfirmDialog({});

  if (confirm === "OK") {
    console.info("[INFO]", "OK");
  } else if (confirm === "CANCEL") {
    console.info("[INFO]", "CANCEL");
  } else if (confirm === "CLOSE") {
    console.info("[INFO]", "CLOSE");
  }

  (
    await kintone.createDialog({
      title: "タイトル",
      body: document.createElement("<div>"),
      showOkButton: true,
      okButtonText: "OK",
      showCancelButton: true,
      cancelButtonText: "CANCEL",
      showCloseButton: true,
      beforeClose: (result) => {
        if (result === "OK") {
          return false;
        } else if (result === "CANCEL") {
          return undefined;
        } else if (result === "CLOSE") {
          return;
        }
        return true;
      },
    })
  ).close();

  await kintone.createDialog({
    beforeClose: async (result) => {
      if (result === "OK") {
        return false;
      } else if (result === "CANCEL") {
        return;
      } else if (result === "CLOSE") {
        return;
      }
      return await Promise.resolve(true);
    },
  });

  let dialog = await (await kintone.createDialog({})).show();

  if (dialog === "OK") {
    console.info("[INFO]", "OK");
  } else if (dialog === "CANCEL") {
    console.info("[INFO]", "CANCEL");
  } else if (dialog === "CLOSE") {
    console.info("[INFO]", "CLOSE");
  } else if (dialog === "FUNCTION") {
    console.info("[INFO]", "FUNCTION");
  }

  await kintone.showNotification("INFO", "[INFO] information");
  await kintone.showNotification("SUCCESS", "[SUCCESS] success");
  await kintone.showNotification("ERROR", "[ERROR] error");

  await kintone.showLoading("VISIBLE");
  await kintone.showLoading("HIDDEN");

  //---
  // field type
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
  response = await kintone.app.get();

  let id: number | null = null;

  id = kintone.app.getId();
  id = kintone.mobile.app.getId();

  response = await kintone.app.getFormFields();

  response = await kintone.app.getFormLayout();

  if ((await kintone.app.isTestEnvironment()) === true) {
    console.info("[INFO]", "is environment");
  }

  if ((await kintone.app.isMaintenanceMode()) === true) {
    console.info("[INFO]", "is maintenance mode");
  }

  await kintone.app.showDescription("OPEN");
  await kintone.app.showDescription("CLOSED");

  response = await kintone.app.getIcons([1, 2, 3]);

  let elements: Element[] | null = null;

  elements = kintone.app.getFieldElements("field_code");
  elements = kintone.mobile.app.getFieldElements("field_code");

  let element: Element | null = null;

  element = kintone.app.getHeaderMenuSpaceElement();

  element = kintone.app.getHeaderSpaceElement();

  response = await kintone.app.getView();

  response = await kintone.app.getViews();

  let query: string | null;

  query = kintone.app.getQueryCondition();
  query = kintone.mobile.app.getQueryCondition();

  query = kintone.app.getQuery();
  query = kintone.mobile.app.getQuery();

  element = kintone.mobile.app.getHeaderSpaceElement();

  id = kintone.app.getLookupTargetAppId("field_code");
  id = kintone.mobile.app.getLookupTargetAppId("field_code");

  id = kintone.app.getRelatedRecordsTargetAppId("field_code");
  id = kintone.mobile.app.getRelatedRecordsTargetAppId("field_code");

  response = await kintone.app.getStatus();

  response = await kintone.app.record.getStatusActions();

  response = await kintone.app.record.getAssignees();

  response = await kintone.app.getCategories();

  let permissions = await kintone.app.getPermissions();
  console.info("[INFO]", permissions.addRecord, permissions.editApp);

  // ---
  // kintone.app.record
  // kintone.mobile.app.record
  id = kintone.app.record.getId();
  id = kintone.mobile.app.record.getId();

  record = kintone.app.record.get();
  record = kintone.mobile.app.record.get();

  if (record) kintone.app.record.set(record);

  element = kintone.app.record.getFieldElement("field_code");
  element = kintone.mobile.app.record.getFieldElement("field_code");

  element = kintone.app.record.getSpaceElement("element_id");
  element = kintone.mobile.app.record.getSpaceElement("element_id");

  kintone.app.record.setGroupFieldOpen("field_code", true);
  kintone.mobile.app.record.setGroupFieldOpen("field_code", true);

  if ((await kintone.app.record.isGroupFieldOpen("field_code")) === true) {
    console.info("[INFO]", "group is opened");
  }
  if (
    (await kintone.mobile.app.record.isGroupFieldOpen("field_code")) === true
  ) {
    console.info("[INFO]", "group is opened");
  }

  element = kintone.app.record.getHeaderMenuSpaceElement();

  let recordPermission = await kintone.app.record.getPermissions();
  console.info(
    "[INFO]",
    recordPermission.editRecord,
    recordPermission.deleteRecord
  );

  response = await kintone.app.record.getFieldPermissions();

  response = kintone.app.record.getStatusHistory();
  response = kintone.app.record.getStatusHistory(0);
  response = kintone.app.record.getStatusHistory(0, 100);

  kintone.app.record.setFieldShown("field_code", true);
  kintone.mobile.app.record.setFieldShown("field_code", true);

  if ((await kintone.app.record.isFieldVisible("field_code")) === true) {
    console.info("[INFO]", "field is visible");
  }

  if ((await kintone.mobile.app.record.isFieldVisible("field_code")) === true) {
    console.info("[INFO]", "field is visible");
  }

  await kintone.app.showAddRecordButton("VISIBLE");
  await kintone.app.showAddRecordButton("HIDDEN");
  await kintone.mobile.app.showAddRecordButton("VISIBLE");
  await kintone.mobile.app.showAddRecordButton("HIDDEN");

  await kintone.app.record.showEditRecordButton("VISIBLE");
  await kintone.app.record.showEditRecordButton("HIDDEN");
  await kintone.mobile.app.record.showEditRecordButton("VISIBLE");
  await kintone.mobile.app.record.showEditRecordButton("HIDDEN");

  await kintone.app.record.showDuplicateRecordButton("VISIBLE");
  await kintone.app.record.showDuplicateRecordButton("HIDDEN");

  await kintone.app.showAppSettingsButton("VISIBLE");
  await kintone.app.showAppSettingsButton("HIDDEN");

  await kintone.app.showOptionsButton("VISIBLE");
  await kintone.app.showOptionsButton("HIDDEN");
  await kintone.mobile.app.showOptionsButton("VISIBLE");
  await kintone.mobile.app.showOptionsButton("HIDDEN");

  await kintone.app.record.showPager("VISIBLE");
  await kintone.app.record.showPager("HIDDEN");
  await kintone.mobile.app.record.showPager("VISIBLE");
  await kintone.mobile.app.record.showPager("HIDDEN");

  await kintone.app.record.showSideBar("OPEN");
  await kintone.app.record.showSideBar("CLOSED");
  await kintone.app.record.showSideBar("COMMENTS");
  await kintone.app.record.showSideBar("HISTORY");

  await kintone.app.showFilterButton("VISIBLE");
  await kintone.app.showFilterButton("HIDDEN");
  await kintone.mobile.app.showFilterButton("VISIBLE");
  await kintone.mobile.app.showFilterButton("HIDDEN");

  await kintone.app.showReportButton("VISIBLE");
  await kintone.app.showReportButton("HIDDEN");

  await kintone.app.showViewAndReportSelector("VISIBLE");
  await kintone.app.showViewAndReportSelector("HIDDEN");

  await kintone.mobile.app.showViewSelector("VISIBLE");
  await kintone.mobile.app.showViewSelector("HIDDEN");

  await kintone.mobile.app.showReportSelector("VISIBLE");
  await kintone.mobile.app.showReportSelector("HIDDEN");

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
  let spaceInfo = await kintone.space.get();
  console.info("[INFO]", spaceInfo.id, spaceInfo.name, spaceInfo.isGuest);

  element = kintone.space.portal.getContentSpaceElement();
  element = kintone.mobile.space.portal.getContentSpaceElement();

  response = await kintone.space.getPermissions();

  // kintone.system
  response = await kintone.system.getAvailableFeatures();
  response = await kintone.system.getPermissions();

  // kintone.license
  response = await kintone.license.isTrial();

  response = await kintone.license.getSubscriptionPlan();

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

  // user
  let organizationTitles: any;
  organizationTitles = await kintone.user.getOrganizations();
  organizationTitles = await kintone.user.getOrganizations(user.code);

  let groups: any;
  groups = await kintone.user.getGroups();
  groups = await kintone.user.getGroups(user.code);

  let customFields: any;
  customFields = await kintone.user.getCustomFields();
  customFields = await kintone.user.getCustomFields(user.code);

  let icons: any;
  icons = await kintone.user.getIcons([user.code]);

  // @ts-ignore
})(window.kintone);
