import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/index.css'
import App from './pages/Home'
import Photos from './pages/Photos'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/photos/:albumParam/:photoParam' element={<Photos />} />
        <Route path='/photos/:albumParam' element={<Photos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
