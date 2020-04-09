import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useTranslation } from "../../i18next";
import { withApollo } from "../../utils/with-apollo";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
  query FetchPerformer($id: ID!) {
    performer(id: $id) {
      id
      name
      description
    }
  }
`;

const Performer: NextPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(QUERY, { variables: { id } });

  if (loading) {
    return <div>{t("performer.loading", "Loading...")}</div>;
  }

  if (error) {
    return <div>{t("performer.error", "Unexpected error occurred")}</div>;
  }

  const { performer } = data;

  return (
    <div>
      <Head>
        <title>{performer.name}</title>
      </Head>
      <h2>{performer.name}</h2>
      <p>{performer.description}</p>
    </div>
  );
};

Performer.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withApollo(Performer);
