import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: "https://mirabi.app/graphql",
    preserveHeaderCase: true,
    headers: {
      Authorization: globalThis.VITE_MIRABI_AUTH ?? "",
      "MIRABI-API-SITE": globalThis.VITE_MIRABI_SITE ?? "",
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

const apolloClient = createApolloClient();

export { apolloClient };
