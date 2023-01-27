import Image from "next/image";
import SuperclusterLogo from "../../public/supercluster-logotype.svg";
import Button from "./button";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Image
        src={SuperclusterLogo}
        alt="Supercluster Labs Logo"
      />
      <button
        className={`hidden md:block px-7 py-5 font-bold rounded-full drop-shadow bg-supercluster-primary text-black`}
        onClick={() => console.log("hello")}>
        Get early access
      </button>
    </header>
  );
}
