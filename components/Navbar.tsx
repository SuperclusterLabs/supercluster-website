
import Link from "next/link";
import Image from "next/image";
import SuperClusterLogo from "../public/static/images/supercluster-logotype.svg";
import { IPage } from "../pages/_app";

export default function Navbar({ pages }: { pages: IPage[] }) {
  return (
    <header className="flex justify-between container max-w-screen-xl  md:px-0">
      <Link href='/' className="flex flex-column items-center">
        <Image
          src={SuperClusterLogo}
          alt="SuperCluster Labs Logo"
          className="cursor-pointer"
          width={331}
          height={40}
        />
      </Link>
      <div className="flex justify-between align-center bg-white w-full rounded-full ml-8 py-4 pr-8">
        <div className="flex align-center">
          {
            pages.map((item, i)=> (
              <Link key={i}
                className={`text-black mx-6 ${item.active ? 'font-bold' : ''} flex flex-colum items-center`}
                href={item.to}
              >{item.name}</Link>
            ))
          }
        </div>
        <Link target="_blank" href="https://supercluster-labs.beehiiv.com/subscribe">
          <button
            className='hidden md:block px-5 py-3 font-bold rounded-full drop-shadow bg-black hover:bg-slate-900 transition-all text-supercluster-primary'>
            Get early access
          </button>
        </Link>
      </div>
    </header>
  );
}
