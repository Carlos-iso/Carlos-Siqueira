import './Services.css'

const services = [
  {
    icon: '◻',
    title: 'Sites & Landing Pages',
    desc: 'Presença online que converte. Design focado no negócio do cliente, rápido e adaptado para mobile.',
    tags: ['React', 'Next.js', 'SEO'],
  },
  {
    icon: '◈',
    title: 'Apps Mobile',
    desc: 'Aplicativos iOS e Android com React Native. Do wireframe ao deploy na loja, acompanho todo o processo.',
    tags: ['React Native', 'Expo', 'APIs'],
  },
  {
    icon: '⬡',
    title: 'APIs & Backend',
    desc: 'APIs robustas, autenticação, pagamentos, integrações. Arquitetura que aguenta crescer.',
    tags: ['Node.js', 'NestJS', 'PostgreSQL'],
  },
  {
    icon: '◉',
    title: 'Sistemas Completos',
    desc: 'Plataformas com dashboard, gestão de usuários, relatórios e automações. Uma solução completa, do início ao fim.',
    tags: ['Full Stack', 'SaaS', 'Automação'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <p className="section-label">// o que eu faço</p>
        <h2 className="section-title">
          Da ideia ao produto <span className="gradient-text">funcionando.</span>
        </h2>
        <p className="section-sub">
          Analiso o que seu negócio precisa antes de escrever uma linha de código.
          Cada projeto tem seu processo: entender o problema, definir a solução certa e entregar.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <span className="service-icon gradient-text">{s.icon}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
