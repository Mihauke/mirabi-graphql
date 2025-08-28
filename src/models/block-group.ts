import { BlockGroup } from "../types/block-group.types";
import { apolloClient } from "../apollo";
import { BLOCK_GROUP_QUERY } from "../queries/block-group"; 

export function getBlockGroup(key: string): Promise<BlockGroup | null> {
  return new Promise<BlockGroup | null>(async (resolve, reject) => {
    try {
      const result = await apolloClient.query({
        query: BLOCK_GROUP_QUERY,
        variables: { key },
      }) as any;

      resolve(result.data.blockGroup as BlockGroup);
    } catch (error) {
      reject(error);
    }
  });
}
