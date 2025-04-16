import type { kintone } from "@/kintone.d";

/**
 * @see https://cybozu.dev/ja/kintone/docs/js-api/api/

 */
export type api = ((
  pathOrUrl: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  params: any,
  successCallback: (res: kintone.Response) => void,
  failureCallback?: (err: kintone.Error) => void
) => void) &
  ((
    pathOrUrl: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    params: any
  ) => Promise<kintone.Response>) & {
    /**
     * @see https://cybozu.dev/ja/kintone/docs/js-api/api/get-url/
     */
    url: (path: string, isGuestSpace?: boolean) => string;

    /**
     * @see https://cybozu.dev/ja/kintone/docs/js-api/api/get-url-including-query/
     */
    urlForGet: (path: string, params?: any, isGuestSpace?: boolean) => string;

    /**
     * @see https://cybozu.dev/ja/kintone/docs/js-api/api/get-concurrency-limit/
     */
    getConcurrencyLimit: () => Promise<kintone.Response>;
  };
