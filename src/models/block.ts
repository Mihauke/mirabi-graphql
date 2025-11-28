import { apolloClient } from "../apollo";
import { BLOCK_QUERY } from "../queries/block";
import type { Block } from "../types/block.types";

export function getBlock(key: string): Promise<Block | null> {
  return new Promise<Block | null>((resolve, reject) => {
    apolloClient
      .query<{ block: Block | null }>({
        query: BLOCK_QUERY,
        variables: { key },
      })
      .then((result) => {
        if (!result.data || result.data.block === undefined) {
          resolve(null);
          return;
        }
        resolve(result.data.block);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
