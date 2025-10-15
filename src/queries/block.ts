import gql from "graphql-tag";

const BLOCK_FRAGMENT = gql`
  fragment Block on Block {
    id
    key
    content
    created_at
    updated_at
    fields {
      id
      key
      type
      value
    }
  }
`;

const BLOCK_QUERY = gql`
  query Block($key: String) {
    block(key: $key) {
      ...Block
    }
  }
  ${BLOCK_FRAGMENT}
`;

export { BLOCK_QUERY, BLOCK_FRAGMENT };
