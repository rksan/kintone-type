export namespace proxy {}

export type proxy =
  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/plugins/kintone-plug-in-proxy/
   */
  ((
    pluginId: string,
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    headers: any,
    data: any,
    successCallback: (body: string, status: number, headers: any) => void,
    failureCallback?: (err: string) => void
  ) => void) &
    ((
      pluginId: string,
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: any,
      data: any
    ) => Promise<[string, number, any]>) & {
      /**
       * @see https://cybozu.dev/ja/kintone/docs/js-api/plugins/kintone-plug-in-proxy-upload/
       */
      upload: ((
        pluginId: string,
        url: string,
        method: "GET" | "POST" | "PUT" | "DELETE",
        headers: any,
        data: {
          format: "RAW";
          value: Blob;
        },
        successCallback: (body: string, status: number, header: any) => void,
        failureCallback?: (err: string) => void
      ) => void) &
        ((
          pluginId: string,
          url: string,
          method: "GET" | "POST" | "PUT" | "DELETE",
          headers: any,
          data: {
            format: "RAW";
            value: Blob;
          }
        ) => Promise<[string, number, any]>);
    };
