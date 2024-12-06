import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UncontroledComponent from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br />
    <UncontroledComponent/>

  </StrictMode>,
)
