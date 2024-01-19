import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage'
// import Shop from './components/Shop'
// import Cart from './components/Cart'
import './css/normalize.css'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
