import React, { useEffect, useContext, createContext, useReducer } from 'react'
import { data } from '/data.js'
import { initialState, reducer } from '../js/reducer'

const apiContext = createContext()

const ApiContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({
      type: 'INIT',
      data: data,
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
