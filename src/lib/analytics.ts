const GA_ID = import.meta.env.VITE_GA_ID

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params?: Record<string, string>) {
  window.gtag?.('event', name, params)
}

function linkLocation(el: Element) {
  if (el.closest('.wa-float')) return 'botao_flutuante'
  if (el.closest('footer')) return 'rodape'
  return el.closest('section')?.id || 'pagina'
}

// WhatsApp e e-mail viram eventos de lead; links externos já são medidos pela coleta aprimorada do GA4.
function trackContactClicks(e: MouseEvent) {
  const a = (e.target as Element).closest('a')
  if (!a) return
  const href = a.getAttribute('href') ?? ''
  if (href.startsWith('https://wa.me/')) {
    trackEvent('generate_lead', { method: 'whatsapp', link_location: linkLocation(a) })
  } else if (href.startsWith('mailto:')) {
    trackEvent('generate_lead', { method: 'email', link_location: linkLocation(a) })
  }
}

export function initAnalytics() {
  if (!GA_ID || import.meta.env.DEV) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js exige o objeto `arguments`, não um array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // Só medição de audiência: sem Google Signals, sem anúncios e cookie curto (ver /privacidade).
  window.gtag('config', GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: 60 * 24 * 60 * 60,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  document.addEventListener('click', trackContactClicks)
}
