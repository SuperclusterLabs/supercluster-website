import { useRouter } from "next/router"
import Link from "next/link";
import Image from "next/image";
import SuperClusterLogo from "../public/static/images/supercluster-logotype.svg";

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
]

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="flex justify-between container max-w-screen-xl  md:px-0">
      <Image
        src={SuperClusterLogo}
        alt="Supercluster Labs Logo"
        onClick={()=>router.push('/')}
      />
      <div className="flex justify-between align-center bg-white w-full rounded-full ml-8 py-4 pr-8">
        <div className="flex align-center">
          {
            navItems.map((item, i)=> (
              <button key={i}
                className={"text-black mx-6 font-bold"}
                onClick={()=> router.push(`/${item.to}`)}
              >{item.name}</button>
            ))
          }
        </div>
        <Link target="_blank" href="https://supercluster-labs.beehiiv.com/subscribe">
          <button
            className='hidden md:block px-5 py-3 font-bold rounded-full drop-shadow bg-black text-supercluster-primary'>
            Get early access
          </button>
        </Link>
      </div>
    </header>
  );
}
