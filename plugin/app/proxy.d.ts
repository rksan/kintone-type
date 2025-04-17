export namespace proxy {}

/**
 * @function kintone.plugin.app.proxy()
 * @see https://cybozu.dev/ja/kintone/docs/js-api/proxy/
 */
export type proxy = ((
  pluginId: string,
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  headers: any,
  data: any
) => Promise<[string, number, any]>) &
  ((
    pluginId: string,
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    headers: any,
    data: any,
    successCallback: (body: string, status: number, headers: any) => void,
    failureCallback?: (body: string) => void
  ) => void) & {
    upload: ((
      pluginId: string,
      url: string,
      method: "POST" | "PUT",
      headers: any,
      data: {
        format: "RAW";
        value: Blob;
      }
    ) => Promise<[string, number, any]>) &
      ((
        pluginId: string,
        url: string,
        method: "POST" | "PUT",
        headers: any,
        data: {
          format: "RAW";
          value: Blob;
        },
        successCallback: (body: string, status: number, header: any) => void,
        failureCallback?: (body: string) => void
      ) => void);
  };
