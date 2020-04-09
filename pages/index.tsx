import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { NextPage } from "next";
import { useTranslation } from "../i18next";
import { withApollo } from '../utils/with-apollo';

const QUERY = gql`
  {
    activities(input: { offset: 10 }) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        totalCount
      }
      nodes {
        id
        name
        performers {
          name
        }
      }
    }
  }
`;

const Index: NextPage = () => {
  const { t } = useTranslation();
  const { loading, data, error } = useQuery(QUERY);

  if (loading) {
    return <div>{t('index.loading', "Loading...")}</div>
  }

  if (error) {
    return <div>{t("index.error", "An unexpected error occurred")}</div>;
  }

  return (
    <div>
      <ul>
        {data.activities.nodes.map((node: any) => (
          <li key={node.id}>
            <h4>{node.name}</h4>
            <ul>
              {node.performers.map((performer: any) => (
                <li>
                  {performer.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withApollo(Index);
