import { WHATSAPP_URL, WhatsAppIcon } from './whatsapp'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Conversar no WhatsApp"
      title="Conversar no WhatsApp"
    >
      <WhatsAppIcon className="wa-float-icon" />
    </a>
  )
}
