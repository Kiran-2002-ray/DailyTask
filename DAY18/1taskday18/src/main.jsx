import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './task2.jsx'
import TextInputWithFocusButton from './task3.jsx'
import ExampleUseMemo from './task5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />

    <App2 />

    <TextInputWithFocusButton/>

    <ExampleUseMemo/>

  </StrictMode>,
)
