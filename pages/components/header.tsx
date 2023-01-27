import Image from "next/image";
import SuperclusterLogo from "../../public/supercluster-logotype.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Image
        src={SuperclusterLogo}
        alt="Supercluster Labs Logo"
      />
      <Link target="_blank" href="https://supercluster-labs.beehiiv.com/subscribe">
        <button
          className={`hidden md:block px-7 py-5 font-bold rounded-full drop-shadow bg-supercluster-primary text-black`}>
          Get early access
        </button>
      </Link>
    </header>
  );
}
