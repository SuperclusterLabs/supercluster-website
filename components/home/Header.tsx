import Link from "next/link";
import Button from "../Button";

export const Header = () => {
  return (
    <section className="container mx-auto">
      <div className="">
        <h1 className="w-9/12 text-4xl leading-loose md:text:6xl lg:text-7xl mb-12 mt-16">
          Decentralized file sharing is here.
        </h1>
        <p className="w-7/12 my-6 text-2xl leading-10 px:inherit">
          SuperCluster Files enables decentralized teams to share content
          between members - using web3 tools.
        </p>
        <p className="w-6/12 text-2xl font-bold text-white leading-10">
          Your{" "}
          <span className="text-supercluster-primary">
            decentralized organization
          </span>{" "}
          deserves{" "}
          <span className="text-supercluster-primary">
            decentralized tools.
          </span>
        </p>
      </div>
      <div className="mt-10">
        <Link
          target="_blank"
          href="https://supercluster-labs.beehiiv.com/subscribe"
        >
          <Button
            text="Sign up for early access"
            onClick={() => console.log("Hello")}
            primary />
        </Link>
        <Link target="_blank" href="https://discord.gg/T49E27Tdtu">
          <Button marginLeft text="Join our Discord" primary={false} />
        </Link>
      </div>
    </section>
  )
}