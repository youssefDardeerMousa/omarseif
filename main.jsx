import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import './index.css'
import App from './App.jsx'

i18n.use(initReactI18next).init({
  resources: { ru: { translation: {} }, ar: { translation: {} } },
  lng: 'ru', fallbackLng: 'ru', interpolation: { escapeValue: false },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
