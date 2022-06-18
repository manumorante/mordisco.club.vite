import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/app/Header'
import Page from './components/app/Page'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Page page='Home' />} />
        <Route path='/photos/:albumID/:photoID' element={<Page page='Album' />} />
        <Route path='/photos/:albumID' element={<Page page='Album' />} />
        <Route path='/photos' element={<Page page='Albums' />} />
      </Routes>
    </BrowserRouter>
  )
}
