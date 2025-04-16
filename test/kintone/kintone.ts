import type { kintone } from "@/kintone.d";
import type { Record } from "@/common/Record";
import api from "./js/api";
import proxy from "./js/proxy";
import plugin from "./js/plugin";

const kintone: kintone = {
  api: api,
  app: {
    record: {
      getId: function (): number | null {
        throw new Error("Function not implemented.");
      },
      get: function (): kintone.Record | null {
        throw new Error("Function not implemented.");
      },
      set: function (record: kintone.Record): void {
        throw new Error("Function not implemented.");
      },
      getFieldElement: function (fieldCode: string): Element | null {
        throw new Error("Function not implemented.");
      },
      getSpaceElement: function (id: string): Element | null {
        throw new Error("Function not implemented.");
      },
      setGroupFieldOpen: function (fieldCode: string, isOpen: boolean): void {
        throw new Error("Function not implemented.");
      },
      setFieldShown: function (fieldCode: string, isShown: boolean): void {
        throw new Error("Function not implemented.");
      },
      getHeaderMenuSpaceElement: function (): Element | null {
        throw new Error("Function not implemented.");
      },
    },
    getId: function (): number | null {
      throw new Error("Function not implemented.");
    },
    getIcons: function (apps: number[]): Promise<any[]> {
      throw new Error("Function not implemented.");
    },
    getFieldElements: function (fieldCode: string): Element[] | null {
      throw new Error("Function not implemented.");
    },
    getHeaderMenuSpaceElement: function (): Element | null {
      throw new Error("Function not implemented.");
    },
    getHeaderSpaceElement: function (): Element | null {
      throw new Error("Function not implemented.");
    },
    getLookupTargetAppId: function (fieldCode: string): number | null {
      throw new Error("Function not implemented.");
    },
    getRelatedRecordsTargetAppId: function (fieldCode: string): number | null {
      throw new Error("Function not implemented.");
    },
    getQueryCondition: function (): string | null {
      throw new Error("Function not implemented.");
    },
    getQuery: function (): string | null {
      throw new Error("Function not implemented.");
    },
  },
  events: {
    on: function (
      type: string | string[],
      handler: (event?: any) => any | Promise<any> | boolean | void
    ): void {
      throw new Error("Function not implemented.");
    },
    off: function (
      type?: string | string[],
      handler?: (event?: any) => any | Promise<any> | boolean | void
    ): boolean {
      throw new Error("Function not implemented.");
    },
  },
  proxy: proxy,
  portal: {
    getContentSpaceElement: function (): Element | null {
      throw new Error("Function not implemented.");
    },
  },
  space: {
    portal: {
      getContentSpaceElement: function (): Element | null {
        throw new Error("Function not implemented.");
      },
    },
  },
  plugin: plugin,
  getLoginUser: function (): kintone.LoginUser {
    throw new Error("Function not implemented.");
  },
  getUiVersion: function (): number {
    throw new Error("Function not implemented.");
  },
  getRequestToken: function (): string {
    throw new Error("Function not implemented.");
  },
  mobile: {
    app: {
      record: {
        getId: function (): number | null {
          throw new Error("Function not implemented.");
        },
        get: function (): Record | null {
          throw new Error("Function not implemented.");
        },
        set: function (record: Record): void {
          throw new Error("Function not implemented.");
        },
        getFieldElement: function (fieldCode: string): Element | null {
          throw new Error("Function not implemented.");
        },
        getSpaceElement: function (id: string): Element | null {
          throw new Error("Function not implemented.");
        },
        setGroupFieldOpen: function (fieldCode: string, isOpen: boolean): void {
          throw new Error("Function not implemented.");
        },
        setFieldShown: function (fieldCode: string, isShown: boolean): void {
          throw new Error("Function not implemented.");
        },
      },
      getId: function (): number | null {
        throw new Error("Function not implemented.");
      },
      getFieldElements: function (fieldCode: string): Element[] | null {
        throw new Error("Function not implemented.");
      },
      getHeaderSpaceElement: function (): Element | null {
        throw new Error("Function not implemented.");
      },
      getLookupTargetAppId: function (fieldCode: string): number | null {
        throw new Error("Function not implemented.");
      },
      getRelatedRecordsTargetAppId: function (
        fieldCode: string
      ): number | null {
        throw new Error("Function not implemented.");
      },
      getQueryCondition: function (): string | null {
        throw new Error("Function not implemented.");
      },
      getQuery: function (): string | null {
        throw new Error("Function not implemented.");
      },
    },
    portal: {
      getContentSpaceElement: function (): Element | null {
        throw new Error("Function not implemented.");
      },
    },
    space: {
      portal: {
        getContentSpaceElement: function (): Element | null {
          throw new Error("Function not implemented.");
        },
      },
    },
  },
};

export default kintone;
