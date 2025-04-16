import type { kintone } from "@/kintone.d";

export namespace events {}

/**
 * @see https://cybozu.dev/ja/kintone/docs/js-api/events/
 */
export type events = {
  /**
   * @see https://cybozu.dev/ja/id/37f50c8d618067d42eee8050/#register-event-handlers
   */
  on: (
    type: string | string[],
    handler: (
      event?: kintone.Event
    ) => kintone.Event | Promise<kintone.Event> | boolean | void
  ) => void;

  /**
   * @see https://cybozu.dev/ja/id/37f50c8d618067d42eee8050/#remove-event-handlers
   */
  off: (
    type?: string | string[],
    handler?: (
      event?: kintone.Event
    ) => kintone.Event | Promise<kintone.Event> | boolean | void
  ) => boolean;
};
