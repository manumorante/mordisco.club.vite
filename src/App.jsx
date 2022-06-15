import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page from './components/Page'
import Header from './components/Header'

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
