import React, { useEffect, useContext, createContext, useReducer } from 'react'
import { isMobile } from '../js/utils'
import { reducer } from '../js/reducer'
import data from '/public/data/albums.json'

const initialState = {
  success: false,
  albums: [],
  album: {},
  photo: {},
  isMobile: isMobile,
}

const apiContext = createContext()

const ApiContext = ({ children }) => {
  const [state, acc] = useReducer(reducer, initialState)

  useEffect(() => {
    acc({ type: 'INIT', albums: data.albums })
  }, [])

  return <apiContext.Provider value={{ state, acc }}>{children}</apiContext.Provider>
}

export const useApiContext = () => useContext(apiContext)
export default ApiContext
