import gql from 'graphql-tag'

const COLLECTION_QUERY = gql`
  query Collection($key: String) {
    collection(key: $key) {
      id
      key
      items {
        id
        values {
          key
          value
        }
      }
    }
  }
`

export { COLLECTION_QUERY }
