import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Enable when deploying
  // <StrictMode> // remove these comments on this tage when deploying
    <App />
  // </StrictMode>,
)
