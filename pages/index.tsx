import type { NextPage } from "next";
import Head from "next/head";

import {
  Header,
  Features,
  HowTo,
  Partners,
  SignUpForm,
} from '../components/home'


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
      <div className="container max-w-screen-xl  md:px-0">
        <Header />
        <Features />
        <HowTo />
        <Partners />
        <SignUpForm />
      </div>
    </>
  );
};

export default Home;
