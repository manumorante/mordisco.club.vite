import React, { useEffect, useContext, createContext, useReducer } from 'react'
import { initialState, reducer } from '../js/reducer'

import data from '/data/albums.json'

const apiContext = createContext()

const ApiContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({
      type: 'INIT',
      albums: data.albums,
    })
  }, [])

  return (
    <apiContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </apiContext.Provider>
  )
}

export const useApiContext = () => useContext(apiContext)
export default ApiContext
