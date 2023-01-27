import Image from "next/image";
import superclusterLogotype from "../../public/supercluster-logotype.svg";

export default function Header() {
  return (
    <header className="flex py-5">
      <section className="container">
        <Image src={superclusterLogotype} alt="Supercluster Logo" height={40} />
      </section>
    </header>
  );
}
