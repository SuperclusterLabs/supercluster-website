import Image from "next/image";
import Link from "next/link";

import mastodonLogo from "../public/static/images/Mastodon.svg";
import twitterLogo from "../public/static/images/Twitter.svg";
import discordLogo from "../public/static/images/Discord.svg";
import githubLogo from "../public/static/images/Github.svg";
import linkedInLogo from "../public/static/images/LinkedIn.svg";

const socialItems = [
  { icon: discordLogo, to: 'https://discord.gg/T49E27Tdtu'},
  { icon: githubLogo, to: 'https://github.com/SuperclusterLabs'},
  { icon: twitterLogo, to: 'https://twitter.com/superclusterdev'},
  { icon: mastodonLogo, to: 'https://cryptodon.lol/@supercluster_labs'},
  { icon: linkedInLogo, to: 'https://www.linkedin.com/company/supercluster-labs/'},
]

export default function Footer() {
  return (
    <div>
      <section className="mt-20 container flex flex-col items-center text-center justify-center">
        <h4 className="text-2xl mb-4">Get in touch</h4>
        <p className="mb-8 text-slate-400">
          Find us at any of these channels
        </p>
        <div className="flex gap-8">
          {
            socialItems.map((item, i) => (
              <Link key={i} target="_blank" href={item.to}>
                <Image src={item.icon} alt="Discord Logo" />
              </Link>
            ))
          }
        </div>
      </section>
      <footer className="bg-slate-800 mt-20 py-4 text-center text-white">
        Copyright © 2023 Supercluster Labs. All Rights Reserved
      </footer>
    </div>
  )
}