import App, { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { getDataFromTree } from "@apollo/react-ssr";
import withApollo, { WithApolloProps } from "next-with-apollo";
import { appWithTranslation } from "../i18next";

const CustomApp = ({
  Component,
  pageProps,
  apollo,
}: AppProps & WithApolloProps<InMemoryCache>) => {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

CustomApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}


export default appWithTranslation(
  withApollo(
    ({ initialState }) =>
      new ApolloClient({
        link: new HttpLink({
          uri: "https://refined-itsukara-link.neet.love/graphql",
        }),
        cache: new InMemoryCache().restore(initialState ?? {}),
      }),
    { getDataFromTree }
  )(CustomApp)
);
