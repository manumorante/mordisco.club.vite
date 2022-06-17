import React, { useContext, createContext, useState } from 'react'
import { isMobile } from './utils'
import albums from '/public/data/albums.json'
import quotes from '/public/data/quotes.json'

const apiContext = createContext()

const ApiContext = ({ children }) => {
  if (albums.length === 0) {
    console.log('🟥 No albums found')
    return false
  }

  const [state] = useState(() => {
    return {
      success: true,
      isMobile: isMobile,
      albums: albums.albums,
      quotes: quotes.quotes,
    }
  })

  return <apiContext.Provider value={{ state }}>{children}</apiContext.Provider>
}

export const useApiContext = () => useContext(apiContext)
export default ApiContext
