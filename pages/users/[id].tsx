import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const User: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>User {id}</title>
      </Head>
      User {id}
      <hr />
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default User;
