import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "../../i18next";

const User: NextPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>{t("user.title", "User {{id}}", { id })}</title>
      </Head>
      {t("user.title", "User {{id}}", { id })}
      <hr />
      <Link href="/">{t('user.back', 'Back to Home')}</Link>
    </div>
  );
};

export default User;
