import './Contact.css'
import { WHATSAPP_DISPLAY, WHATSAPP_URL, WhatsAppIcon } from '../WhatsApp/whatsapp'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-glow" />
          <p className="section-label">// vamos trabalhar juntos</p>
          <h2 className="contact-title">
            Tem um projeto em mente?
          </h2>
          <p className="contact-sub">
            Me conta o que você precisa. Analiso o problema, defino o que faz sentido
            construir e proponho o melhor caminho, sem empurrar tecnologia desnecessária.
          </p>

          <div className="contact-links">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link primary contact-link--wide"
            >
              <WhatsAppIcon className="contact-link-icon contact-link-svg" />
              <div>
                <p className="contact-link-label">WhatsApp</p>
                <p className="contact-link-value">{WHATSAPP_DISPLAY}</p>
              </div>
            </a>

            <a href="mailto:carlosdev2022@gmail.com" className="contact-link">
              <span className="contact-link-icon">✉</span>
              <div>
                <p className="contact-link-label">E-mail</p>
                <p className="contact-link-value">carlosdev2022@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/Carlos-iso"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">◈</span>
              <div>
                <p className="contact-link-label">GitHub</p>
                <p className="contact-link-value">github.com/Carlos-iso</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/carlosmanueldev"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">◻</span>
              <div>
                <p className="contact-link-label">LinkedIn</p>
                <p className="contact-link-value">carlosmanueldev</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/pognaveia"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">◉</span>
              <div>
                <p className="contact-link-label">Instagram</p>
                <p className="contact-link-value">@pognaveia</p>
              </div>
            </a>
          </div>

          <a href="mailto:carlosdev2022@gmail.com" className="btn-primary contact-cta">
            Enviar mensagem
          </a>
        </div>
      </div>
    </section>
  )
}
