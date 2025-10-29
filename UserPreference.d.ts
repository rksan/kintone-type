/**
 * User Preference
 */
export type UserPreference = {
  timeFormat: "TWELVE" | "TWENTY_FOUR";
  desktopNotifications: {
    enabled: boolean;
  };
  emailNotifications: {
    enabled: boolean;
    condition: "TO_ME" | "ALL";
    format: "HTML" | "TEXT";
  };
};
