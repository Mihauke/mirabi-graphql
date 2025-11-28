import { apolloClient } from "../apollo";
import { BLOCK_GROUP_QUERY } from "../queries/block-group";
import type { BlockGroup } from "../types/block-group.types";

export function getBlockGroup(key: string): Promise<BlockGroup | null> {
  return new Promise<BlockGroup | null>((resolve, reject) => {
    apolloClient
      .query<{ blockGroup: BlockGroup | null }>({
        query: BLOCK_GROUP_QUERY,
        variables: { key },
      })
      .then((result) => {
        if (!result.data || result.data.blockGroup === undefined) {
          resolve(null);
          return;
        }
        resolve(result.data.blockGroup);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
