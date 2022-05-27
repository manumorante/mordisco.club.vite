import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ApiContext from './context/ApiContext'
import App from './pages/Home'
import Photos from './pages/Photos'
import 'mm-masonry/css/mm-masonry.css'
import './css/index.css'

ReactDOM.render(
  <React.StrictMode>
    <ApiContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/photos/:albumParam/:photoParam' element={<Photos />} />
          <Route path='/photos/:albumParam' element={<Photos />} />
        </Routes>
      </BrowserRouter>
    </ApiContext>
  </React.StrictMode>,
  document.getElementById('root')
)
