import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import FrameworkListSearchFilter from './FrameworkListSearchFilter.jsx'
import ResponsiveDesign from './ResponsiveDesign.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsiveDesign />
    <FrameworkListSearchFilter />
  </StrictMode>,
)