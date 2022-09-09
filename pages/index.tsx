import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import superclusterLogotype from "../public/supercluster-logotype.svg";
import headerImage from "../public/headerImage.jpg";
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

      <main className={"dark:bg-gray-900 text-slate-200"}>
        <header className="flex justify-center py-5">
          <Image
            src={superclusterLogotype}
            alt="Supercluster Logo"
            height={24}
          />
        </header>
        <div className="flex flex-col h-screen v-screen p-12 text-center">
          <h1 className={"text-6xl font-bold superclusterText"}>
            Decentralized file sharing.
          </h1>
          <h2 className={"text-5xl"}>Built for DAOs</h2>
          <p className="my-12 text-2xl text-slate-400">
            Supercluster Files enables DAOs to share content between team
            members without having to rely on centralized parties.
          </p>
          <p className="text-2xl font-bold text-slate-400">
            Your{" "}
            <span className="text-yellow-400">decentralized organization</span>{" "}
            deserves{" "}
            <span className="text-yellow-400">decentralized tools</span>.
          </p>
          <Image src={headerImage} alt="Image of supernova in space" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-2xl border-solid border-gray-500 p-6">
            <h3>Built on IPFS</h3>
            <p>
              All content is pinned and served by the IPFS network, ensuring
              maximum decentralization.
            </p>
          </div>
          <div className="border rounded-2xl border-solid border-gray-500 p-6">
            <h3>NFT access control</h3>
            <p>
              Create custom access controls for your team members using NFTs on
              Polygon.
            </p>
          </div>
          <div className="border rounded-2xl border-solid border-gray-500 p-6">
            <h3>Real-time content</h3>
            <p>
              All your team members receive real-time updates as soon as new
              content is shared.
            </p>
          </div>
          <div className="border rounded-2xl border-solid border-gray-500 p-6">
            <h3>Use your web3 identity</h3>
            <p>
              Login with your web3 wallet. Share files directly using your team
              member’s addresses.
            </p>
          </div>
        </div>
        <section>
          <h4>How it works</h4>
          <div className="flex">
            <div>
              <h1>Teams get created</h1>
              <p>
                Teams within a DAO create their own group with specific settings
              </p>
              <p>Invites are sent out via ENS / ETH address</p>
              <p>Access control dictated by NFT ownership</p>
            </div>
            <div>
              <h1>Files get shared</h1>
              <p>All files shared are pinned to the IPFS network</p>
              <p>Users are notified of new uploaded files via XMTP</p>
              <p>New files are automatically pinned to IPFS by members</p>
            </div>
            <div>
              <h1>Get incentivized</h1>
              <p>DAOs have full control over their incentive structures</p>
              <p>
                Generate reports on each team member&apos;s network activity
              </p>
              <p>DAOs decide how members are rewarded</p>
            </div>
          </div>
        </section>
        <section>
          <h4>Our partners</h4>
          <div>
            <h1>Bankless DAO</h1>
          </div>
          <div>
            <h1>DevDAO</h1>
          </div>
          <div>
            <h1>Women Build Web3</h1>
          </div>
        </section>
        <section>
          <h1>Interested?</h1>
        </section>
      </main>
      <footer className="dark:bg-gray-900 py-10 text-center text-slate-400">
        © Supercluster Labs
      </footer>
    </div>
  );
};

export default Home;
