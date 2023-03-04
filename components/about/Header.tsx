import Link from "next/link";
import Button from "../Button";

export const Header = () => {
  return (
    <section className="container mx-auto">
      <div>
        <h1 className="w-8/12 text-4xl leading-loose md:text:6xl lg:text-7xl mb-12 mt-16">
          About Supercluster Labs.
        </h1>
        <p className="w-6/12 text-2xl text-white leading-10 px:inherit">
          At Supercluster Labs, our mission is to enable DAOs to operate in a{" "}
          <span className="text-supercluster-primary">
            maximally decentralized fashion
          </span>
        </p>
      </div>
      <div className="mt-28">
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
    </section>
  )
}