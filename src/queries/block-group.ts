import gql from "graphql-tag";
import { BLOCK_FIELDS_FRAGMENT } from "./block";

const BLOCK_GROUP_QUERY = gql`
  query BlockGroup($key: String) {
    blockGroup(key: $key) {
      id
      key
      name
      blocks {
        ...BlockFields
      }
    }
  }
  ${BLOCK_FIELDS_FRAGMENT}
`;

export { BLOCK_GROUP_QUERY };
