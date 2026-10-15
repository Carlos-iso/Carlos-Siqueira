import './ClientWork.css'

type Client = {
  name: string
  category: string
  desc: string
  img: string
  alt: string
  url?: string
}

const clients: Client[] = [
  {
    name: 'SocialPet',
    category: 'Pets · App mobile',
    desc: 'App de Mossoró/RN para cuidar de animais em situação de rua, ligar tutores a prestadores de serviço e levar doações de ração aos pontos de alimentação.',
    img: '/clients/socialpet.webp',
    alt: 'Mockup do app SocialPet em quatro iPhones',
  },
  {
    name: 'AdRoad',
    category: 'Mídia · App mobile',
    desc: 'App de mídia em movimento. Anunciantes cadastram anúncios e acompanham o saldo, e motoristas exibem os anúncios no carro pelo Modo Display.',
    img: '/clients/adroad.webp',
    alt: 'Mockup do app AdRoad em cinco iPhones',
  },
  {
    name: 'MommyBee',
    category: 'Maternidade · Marketplace',
    desc: 'Plataforma para mães com marketplace de itens de bebê, cupons exclusivos, enxoval e comunidade. Hoje é site responsivo, com app nos planos.',
    img: '/clients/mommybee.webp',
    alt: 'Mockup do MommyBee em cinco iPhones',
  },
  {
    name: 'Natan Films',
    category: 'Audiovisual · Site institucional',
    desc: 'Site para piloto de drone e videomaker. Portfólio por categoria, serviços do céu ao solo e formulário que já chega pronto para o orçamento.',
    img: '/clients/natanfilms.webp',
    alt: 'Mockup do site da Natan Films em um MacBook',
    url: 'https://natan-films.netlify.app',
  },
  {
    name: 'Tony Festa',
    category: 'Decoração · Site + painel',
    desc: 'Site para empresa de decoração de festas. Contratação pelo formulário, aluguel de itens pelo catálogo e painel para gerenciar produtos, galpões e pedidos.',
    img: '/clients/tonyfesta.webp',
    alt: 'Mockup do site da Tony Festa em um MacBook',
    url: 'https://tonydecor.netlify.app',
  },
]

function CardBody({ c }: { c: Client }) {
  return (
    <>
      <div className="client-img-wrap">
        <img src={c.img} alt={c.alt} className="client-img" loading="lazy" />
        {c.url && (
          <div className="client-overlay">
            <span className="visit-label">Ver projeto →</span>
          </div>
        )}
      </div>
      <div className="client-info">
        <p className="client-category">{c.category}</p>
        <h3 className="client-name">{c.name}</h3>
        <p className="client-desc">{c.desc}</p>
      </div>
    </>
  )
}

export default function ClientWork() {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <p className="section-label">// trabalhos para clientes</p>
        <h2 className="section-title">
          Projetos que já <span className="gradient-text">entreguei.</span>
        </h2>
        <p className="section-sub">
          Cada projeto começa entendendo o negócio, o público e o que precisa ser transmitido.
          O resultado é uma presença digital que funciona de verdade.
        </p>

        <div className="clients-grid">
          {clients.map((c) =>
            c.url ? (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="client-card"
              >
                <CardBody c={c} />
              </a>
            ) : (
              <div key={c.name} className="client-card">
                <CardBody c={c} />
              </div>
            )
          )}
        </div>

        <div className="more-coming">
          <div className="more-line" />
          <span>Mais projetos em breve</span>
          <div className="more-line" />
        </div>
      </div>
    </section>
  )
}
