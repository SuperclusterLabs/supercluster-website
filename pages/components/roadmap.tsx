import Link from 'next/link';

export default function Roadmap() {
  return (
    <ol className="relative border-l border-emerald-900">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-emerald-900 rounded-full mt-1.5 -left-1.5"></div>
        <time className="font-bold leading-none">Q4 2022</time>
        <h3 className="mt-2 text-2xl">Supercluster is born</h3>
        <p className="mt-2 text-slate-400 leading-relaxed">Supercluster Files was created as part of ETHGlobal’s HackFS ‘22. We won 2nd place for the IPFS sponsor, and things were underway! Take a look at our demo video here.</p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-emerald-900 rounded-full mt-1.5 -left-1.5"></div>
        <time className="font-bold leading-none">Q4 2022</time>
        <h3 className="mt-2 text-2xl">Supercluster is born</h3>
        <p className="mt-2 text-slate-400 leading-relaxed">Supercluster Files was created as part of ETHGlobal’s HackFS ‘22. We won 2nd place for the IPFS sponsor, and things were underway! Take a look at our demo video here.</p>
      </li>
    </ol>
  )
}
