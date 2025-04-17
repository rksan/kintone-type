/**
 * Login User
 */
export type LoginUser = {
  id: string;
  code: string;
  name: string;
  email: string;
  url: string;
  employeeNumber?: string;
  phone: string;
  mobilePhone: string;
  extensionNumber: string;
  timezone: string;
  isGuest: boolean;
  language: string;
};
