import type { NextPage } from "next";
import Head from "next/head";

import Header from "./components/header";
import EmailForm from "./components/emailForm";
import Button from "./components/button";

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
        className={"bg-gradient-to-b from-[#1A253C] to-[#111827] text-white"}
      >
        <Header />
        <section className="container max-w-screen-xl px-6 md:px-0">
          <section className="container mx-auto">
            <h1 className={"text-4xl md:text:6xl lg:text-8xl mb-12"}>
              Decentralized file sharing is here.
            </h1>
            <p className="my-6 text-2xl leading-relaxed px:inherit">
              Supercluster Files enables decentralized teams to share content between members - using web3 tools.
            </p>
            <p className="text-2xl font-bold text-slate-400">
              Your{" "}
              <span className="text-yellow-400">
                decentralized organization
              </span>{" "}
              deserves{" "}
              <span className="text-yellow-400">decentralized tools</span>.
            </p>
            <div>
              <Button text="Sign up for early access" onClick={() => console.log("Hello")} primary />
              <Button text="Join our Discord" onClick={() => console.log("Joining Discord")} primary={false} />
            </div>
          </section>
          <section className="grid lg:grid-cols-3 gap-6 mt-12">
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">🌐 Built on IPFS</h3>
              <p className="text-slate-400 mt-4">
                All content is pinned and served by the IPFS network, ensuring
                maximum decentralization.
              </p>
            </div>
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">🔒 Custom access control</h3>
              <p className="text-slate-400 mt-4">
                Create custom access controls for your team members using NFTs, DAO tokens, or just a list of addresses.
              </p>
            </div>
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">🔑 Use your web3 identity</h3>
              <p className="text-slate-400 mt-4">
                Login with your web3 wallet. Share files directly using your team member’s addresses.
              </p>
            </div>
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">✉️ Real-time updates</h3>
              <p className="text-slate-400 mt-4">
                All your team members receive real-time updates as soon as new
                content is shared.
              </p>
            </div>
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">💻 Local-first</h3>
              <p className="text-slate-400 mt-4">
                All of your data is stored and shared directly from your local machine. Nothing is stored in the cloud, protecting your privacy.
              </p>
            </div>
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">⛔ Censorship resistant</h3>
              <p className="text-slate-400 mt-4">
                Your data is yours. You’re protected from having any data or content deleted at the platform level.
              </p>
            </div>
          </section>
          <section className="md:container md:mx-auto mt-12 mb-9">
            <div className="text-center">
              <h4 className="text-2xl mb-4">
                How it works
              </h4>
              <p className="text-slate-400"> Supercluster Files uses web3 native protocols under the hood </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mt-8 leading-relaxed">
              <div className="p-7 bg-gray-800 rounded-3xl h-full flex flex-col">
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
                <p>Access control dictated by your custom access controls set up for your cluster</p>
              </div>
              <div className="p-7 bg-gray-800 rounded-3xl h-full flex flex-col">
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
              <div className="p-7 bg-gray-800 rounded-3xl h-full flex flex-col">
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
          <div className="text-center">
            <h4 className="text-2xl mb-4">
              Partners
            </h4>
            <p className="text-slate-400"> Backed by the best in web3 </p>
          </div>
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
