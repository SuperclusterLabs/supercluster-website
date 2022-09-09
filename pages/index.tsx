import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="dark">
      <Head>
        <title>Supercluster Labs</title>
        <meta
          name="description"
          content="Supercluster Labs - Accelerating the decentralized future"
        />
      </Head>

      <main className={"dark:bg-gray-900 h-screen v-screen text-slate-200"}>
        <div className="flex flex-col justify-center items-center h-screen v-screen p-12 text-center">
          <h1 className={"text-6xl font-bold superclusterText"}>
            Supercluster Labs
          </h1>
          <p className="my-12 text-2xl text-slate-400">
            We&apos;re building a{" "}
            <span className="font-bold">
              decentralized file sharing platform{" "}
            </span>
            purpose-built for <span className="font-bold">DAOs</span>.
          </p>
          <p className="text-2xl text-slate-400">
            More information coming soon!
          </p>
        </div>
      </main>
      <footer className="dark:bg-gray-900 py-10 text-center text-slate-400">
        © Supercluster Labs
      </footer>
    </div>
  );
};

export default Home;
