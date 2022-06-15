import React, { useEffect } from 'react'
import { useApiContext } from '../../js/ApiContext'
import { isEmpty } from '../../js/utils'

export default function Phrase() {
  // Load phrases from Context
  const { state, acc } = useApiContext()
  console.log(state.phrase)

  // Check if there are any phrases
  if (isEmpty(state.phrases)) return null

  // If yes, randomly select one (and delete it from the list)
  useEffect(() => acc({ type: 'UPDATE_PHRASE' }), [])

  // Check if there is a phrase to display
  if (isEmpty(state.phrase)) return null

  return (
    <div className='Phrase mb-10'>
      <p className='text-2xl'>{state.phrase.text}</p>
      <p>{state.phrase.author}</p>
    </div>
  )
}
