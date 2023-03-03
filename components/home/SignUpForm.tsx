import Link from "next/link";

import Button from "../Button";

export const SignUpForm = () => {
  return (
    <div className="flex align-center w-6/12 mx-auto mt-96">
      <div className="mt-4 mr-4 w-6/12">
        <div className="text-amber-300 font-semibold">Enter email address</div>
        <input className="w-full bg-transparent border-b-2 border-t-0 border-y-amber-400 border-x-0 p-0 focus:border-x-transparent focus:border-t-transparent focus:border-y-amber-400 focus:ring-0 focus:outline-0" type="text" />
      </div>
      <div className="">
        <Link
          target="_blank"
          href="https://supercluster-labs.beehiiv.com/subscribe"
        >
          <Button
            text="Sign up for early access"
            onClick={() => console.log("Hello")}
            primary />
        </Link>
      </div>
    </div>
  )
}