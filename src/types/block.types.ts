import type { BlockField } from "./block-field.types";

export type Block = {
  id: number;
  key: string;
  content: string;
  created_at: string;
  updated_at: string;
  fields: Array<BlockField>;
};
