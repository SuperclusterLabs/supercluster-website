import Image from "next/image";
import superclusterLogotype from "../../public/supercluster-logotype.svg";

export default function Header() {
  return (
    <header className="flex justify-center py-5">
      <Image src={superclusterLogotype} alt="Supercluster Logo" height={24} />
    </header>
  );
}
