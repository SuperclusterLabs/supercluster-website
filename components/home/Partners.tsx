import Image from "next/image";
import Link from "next/link";

import protocolLabsLogo from "../../public/static/images/protocollabs-white.svg";
import outlierLogo from "../../public/static/images/outlier-white.svg";
import ipfsLogo from "../../public/static/images/IPFS_logo.png";
import fileCoinLogo from "../../public/static/images/WhatisFilecoin.png";
import xmtpLogo from "../../public/static/images/xmtp-white.svg";
import bankLessLogo from "../../public/static/images/bankless-white.svg";

const items = [
  { img: protocolLabsLogo },
  { img: outlierLogo },
  { img: ipfsLogo },
  { img: fileCoinLogo },
  { img: xmtpLogo },
  { img: bankLessLogo },
]

export const Partners = () => {
  return (
    <section className="mt-20 container mb-96">
      <div className="text-center">
        <h4 className="text-2xl mb-4">Partners</h4>
        <p className="text-slate-400"> Backed by the best in web3 </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-20 mt-8">
        {items.map((item, i) => (
          <div key={i} className="flex justify-center align-center">
            <Image
              src={item.img}
              alt="Outlier Ventures logo"
              height={ i === 3 ? 80 : 60 } />
          </div>
        ))}
      </div>
    </section>
  )
}