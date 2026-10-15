import './About.css'

const points = [
  { icon: '◎', text: 'Você acompanha cada etapa do projeto.' },
  { icon: '◇', text: 'Fala direto comigo, sem intermediários.' },
  { icon: '↯', text: 'Suporte depois da entrega.' },
]

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-card">
          <div className="about-photo-wrap">
            <img
              src="/carlos2.webp"
              alt="Carlos Siqueira"
              className="about-photo"
              width={464}
              height={594}
              loading="lazy"
            />
          </div>

          <div className="about-text">
            <h2 className="about-title">
              Do primeiro contato
              <br />
              <span className="gradient-text">ao sistema no ar.</span>
            </h2>
            <p className="about-desc">
              Sou Carlos Siqueira, desenvolvedor full stack. Atendo empresas e
              empreendedores de todo o Brasil e cuido de cada etapa, do
              planejamento ao produto rodando.
            </p>
            <p className="about-sign">Carlos Siqueira</p>
          </div>

          <ul className="about-points">
            {points.map((p) => (
              <li key={p.text}>
                <span className="about-icon">{p.icon}</span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
