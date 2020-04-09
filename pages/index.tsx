import React, { useState, useCallback } from "react";
import gql from "graphql-tag";
import { NextPage } from "next";
import { useTranslation } from "../i18next";
import { useQuery } from "@apollo/react-hooks";

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
  const query = useQuery(QUERY);

  console.log(query);
  const { loading, data, error } = query;

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

export default Index;
