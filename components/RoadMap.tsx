import Link from 'next/link';

export default function RoadMap() {
  return (
    <ol className="relative border-l border-emerald-900">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-emerald-900 rounded-full mt-1.5 -left-1.5"></div>
        <time className="font-bold leading-none">Q4 2022</time>
        <h3 className="mt-2 text-2xl">SuperCluster is born</h3>
        <p className="mt-2 text-slate-400 leading-relaxed">SuperCluster Files was created as part of ETHGlobal’s HackFS ‘22. We won 2nd place for the IPFS sponsor, and things were underway! Take a look at our <Link target="_blank" href="https://ethglobal.com/showcase/supercluster-t9x45"><span className="underline underline-offset-4 text-supercluster-primary">demo video here</span></Link>.</p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-emerald-900 rounded-full mt-1.5 -left-1.5"></div>
        <time className="font-bold leading-none">Q1 2023</time>
        <h3 className="mt-2 text-2xl">Backed by Outlier Ventures</h3>
        <p className="mt-2 text-slate-400 leading-relaxed">We were accepted into Outlier Venture’s Accelerator Program. Validated by one of the largest players in Web3, we’re continuing to build our MVP.</p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-emerald-900 rounded-full mt-1.5 -left-1.5"></div>
        <time className="font-bold leading-none">Q2 2023</time>
        <h3 className="mt-2 text-2xl">Product launch</h3>
        <p className="mt-2 text-slate-400 leading-relaxed">We’re planning to fully launch our product in early Q2. We’d love to get you on the list and get your feedback. <Link target="_blank" href="https://supercluster-labs.beehiiv.com/subscribe"><span className="underline underline-offset-4 text-supercluster-primary"> Sign up here!</span></Link></p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-emerald-900 rounded-full mt-1.5 -left-1.5"></div>
        <time className="font-bold leading-none">Q3 2023</time>
        <h3 className="mt-2 text-2xl">User incentive models</h3>
        <p className="mt-2 text-slate-400 leading-relaxed">One of the core principles that we adhere to at Supercluster is to enable positive sum systems. Users that participate in the network will begin receiving rewards.</p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-emerald-900 rounded-full mt-1.5 -left-1.5"></div>
        <time className="font-bold leading-none">Q4 2023</time>
        <h3 className="mt-2 text-2xl">Platform development</h3>
        <p className="mt-2 text-slate-400 leading-relaxed">Our goal is to build an open source file sharing protocol, allowing any developer to build their own platform on top. <Link target="_blank" href="https://github.com/SuperclusterLabs"><span className="underline underline-offset-4 text-supercluster-primary">Check out our Github here.</span></Link></p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-emerald-900 rounded-full mt-1.5 -left-1.5"></div>
        <time className="font-bold leading-none">2024 and beyond</time>
        <h3 className="mt-2 text-2xl">Ecosystem growth</h3>
        <p className="mt-2 text-slate-400 leading-relaxed">The DAO ecosystem is our focus. We will continue to grow and enable organizations in the ecosystem.</p>
      </li>
    </ol >
  )
}
