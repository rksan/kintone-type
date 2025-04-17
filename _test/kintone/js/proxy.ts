import type { proxy } from "proxy.d";

function fnProxy(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  headers: any,
  data: any,
  successCallback: (body: string, status: number, header: any) => void,
  failureCallback?: (error: string) => void
): void;
function fnProxy(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  headers: any,
  data: any
): Promise<[string, number, any]>;
function fnProxy(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  headers: any,
  data: any,
  successCallback?: (body: string, status: number, header: any) => void,
  failureCallback?: (error: string) => void
): Promise<[string, number, any]> | void {
  throw new Error("Function not implemented.");
}

function fnUpload(
  url: string,
  method: "POST" | "PUT",
  headers: any,
  data: { format: "RAW"; value: Blob },
  successCallback: (body: string, status: number, header: any) => void,
  failureCallback?: (error: string) => void
): void;
function fnUpload(
  url: string,
  method: "POST" | "PUT",
  headers: any,
  data: { format: "RAW"; value: Blob }
): Promise<[string, number, any]>;
function fnUpload(
  url: string,
  method: "POST" | "PUT",
  headers: any,
  data: { format: "RAW"; value: Blob },
  successCallback?: (body: string, status: number, header: any) => void,
  failureCallback?: (error: string) => void
): Promise<[string, number, any]> | void {
  throw new Error("Function not implemented.");
}

const objProxy = {
  upload: fnUpload,
};

const proxy: proxy = Object.assign(fnProxy, objProxy);

export default proxy;
