
import Image from "next/image";
import kaiProfile from "../../public/static/images/kai-profile.jpg";
import govProfile from "../../public/static/images/gov-profile.jpg";

const items = [
  { img: kaiProfile, name: 'Kai Huang', role: 'CEO & Cofounder', description: 'Kai previously worked as a product lead at MetaMask, the leading web3 wallet in the ecosystem today. Since 2020, Kai has participated as a core contributor in various DAOs, including BanklessDAO and RadicleDAO. Prior to web3, he was leading the payments strategy at REI, Inc.' },
  { img: govProfile, name: 'Govind Mohan', role: 'CTO & Cofounder', description: 'Govind is a blockchain developer and researcher who has been in the space since 2014. He has been involved with several start-ups, notably starting Virgil Systems in 2018 where he was developing P2P data storage systems for governments with a strong focus on data integrity and availability. Since 2022, he has done work for various DAOs and open source communities.' },
]

export const Team = () => {
  return (
    <section className="md:container md:mx-auto mt-14 mb-9">
      <div className="text-center">
        <h4 className="text-2xl mb-2">Core Team</h4>
        <p className="text-slate-400">
          Say hello to our core team members
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {
          items.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div>
                <Image
                  src={item.img}
                  alt="Kai Huang profile"
                  height={200}
                  style={{ borderRadius: 24 }}
                />
              </div>
              <div className="flex flex-col gap-2 w-full text-left">
                <div className="text-2xl">{item.name}</div>
                <div className="text-base text-slate-400">{item.role}</div>
                <div className="text-sm">{item.description}</div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}