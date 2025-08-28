export type Collection = {
  id: number;
  key: string;
  items: {
    id: number;
    values: {
      key: string;
      value: string;
    }[];
  }[];
};
