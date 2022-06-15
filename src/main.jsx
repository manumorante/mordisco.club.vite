import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApiContext from './context/ApiContext'
import App from './App'
import Header from './components/Header'
import Spinner from './components/Spinner'
const Starfall = lazy(() => import('./components/Starfall'))
import './css/index.css'

ReactDOM.render(
  <React.StrictMode>
    <ApiContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<App page='Home' />} />
          <Route path='/photos/:albumID/:photoID' element={<App page='Album' />} />
          <Route path='/photos/:albumID' element={<App page='Album' />} />
          <Route path='/photos' element={<App page='Albums' />} />
        </Routes>
        <Suspense fallback={<Spinner />}>
          <Starfall />
        </Suspense>
      </BrowserRouter>
    </ApiContext>
  </React.StrictMode>,
  document.getElementById('root')
)
