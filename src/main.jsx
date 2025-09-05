import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Style } from './styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Style/>
    <App />
  </StrictMode>,
)
