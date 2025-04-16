import type { proxy } from "@/js/plugin/app/proxy.d";

function fnProxy(
  pluginId: string,
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  headers: any,
  data: any,
  successCallback: (body: string, status: number, headers: any) => void,
  failureCallback?: (body: string) => void
): Promise<[string, number, any]> | void;
function fnProxy(
  pluginId: string,
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  headers: any,
  data: any
): Promise<[string, number, any]>;
function fnProxy(
  pluginId: string,
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  headers: any,
  data: any,
  successCallback?: (body: string, status: number, headers: any) => void,
  failureCallback?: (body: string) => void
): Promise<[string, number, any]> | void {
  throw new Error("Function not implemented.");
}

function fnUpload(
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
): void;
function fnUpload(
  pluginId: string,
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  headers: any,
  data: {
    format: "RAW";
    value: Blob;
  }
): Promise<[string, number, any]>;
function fnUpload(
  pluginId: string,
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  headers: any,
  data: {
    format: "RAW";
    value: Blob;
  },
  successCallback?: (body: string, status: number, header: any) => void,
  failureCallback?: (err: string) => void
): Promise<[string, number, any]> | void {
  throw new Error("Function not implemented.");
}

const objProxy = {
  upload: fnUpload,
};

const proxy: proxy = Object.assign(fnProxy, objProxy);

export default proxy;
