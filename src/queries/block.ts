import gql from "graphql-tag";

const BLOCK_FIELDS_FRAGMENT = gql`
  fragment BlockFields on Block {
    id
    key
    content
    created_at
    updated_at
  }
`;

const BLOCK_QUERY = gql`
  query Block($key: String) {
    block(key: $key) {
      ...BlockFields
    }
  }
  ${BLOCK_FIELDS_FRAGMENT}
`;

export { BLOCK_QUERY, BLOCK_FIELDS_FRAGMENT };
