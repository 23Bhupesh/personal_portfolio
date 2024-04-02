import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from '../src/components/Footer.jsx'
import ScrollButton from './components/ScrollButton.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer/>
    <ScrollButton />
  </React.StrictMode>,
)
