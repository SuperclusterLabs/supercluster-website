
const items = [
  { title: '🌐 Built on IPFS', text: 'All content is pinned and served by the IPFS network, ensuring maximum decentralization.',},
  { title: '🔒 Custom access control', text: 'Create custom access controls for your team members using NFTs, DAO tokens, or just a list of addresses.',},
  { title: '🔑 Use your web3 identity', text: 'Login with your web3 wallet. Share files directly using your team member’s addresses.',},
  { title: '✉️ Real-time updates', text: 'All your team members receive real-time updates as soon as new content is shared.',},
  { title: '💻 Local-first', text: '     All of your data is stored and shared directly from your local machine. Nothing is stored in the cloud, protecting your privacy.',},
  { title: '⛔ Censorship resistant', text: 'Your data is yours. You’re protected from having any data or content deleted at the platform level.',},
]

export const Features = () => {
  return (
    <section className="container grid lg:grid-cols-3 gap-8 mt-16">
      {
        items.map((item, i) => (
          <div key={i} className="group border rounded-3xl border-solid border-gray-500 p-6 hover:bg-white cursor-pointer transition-all">
            <h3 className="text-2xl group-hover:text-black group-hover:font-bold">{item.title}</h3>
            <p className="text-slate-400 mt-4">
              {item.text}
            </p>
          </div>
        ))
      }
    </section>
  )
}