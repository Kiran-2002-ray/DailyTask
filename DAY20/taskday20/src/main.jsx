import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from '../src/Component/task1.jsx'
import Page from '../src/Component/task2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page/>
    <hr />
    <App />
    <hr />
    <Greeting name="John" />
    <hr />
  </StrictMode>,
)
