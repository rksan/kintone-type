import type kintone from "kintone.d";
import type { user } from "user.d";

const user: user = {
  getOrganizations: function (code?: string): Promise<user.OrganizationTitle> {
    throw new Error("Function not implemented.");
  },
  getGroups: function (code?: string): Promise<user.Group> {
    throw new Error("Function not implemented.");
  },
  getCustomFields: function (code?: string): Promise<user.CustomField[]> {
    throw new Error("Function not implemented.");
  },
  isUsersAndSystemAdministrator: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  getIcons: function (
    users: string[]
  ): Promise<{ user: string; url: string }[]> {
    throw new Error("Function not implemented.");
  },
};

export default user;
