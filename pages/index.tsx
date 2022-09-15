import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import superclusterLogotype from "../public/supercluster-logotype.svg";
import banklessLogo from "../public/banklessLogo.png";
import pattern from "../public/pattern.png";

import EmailForm from "./components/emailForm";

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

      <main
        className={"bg-repeat-space text-white h-full"}
        style={{ backgroundImage: `url(${pattern.src})` }}
      >
        <header className="flex justify-center py-5">
          <Image
            src={superclusterLogotype}
            alt="Supercluster Logo"
            height={24}
          />
        </header>
        <section className="container lg:px-60">
          <section className="flex flex-col p-12 text-center">
            <h1 className={"text-6xl md:text-7xl lg:text-9xl font-bold mb-12"}>
              Decentralized file sharing.
            </h1>
            <h2 className={"text-4xl lg:text-6xl"}>Built for DAOs.</h2>
            <p className="my-12 text-xl text-slate-400 leading-relaxed">
              Supercluster Files enables DAOs to share content between team
              members without having to rely on centralized parties.
            </p>
            <p className="text-2xl font-bold text-slate-400">
              Your{" "}
              <span className="text-yellow-400">
                decentralized organization
              </span>{" "}
              deserves{" "}
              <span className="text-yellow-400">decentralized tools</span>.
            </p>
          </section>
          <section className="md:container md:mx-auto grid grid-cols-2 gap-4">
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">Built on IPFS</h3>
              <p className="text-slate-400 mt-4">
                All content is pinned and served by the IPFS network, ensuring
                maximum decentralization.
              </p>
            </div>
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">NFT access control</h3>
              <p className="text-slate-400 mt-4">
                Create custom access controls for your team members using NFTs
                on Polygon.
              </p>
            </div>
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">Real-time content</h3>
              <p className="text-slate-400 mt-4">
                All your team members receive real-time updates as soon as new
                content is shared.
              </p>
            </div>
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">Use your web3 identity</h3>
              <p className="text-slate-400 mt-4">
                Login with your web3 wallet. Share files directly using your
                team member&apos;s addresses.
              </p>
            </div>
          </section>
          <section className="md:container md:mx-auto mt-12 mb-9">
            <h4 className="text-xl text-yellow-400 font-bold text-center">
              How it works
            </h4>
            <div className="flex gap-x-8 gap-y-8 mt-8">
              <div className="p-7 bg-gray-800 rounded-3xl w-full">
                <div className="heading-number text-center mx-auto">
                  <h1 className="font-bold text-2xl text-emerald-500">1</h1>
                </div>
                <h1 className="text-center font-bold text-2xl my-4">
                  Teams get created
                </h1>
                <p className="mb-6">
                  Teams within a DAO create their own group with specific
                  settings
                </p>
                <p className="mb-6">
                  Invites are sent out via ENS / ETH address
                </p>
                <p>Access control dictated by NFT ownership</p>
              </div>
              <div className="p-7 bg-gray-800 rounded-3xl w-full">
                <div className="heading-number text-center mx-auto">
                  <h1 className="font-bold text-2xl text-emerald-500">2</h1>
                </div>
                <h1 className="text-center font-bold text-2xl my-4">
                  Files get shared
                </h1>
                <p className="mb-6">
                  All files shared are pinned to the IPFS network
                </p>
                <p className="mb-6">
                  Users are notified of new uploaded files via XMTP
                </p>
                <p>New files are automatically pinned to IPFS by members</p>
              </div>
              <div className="p-7 bg-gray-800 rounded-3xl w-full">
                <div className="heading-number text-center mx-auto">
                  <h1 className="font-bold text-2xl text-emerald-500">3</h1>
                </div>
                <h1 className="text-center font-bold text-2xl my-4">
                  Get incentivized
                </h1>
                <p className="mb-6">
                  DAOs have full control over their incentive structures
                </p>
                <p className="mb-6">
                  Generate reports on each team member&apos;s network activity
                </p>
                <p>DAOs decide how members are rewarded</p>
              </div>
            </div>
          </section>
          <section className="md:container md:mx-auto mt-12 mb-4">
            <h4 className="text-xl text-yellow-400 font-bold text-center mb-8">
              Our partners
            </h4>
            <div className="flex flex-col justify-center">
              <div className="self-center">
                <Image
                  src={banklessLogo}
                  alt="BanklessDAO Logo"
                  height={207}
                  width={271}
                />
              </div>
              <h3 className="font-bold text-2xl text-center mt-2">
                Bankless DAO
              </h3>
            </div>
          </section>
          <section className="flex flex-col">
            <EmailForm />
          </section>
        </section>
        <footer className="py-10 text-center text-slate-400">
          © Supercluster Labs
        </footer>
      </main>
    </div>
  );
};

export default Home;
