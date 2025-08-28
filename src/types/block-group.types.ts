import { Block } from "./block.types";

export type BlockGroup = {
  id: number;
  key: string;
  name: string;
  blocks: Block[];
};
