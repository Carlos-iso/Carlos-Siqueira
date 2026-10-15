import './Footer.css'
import { WHATSAPP_DISPLAY, WHATSAPP_URL, WhatsAppIcon } from '../WhatsApp/whatsapp'
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon } from '../Icons/icons'

const services = [
  'Sites & Landing Pages',
  'Apps Mobile',
  'APIs & Backend',
  'Sistemas Completos',
]

const openSource = [
  { name: 'Versioner', href: 'https://github.com/Carlos-iso/versioner' },
  { name: 'Cliplay', href: 'https://github.com/Carlos-iso/cliplay' },
  { name: 'Versioner CLI', href: 'https://github.com/Carlos-iso/versioner-cli' },
]

const contacts = [
  { icon: <WhatsAppIcon className="footer-icon-svg" />, label: WHATSAPP_DISPLAY, href: WHATSAPP_URL },
  { icon: <MailIcon className="footer-icon-svg" />, label: 'carlosdev2022@gmail.com', href: 'mailto:carlosdev2022@gmail.com' },
  { icon: <GitHubIcon className="footer-icon-svg" />, label: 'GitHub', href: 'https://github.com/Carlos-iso' },
  { icon: <LinkedInIcon className="footer-icon-svg" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/carlosmanueldev' },
  { icon: <InstagramIcon className="footer-icon-svg" />, label: '@pognaveia', href: 'https://www.instagram.com/pognaveia' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo.svg" alt="CarlosCoding" className="footer-logo" />
            <p className="footer-about">
              Desenvolvimento de sites, apps e sistemas para empresas de todo o
              Brasil. Do levantamento de requisitos ao produto em produção.
            </p>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Serviços</p>
            <ul>
              {services.map(s => (
                <li key={s}>
                  <a href="/#services">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Open source</p>
            <ul>
              {openSource.map(p => (
                <li key={p.name}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Vamos conversar</p>
            <ul>
              {contacts.map(c => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="footer-contact"
                    {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="footer-contact-icon">{c.icon}</span>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Carlos Siqueira · CarlosCoding</p>
          <div className="footer-bottom-links">
            <a href="/privacidade" className="footer-top">Política de Privacidade</a>
            <a href="#top" className="footer-top">Voltar ao topo ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
