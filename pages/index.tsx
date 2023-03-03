import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "./home";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Supercluster Labs</title>
        <meta
          name="description"
          content="Supercluster Labs - Accelerating the decentralized future"
        />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
