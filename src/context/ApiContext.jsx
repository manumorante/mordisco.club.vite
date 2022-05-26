import React, { useEffect, useContext, createContext, useReducer } from 'react'
import { initialState, reducer } from '../js/reducer'
import { randomizeArray } from '../js/utils'

import data from '/public/data/albums.json'

const newAlbums = [...data.albums]
newAlbums[0].photos = randomizeArray(data.albums[0].photos)

const apiContext = createContext()

const ApiContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({
      type: 'INIT',
      albums: newAlbums,
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
