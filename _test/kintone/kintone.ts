import kintone from "kintone.d";
import api from "./js/api";
import proxy from "./js/proxy";
import plugin from "./js/plugin";
import user from "./js/user";

const kintone: kintone = {
  api: api,

  app: {
    record: {
      getId: function (): number | null {
        throw new Error("Function not implemented.");
      },
      get: function (): { record: any } | null {
        throw new Error("Function not implemented.");
      },
      set: function (record: { record: any }): void {
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
      isGroupFieldOpen: function (fieldCode: string): Promise<boolean> {
        throw new Error("Function not implemented.");
      },
      getHeaderMenuSpaceElement: function (): Element | null {
        throw new Error("Function not implemented.");
      },
      getPermissions: function (): Promise<{
        editRecord: boolean;
        deleteRecord: boolean;
      }> {
        throw new Error("Function not implemented.");
      },
      getFieldPermissions: function (): Promise<kintone.Response> {
        throw new Error("Function not implemented.");
      },
      getStatusHistory: function (
        offset?: number,
        limit?: number
      ): Promise<kintone.Response> {
        throw new Error("Function not implemented.");
      },
      setFieldShown: function (fieldCode: string, isShown: boolean): void {
        throw new Error("Function not implemented.");
      },
      isFieldVisible: function (fieldCode: any): Promise<boolean> {
        throw new Error("Function not implemented.");
      },
      getStatusActions: function (): Promise<kintone.Response> {
        throw new Error("Function not implemented.");
      },
      getAssignees: function (): Promise<kintone.Response> {
        throw new Error("Function not implemented.");
      },
      showEditRecordButton: function (
        state: "VISIBLE" | "HIDDEN"
      ): Promise<void> {
        throw new Error("Function not implemented.");
      },
      showDuplicateRecordButton: function (
        state: "VISIBLE" | "HIDDEN"
      ): Promise<void> {
        throw new Error("Function not implemented.");
      },
      showPager: function (state: "VISIBLE" | "HIDDEN"): Promise<void> {
        throw new Error("Function not implemented.");
      },
      showSideBar: function (
        state: "OPEN" | "CLOSED" | "COMMENTS" | "HISTORY"
      ): Promise<void> {
        throw new Error("Function not implemented.");
      },
    },
    get: function (): Promise<any> {
      throw new Error("Function not implemented.");
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
    getFormFields: function (): Promise<kintone.Response> {
      throw new Error("Function not implemented.");
    },
    getFormLayout: function (): Promise<kintone.Response> {
      throw new Error("Function not implemented.");
    },
    isTestEnvironment: function (): Promise<boolean> {
      throw new Error("Function not implemented.");
    },
    isMaintenanceMode: function (): Promise<boolean> {
      throw new Error("Function not implemented.");
    },
    showDescription: function (state: "OPEN" | "CLOSED"): Promise<void> {
      throw new Error("Function not implemented.");
    },
    getView: function (): Promise<kintone.Response> {
      throw new Error("Function not implemented.");
    },
    getViews: function (): Promise<kintone.Response> {
      throw new Error("Function not implemented.");
    },
    getStatus: function (): Promise<kintone.Response> {
      throw new Error("Function not implemented.");
    },
    getCategories: function (): Promise<kintone.Response> {
      throw new Error("Function not implemented.");
    },
    getPermissions: function (): Promise<{
      addRecord: boolean;
      editApp: boolean;
    }> {
      throw new Error("Function not implemented.");
    },
    showAddRecordButton: function (state: "VISIBLE" | "HIDDEN"): Promise<void> {
      throw new Error("Function not implemented.");
    },
    showAppSettingsButton: function (
      state: "VISIBLE" | "HIDDEN"
    ): Promise<void> {
      throw new Error("Function not implemented.");
    },
    showOptionsButton: function (state: "VISIBLE" | "HIDDEN"): Promise<void> {
      throw new Error("Function not implemented.");
    },
    showFilterButton: function (state: "VISIBLE" | "HIDDEN"): Promise<void> {
      throw new Error("Function not implemented.");
    },
    showReportButton: function (state: "VISIBLE" | "HIDDEN"): Promise<void> {
      throw new Error("Function not implemented.");
    },
    showViewAndReportSelector: function (
      state: "VISIBLE" | "HIDDEN"
    ): Promise<void> {
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
    get: function (): Promise<{ id: string; name: string; isGuest: boolean }> {
      throw new Error("Function not implemented.");
    },
    getPermissions: function (): Promise<boolean> {
      throw new Error("Function not implemented.");
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
        get: function (): { record: any } | null {
          throw new Error("Function not implemented.");
        },
        set: function (record: { record: any }): void {
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
        isGroupFieldOpen: function (fieldCode: string): Promise<boolean> {
          throw new Error("Function not implemented.");
        },
        setFieldShown: function (fieldCode: string, isShown: boolean): void {
          throw new Error("Function not implemented.");
        },
        isFieldVisible: function (fieldCode: any): Promise<boolean> {
          throw new Error("Function not implemented.");
        },
        showEditRecordButton: function (
          state: "VISIBLE" | "HIDDEN"
        ): Promise<void> {
          throw new Error("Function not implemented.");
        },
        showPager: function (state: "VISIBLE" | "HIDDEN"): Promise<void> {
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
      showAddRecordButton: function (
        state: "VISIBLE" | "HIDDEN"
      ): Promise<void> {
        throw new Error("Function not implemented.");
      },
      showOptionsButton: function (state: "VISIBLE" | "HIDDEN"): Promise<void> {
        throw new Error("Function not implemented.");
      },
      showFilterButton: function (state: "VISIBLE" | "HIDDEN"): Promise<void> {
        throw new Error("Function not implemented.");
      },
      showViewSelector: function (state: "VISIBLE" | "HIDDEN"): Promise<void> {
        throw new Error("Function not implemented.");
      },
      showReportSelector: function (
        state: "VISIBLE" | "HIDDEN"
      ): Promise<void> {
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

  user: user,

  getUserPreference: function (): Promise<kintone.UserPreference> {
    throw new Error("Function not implemented.");
  },
  getAvailableServices: function (): Promise<{
    garoon: boolean;
    office: boolean;
    mailwise: boolean;
  }> {
    throw new Error("Function not implemented.");
  },
  getDomain: function (): Promise<{ subdomain: boolean; baseDomain: string }> {
    throw new Error("Function not implemented.");
  },
  getAvailableApiTypes: function (): Promise<string[]> {
    throw new Error("Function not implemented.");
  },
  isAccessWithClientCertificateAuthentication: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  isMobileApp: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  isMobilePage: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  isRevampedUI: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  getPageType: function (): Promise<{ type: string; page: string }> {
    throw new Error("Function not implemented.");
  },
  showConfirmDialog: function (config: {
    title?: string;
    body?: string;
    showOkButton?: boolean;
    okButtonText?: string;
    showCancelButton?: boolean;
    cancelButtonText?: string;
    showCloseButton?: boolean;
  }): Promise<"OK" | "CANCEL" | "CLOSE"> {
    throw new Error("Function not implemented.");
  },
  createDialog: function (config: {
    title?: string;
    body?: Element;
    showOkButton?: boolean;
    okButtonText?: string;
    showCancelButton?: boolean;
    cancelButtonText?: string;
    showCloseButton?: boolean;
    beforeClose?: (
      result: "OK" | "CANCEL" | "CLOSE"
    ) => boolean | Promise<boolean | void> | void;
  }): Promise<{
    show: () => Promise<"OK" | "CANCEL" | "CLOSE" | "FUNCTION">;
    close: () => void;
  }> {
    throw new Error("Function not implemented.");
  },
  showNotification: function (
    type: "ERROR" | "SUCCESS" | "INFO",
    message: string
  ): Promise<void> {
    throw new Error("Function not implemented.");
  },
  showLoading: function (state: "VISIBLE" | "HIDDEN"): Promise<void> {
    throw new Error("Function not implemented.");
  },
  system: {
    getAvailableFeatures: function (): Promise<kintone.Response> {
      throw new Error("Function not implemented.");
    },
    getPermissions: function (): Promise<kintone.Response> {
      throw new Error("Function not implemented.");
    },
  },
  isUsersAndSystemAdministrator: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  license: {
    isTrial: function (): Promise<boolean> {
      throw new Error("Function not implemented.");
    },
    getSubscriptionPlan: function (): Promise<any> {
      throw new Error("Function not implemented.");
    },
  },
};

export default kintone;
