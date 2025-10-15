import gql from "graphql-tag";
import { BLOCK_FRAGMENT } from "./block";

const BLOCK_GROUP_QUERY = gql`
  query BlockGroup($key: String) {
    blockGroup(key: $key) {
      id
      key
      name
      blocks {
        ...Block
      }
    }
  }
  ${BLOCK_FRAGMENT}
`;

export { BLOCK_GROUP_QUERY };
