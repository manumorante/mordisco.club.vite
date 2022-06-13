import React, { useEffect, useContext, createContext, useReducer } from 'react'
import { isMobile } from '../js/utils'
import { reducer } from '../js/reducer'
import albums from '/public/data/albums.json'
import phrases from '/public/data/phrases.json'

const initialState = {
  success: false,
  albums: [],
  album: {},
  photo: {},
  phrases: phrases.phrases,
  isMobile: isMobile,
}

const apiContext = createContext()

const ApiContext = ({ children }) => {
  const [state, acc] = useReducer(reducer, initialState)

  useEffect(() => {
    acc({ type: 'INIT', albums: albums.albums })
  }, [])

  return <apiContext.Provider value={{ state, acc }}>{children}</apiContext.Provider>
}

export const useApiContext = () => useContext(apiContext)
export default ApiContext
