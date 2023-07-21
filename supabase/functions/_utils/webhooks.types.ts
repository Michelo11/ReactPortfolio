export type InsertPayload<T> = {
  type: "INSERT";
  table: string;
  schema: string;
  record: T;
  old_record: null;
};
