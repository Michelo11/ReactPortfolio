export type BasePayload<T> = {
  table: string;
  schema: string;
  record: T;
  old_record: T | null;
};

export type WebhookPayload<T> =
  | ({
      type: "INSERT";
      old_record: null;
    } & BasePayload<T>)
  | ({
      type: "UPDATE";
      old_record: T;
    } & BasePayload<T>)
  | ({
      type: "DELETE";
      old_record: T;
      record: null;
    } & BasePayload<T>);
