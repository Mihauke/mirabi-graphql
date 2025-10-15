import { Block } from "../types/block.types";
import { apolloClient } from "../apollo";
import { BLOCK_QUERY } from "../queries/block";

export function getBlock(key: string): Promise<Block | null> {
  return new Promise<Block | null>(async (resolve, reject) => {
    try {
      const result = (await apolloClient.query({
        query: BLOCK_QUERY,
        variables: { key },
      })) as any;

      resolve(result.data.block as Block);
    } catch (error) {
      reject(error);
    }
  });
}
