import Link from "next/link"

const items = [
  { title: 'Supercluster is born', text: 'Supercluster Files was created as part of ETHGlobal’s HackFS ‘22. We won 2nd place for the IPFS sponsor, and things were underway! Take a look at our', redirect: 'demo video here.', time: '2022' },
  { title: 'Backed by Outlier Ventures', text: 'We were accepted into Outlier Venture’s Accelerator Program. Validated by one of the largest players in Web3, we’re continuing to build our MVP.', redirect: '', time: 'Q1 2023' },
  { title: 'Product launch', text: 'We’re planning to fully launch our product in early Q2. We’d love to get you on the list and get your feedback.', redirect: 'Sign up here!', time: 'Q2 2023' },
  { title: 'User incentive models', text: 'One of the core principles that we adhere to at Supercluster is to enable positive sum systems. Users that participate in the network will begin receiving rewards.', redirect: '', time: 'Q3 2023' },
  { title: 'Platform development', text: 'Our goal is to build an open source file sharing protocol, allowing any developer to build their own platform on top. Check out our', redirect: 'Github here.', time: 'Q4 2023' },
  { title: 'Ecosystem growth', text: 'The DAO ecosystem is our focus. We will continue to grow and enable organizations in the ecosystem.', redirect: '', time: '2024' },
]

export const RoadMap = () => {
  return (
    <section className="md:container md:mx-auto mt-14 mb-9">
      <div className="text-center">
        <h4 className="text-2xl mb-2">Roadmap</h4>
        <p className="text-slate-400">
          We’re just getting started, and there’s a lot more coming.
        </p>
      </div>

      <div className="mt-4">
        {
          items.map((item, i) => (
            <div key={i} className={`flex ${ i === 0 ? '' : 'roadMap-marginTop' }`}>
              { i % 2 === 0 ? '' : <div className={ i % 2 === 0 ? 'w-2/5': 'roadMap-w2'}></div> }
              <div className={ `flex items-center justify-between roadMap-w1 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}` }>
                <div className="w-80 border rounded-3xl border-emerald-900 p-4">
                  <div className="text-xl">{item.title}</div>
                  <div className="mt-2 text-slate-400 text-sm leading-relaxed"> 
                    {item.text}
                    <br></br>
                    <Link target="_blank" href="https://ethglobal.com/showcase/supercluster-t9x45">
                      <span className="underline underline-offset-4 text-supercluster-primary">{item.redirect}</span>
                    </Link>
                  </div>
                </div>
                <div className="border-b border-emerald-900 w-2/5"></div>
                <div className="w-28 bg-green-800 rounded-full text-center py-2 px-5 font-semibold text-sm">{item.time}</div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}