import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Privacy from './components/Privacy/Privacy'
import Cursor from './components/Cursor/Cursor'
import WhatsAppButton from './components/WhatsApp/WhatsAppButton'
import { initAnalytics } from './lib/analytics'

initAnalytics()

const isPrivacy = window.location.pathname.replace(/\/+$/, '') === '/privacidade'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPrivacy ? (
      <>
        <Cursor />
        <Privacy />
        <WhatsAppButton />
      </>
    ) : (
      <App />
    )}
  </StrictMode>,
)
