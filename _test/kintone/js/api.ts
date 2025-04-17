import type kintone from "kintone.d";
import type { api } from "api.d";

function fnApi(
  pathOrUrl: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  params: any
): Promise<kintone.Response>;
function fnApi(
  pathOrUrl: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  params: any,
  successCallback: (res: kintone.Response) => void,
  failureCallback?: (err: kintone.Error) => void
): void;
function fnApi(
  pathOrUrl: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  params: any,
  successCallback?: (res: kintone.Response) => void,
  failureCallback?: (err: kintone.Error) => void
): Promise<kintone.Response> | void {
  throw new Error("function is not implements");
}

const objApi = {
  url(path: string, isGuestSpace?: boolean): string {
    throw new Error("function is not implements");
  },
  urlForGet(path: string, params?: any, isGuestSpace?: boolean): string {
    throw new Error("function is not implements");
  },
  getConcurrencyLimit(): Promise<kintone.Response> {
    throw new Error("function is not implements");
  },
};

const api: api = Object.assign(fnApi, objApi);

export default api;
