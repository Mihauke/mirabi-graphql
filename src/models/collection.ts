import { apolloClient } from "../apollo";
import { COLLECTION_QUERY } from "../queries/collection";
import type { Collection } from "../types/collection.types";

export function getCollection<T>(key: string, ctor: new () => T): Promise<T[]> {
  return new Promise<T[]>((resolve, reject) => {
    apolloClient
      .query<{ collection: Collection }>({
        query: COLLECTION_QUERY,
        variables: { key },
      })
      .then((result) => {
        if (!result.data || result.data.collection === undefined) {
          resolve([]);
          return;
        }

        const data: { [key: string]: unknown }[] = [];

        result.data.collection.items.forEach((item) => {
          const tmp: { [key: string]: unknown } = {
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

        resolve(data as T[]);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
