import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: "https://mirabi.app/graphql",
    preserveHeaderCase: true,
    headers: {
      Authorization: global.VITE_MIRABI_AUTH ?? "",
      "MIRABI-API-SITE": global.VITE_MIRABI_SITE ?? "",
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       authorization: import.meta.env.VITE_MIRABI_AUTH,
//       'MIRABI-API-SITE': import.meta.env.VITE_MIRABI_SITE,
//     },
//     fetchOptions: {
//       mode: 'no-cors',
//     },
//   }))

//   return forward(operation)
// })

const apolloClient = createApolloClient();

export { apolloClient };
