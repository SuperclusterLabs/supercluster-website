const items = [
  { title: 'Teams get created', text1: 'Teams within a DAO create their own group with specific settings', text2: 'Invites are sent out via ENS / ETH address', text3: 'Access control dictated by NFT ownership' },
  { title: 'Files get shared', text1: 'All files shared are pinned to the IPFS network', text2: 'Users are notified of new uploaded files via XMTP', text3: 'New files are automatically pinned to IPFS by members' },
  { title: 'Get incentivized', text1: 'DAOs have full control over their incentive structures', text2: 'Generate reports on each team member&apos;s network activity', text3: 'DAOs decide how members are rewarded' },
]

export const HowTo = () => {
  return (
    <section className="md:container md:mx-auto mt-14 mb-9">
      <div className="text-center">
        <h4 className="text-2xl mb-2">How it works</h4>
        <p className="text-slate-400">
          Supercluster Files uses web3 native protocols under the hood{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 mt-8 leading-relaxed">
        {
          items.map((item, i) => (
            <div key={i} className="py-8 px-10 bg-gray-800 rounded-3xl h-full flex flex-col">
              <div className="heading-number flex justify-center align-center mx-auto">
                <h1 className="font-bold text-2xl text-emerald-500 leading-9">{i+1}</h1>
              </div>
              <h1 className="text-center font-bold text-2xl my-4">
                {item.title}
              </h1>
              <p className="mb-4">{item.text1}</p>
              <p className="mb-4">{item.text2}</p>
              <p>{item.text3}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}