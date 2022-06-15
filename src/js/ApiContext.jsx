import React, { useEffect, useContext, createContext, useReducer } from 'react'
import { isMobile } from '../js/utils'
import { reducer } from '../js/reducer'
import albums from '/public/data/albums.json'
import phrases from '/public/data/phrases.json'

const initialState = {
  // App
  success: false,
  isMobile: isMobile,

  // Photos
  albums: albums.albums,
  album: {},
  photo: {},
  column: 288,

  // Phrases
  phrases: phrases.phrases,
  phrase: {}, // { text:, author: }
}

const apiContext = createContext()

const ApiContext = ({ children }) => {
  const [state, acc] = useReducer(reducer, initialState)

  useEffect(() => acc({ type: 'INIT' }), [])

  return <apiContext.Provider value={{ state, acc }}>{children}</apiContext.Provider>
}

export const useApiContext = () => useContext(apiContext)
export default ApiContext
