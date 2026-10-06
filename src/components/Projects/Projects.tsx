import './Projects.css'

const projects = [
  {
    name: 'Versioner',
    type: 'CLI · Release',
    desc: 'Troca o fluxo manual de release por um único comando. Atualiza a versão no package.json e no app.json, faz o commit e o push. Sem dependências externas, só Node.js e Git.',
    install: 'npx @kinetnode/versioner init',
    stack: ['Node.js', 'JavaScript', 'Git', 'CLI'],
    link: 'https://github.com/Carlos-iso/versioner',
  },
  {
    name: 'Cliplay',
    type: 'CLI · TUI',
    desc: 'CLI acoplável a qualquer projeto. Lê os scripts do package.json e os arquivos .sh e mostra tudo num menu interativo, com temas e navegação pelo teclado.',
    install: 'npx @kinetnode/cliplay',
    stack: ['TypeScript', 'Node.js', 'TUI'],
    link: 'https://github.com/Carlos-iso/cliplay',
  },
  {
    name: 'Versioner CLI',
    type: 'CLI · TUI · Release',
    desc: 'Interface no terminal para o Versioner. Os comandos de release ficam num menu navegável com os temas do Cliplay, e qualquer comando do Versioner também funciona direto pela linha de comando.',
    install: 'npm i -g @kinetnode/versioner @kinetnode/cliplay @kinetnode/versioner-cli',
    stack: ['Node.js', 'Versioner', 'Cliplay'],
    link: 'https://github.com/Carlos-iso/versioner-cli',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label">// projetos próprios</p>
        <h2 className="section-title">
          O que estou <span className="gradient-text">construindo.</span>
        </h2>
        <p className="section-sub">
          Ferramentas open source publicadas no npm. Qualquer pessoa pode
          instalar e testar agora mesmo.
        </p>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div key={p.name} className="project-card">
              <div className="project-number mono">0{i + 1}</div>
              <div className="project-content">
                <div className="project-header">
                  <div>
                    <h3 className="project-name">{p.name}</h3>
                    <p className="project-type">{p.type}</p>
                  </div>
                  <span className="project-status">Open source · npm</span>
                </div>
                <p className="project-desc">{p.desc}</p>
                <code className="project-install">
                  <span className="project-install-prompt">$</span> {p.install}
                </code>
                <div className="project-footer">
                  <div className="project-stack">
                    {p.stack.map(s => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver no GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
