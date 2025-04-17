export namespace proxy {}

export type proxy =
  /**
   * @see https://cybozu.dev/ja/kintone/docs/js-api/proxy/kintone-proxy/
   */
  ((
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    headers: any,
    data: any,
    successCallback: (body: string, status: number, headers: any) => void,
    failureCallback?: (body: string) => void
  ) => void) &
    ((
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: any,
      data: any
    ) => Promise<[string, number, any]>) & {
      /**
       * @see https://cybozu.dev/ja/kintone/docs/js-api/proxy/kintone-proxy-upload/
       */
      upload: ((
        url: string,
        method: "POST" | "PUT",
        headers: any,
        data: { format: "RAW"; value: Blob },
        successCallback: (body: string, status: number, headers: any) => void,
        failureCallback?: (body: string) => void
      ) => void) &
        ((
          url: string,
          method: "POST" | "PUT",
          headers: any,
          data: { format: "RAW"; value: Blob }
        ) => Promise<[string, number, any]>);
    };
