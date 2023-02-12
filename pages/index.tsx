import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import outlierLogo from "../public/outlier-white.svg";
import filecoinLogo from "../public/filecoin-white.png";
import ipfsLogo from "../public/ipfs-white.png";
import banklessLogo from "../public/bankless-white.svg";
import xmtpLogo from "../public/xmtp-white.svg";
import protocollabsLogo from "../public/protocollabs-white.svg";
import mastodonLogo from "../public/Mastodon.svg";
import twitterLogo from "../public/Twitter.svg";
import discordLogo from "../public/Discord.svg";
import githubLogo from "../public/Github.svg";
import linkedInLogo from "../public/LinkedIn.svg";
import kaiProfile from "../public/kai-profile.jpg";
import govProfile from "../public/gov-profile.jpg";

import Header from "./components/header";
import Button from "./components/button";
import Roadmap from "./components/roadmap";

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
        className={
          "bg-gradient-to-b from-[#1A253C] to-[#111827] text-white pt-6"
        }
      >
        <section className="container max-w-screen-xl px-6 md:px-0">
          <section className="container mx-auto">
            <Header />
            <div className="max-w-[680px]">
              <h1
                className={
                  "text-4xl leading-loose md:text:6xl lg:text-8xl mb-12 mt-16"
                }
              >
                Decentralized file sharing is here.
              </h1>
              <p className="my-6 text-2xl leading-loose px:inherit">
                Supercluster Files enables decentralized teams to share content
                between members - using web3 tools.
              </p>
              <p className="text-2xl font-bold text-slate-400 leading-loose">
                Your{" "}
                <span className="text-supercluster-primary">
                  decentralized organization
                </span>{" "}
                deserves{" "}
                <span className="text-supercluster-primary">
                  decentralized tools
                </span>
                .
              </p>
            </div>
            <div className="mt-12">
              <Link
                target="_blank"
                href="https://supercluster-labs.beehiiv.com/subscribe"
              >
                <Button
                  text="Sign up for early access"
                  onClick={() => console.log("Hello")}
                  primary
                />
              </Link>
              <Link target="_blank" href="https://discord.gg/T49E27Tdtu">
                <Button marginLeft text="Join our Discord" primary={false} />
              </Link>
            </div>
          </section>
          <section className="container grid lg:grid-cols-3 gap-6 mt-20">
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
                Create custom access controls for your team members using NFTs,
                DAO tokens, or just a list of addresses.
              </p>
            </div>
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">🔑 Use your web3 identity</h3>
              <p className="text-slate-400 mt-4">
                Login with your web3 wallet. Share files directly using your
                team member’s addresses.
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
                All of your data is stored and shared directly from your local
                machine. Nothing is stored in the cloud, protecting your
                privacy.
              </p>
            </div>
            <div className="border rounded-3xl border-solid border-gray-500 p-6">
              <h3 className="text-2xl">⛔ Censorship resistant</h3>
              <p className="text-slate-400 mt-4">
                Your data is yours. You’re protected from having any data or
                content deleted at the platform level.
              </p>
            </div>
          </section>
          <section className="md:container md:mx-auto mt-12 mb-9">
            <div className="text-center">
              <h4 className="text-2xl mb-4">How it works</h4>
              <p className="text-slate-400">
                {" "}
                Supercluster Files uses web3 native protocols under the hood{" "}
              </p>
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
                <p>
                  Access control dictated by your custom access controls set up
                  for your cluster
                </p>
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
          <section className="mt-20 container">
            <div className="text-center">
              <h4 className="text-2xl mb-4">Partners</h4>
              <p className="text-slate-400"> Backed by the best in web3 </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-20 mt-12">
              <div className="flex align-center">
                <Image
                  src={outlierLogo}
                  alt="Outlier Ventures logo"
                  height={70}
                />
              </div>
              <div className="flex justify-center align-center">
                <Image src={xmtpLogo} alt="XMTP logo" height={55} />
              </div>
              <div className="flex justify-center align-center">
                <Image
                  src={protocollabsLogo}
                  alt="Protocol Labs logo"
                  height={70}
                />
              </div>
              <div className="flex justify-center align-center">
                <Image src={filecoinLogo} alt="Filecoin logo" height={70} />
              </div>
              <div className="flex justify-center align-center">
                <Image src={banklessLogo} alt="BanklessDAO logo" height={55} />
              </div>
              <div className="flex justify-center align-center">
                <Image src={ipfsLogo} alt="IPFS logo" height={70} />
              </div>
            </div>
          </section>
          <section className="mt-20 container">
            <div className="text-center">
              <h4 className="text-2xl mb-4">Roadmap</h4>
              <p className="mb-6 text-slate-400">
                {" "}
                We’re just getting started, and there’s a lot more coming
              </p>
              <Link
                target="_blank"
                href="https://github.com/orgs/SuperclusterLabs/projects/1"
              >
                <Button text="View our technical roadmap" primary={false} />
              </Link>
            </div>
            <div className="flex mx-auto max-w-xl mt-6">
              <Roadmap />
            </div>
          </section>
          <div className="mt-12 flex justify-center">
            <Link
              target="_blank"
              href="https://supercluster-labs.beehiiv.com/subscribe"
            >
              <Button
                text="Sign up for early access"
                onClick={() => console.log("Hello")}
                primary
              />
            </Link>
          </div>
          <section className="mt-20 container text-center">
            <h4 className="text-2xl mb-4">Our team</h4>
            <p className="mb-6 text-slate-400">Meet our core team members</p>
            <div className="grid lg:grid-cols-2 gap-20">
              <div className="flex gap-6">
                <div>
                  <Image
                    src={kaiProfile}
                    alt="Kai Huang profile"
                    height={200}
                    style={{ borderRadius: 24 }}
                  />
                </div>
                <div className="flex flex-col gap-2 w-2/3 text-left">
                  <h4 className="text-2xl">Kai Huang</h4>
                  <div className="flex flex-row gap-4">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/kai-huang-79659b41/"
                    >
                      <Image
                        src={linkedInLogo}
                        alt="LinkedIn logo"
                        height={20}
                      />
                    </Link>
                    <Link target="_blank" href="https://twitter.com/KaiHuang">
                      <Image src={twitterLogo} alt="Twitter logo" height={20} />
                    </Link>
                  </div>
                  <h5 className="text-slate-400">CEO & Cofounder</h5>
                  <p>
                    Kai previously worked as a product lead at MetaMask, the
                    leading web3 wallet in the ecosystem today. Since 2020, Kai
                    has participated as a core contributor in various DAOs,
                    including BanklessDAO and RadicleDAO. Prior to web3, he was
                    leading the payments strategy at REI, Inc.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="rounded-3xl">
                  <Image
                    src={govProfile}
                    alt="Govind Mohan profile"
                    height={200}
                    style={{ borderRadius: 24 }}
                  />
                </div>
                <div className="flex flex-col gap-2 w-2/3 text-left">
                  <h4 className="text-2xl">Govind Mohan</h4>
                  <div className="flex flex-row gap-4">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/govindmohan218/"
                    >
                      <Image
                        src={linkedInLogo}
                        alt="LinkedIn logo"
                        height={20}
                      />
                    </Link>
                    <Link target="_blank" href="https://twitter.com/_gov218">
                      <Image src={twitterLogo} alt="Twitter logo" height={20} />
                    </Link>
                  </div>
                  <h5 className="text-slate-400">CTO & Cofounder</h5>
                  <p>
                    Govind is a blockchain developer and researcher who has been
                    in the space since 2014. He has been involved with several
                    start-ups, notably starting Virgil Systems in 2018 where he
                    was developing P2P data storage systems for governments with
                    a strong focus on data integrity and availability. Since
                    2022, he has done work for various DAOs and open source
                    communities.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="mt-20 container flex flex-col items-center text-center justify-center">
          <h4 className="text-2xl mb-4">Get in touch</h4>
          <p className="mb-6 text-slate-400">
            Find us at any of these channels
          </p>
          <div className="flex gap-8">
            <Link target="_blank" href="https://discord.gg/T49E27Tdtu">
              <Image src={discordLogo} alt="Discord Logo" />
            </Link>
            <Link target="_blank" href="https://github.com/SuperclusterLabs">
              <Image src={githubLogo} alt="Github Logo" />
            </Link>
            <Link target="_blank" href="https://twitter.com/superclusterdev">
              <Image src={twitterLogo} alt="Twitter Logo" />
            </Link>
            <Link
              target="_blank"
              href="https://cryptodon.lol/@supercluster_labs"
            >
              <Image src={mastodonLogo} alt="Mastodon Logo" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/supercluster-labs/"
            >
              <Image src={linkedInLogo} alt="LinkedIn Logo" />
            </Link>
          </div>
        </section>
        <footer className="py-10 text-center text-slate-400">
          Copyright © 2023 Supercluster Labs. All Rights Reserved
        </footer>
      </main>
    </div>
  );
};

export default Home;
