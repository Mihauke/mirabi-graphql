import { Collection } from "../types/collection.types";
import { apolloClient } from "../apollo";
import { COLLECTION_QUERY } from "../queries/collection";

export function getCollection<T>(key: string, ctor: new () => T): Promise<T[]> {
  return new Promise<T[]>(async (resolve, reject) => {
    try {
      const data: { [key: string]: any }[] = [];
  
      const result = await apolloClient.query({
        query: COLLECTION_QUERY,
        variables: { key },
      }) as any;
  
      if (result) {
          (result.data.collection as Collection).items.forEach((item) => {
            const tmp: { [key: string]: any } = {
              id: item.id,
            };
  
            Object.getOwnPropertyNames(new ctor()).forEach((option) => {
              const x = item.values.find((value) => value.key === option);
              if (x) {
                tmp[option] = x.value;
              }
            });
  
            data.push(tmp);
          });
      }
  
      resolve(data as T[]);
    } catch (error) {
      reject(error);
    }
  });
}
