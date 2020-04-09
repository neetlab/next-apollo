import makeWithApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
// import { getDataFromTree } from "@apollo/react-ssr";

export const withApollo = makeWithApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: new HttpLink({
        uri: "https://refined-itsukara-link.neet.love/graphql",
      }),
      cache: new InMemoryCache().restore(initialState ?? {}),
    }),
  {
    render: ({ Page, props }) => (
      <ApolloProvider client={props.apollo}>
        <Page {...props} />
      </ApolloProvider>
    ),
  }
);
