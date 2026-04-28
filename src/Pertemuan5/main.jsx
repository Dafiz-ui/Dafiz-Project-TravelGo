import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css' // Import Tailwind CSS with custom fonts
import Sidebar from './layouts/Sidebar.jsx'
import Header from './layouts/Header.jsx'
import Dashboard from './pages/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />
          <Dashboard />
        </div>
      </div>
    </div>
  </StrictMode>,
)