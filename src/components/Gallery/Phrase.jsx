import React, { useEffect } from 'react'
import { useApiContext } from '../../context/ApiContext'
import { cutRandom } from '../../js/utils'

export default function Phrase() {
  const yesOrNo = Math.random() >= 0.5
  if (yesOrNo) return null

  const { state } = useApiContext()
  if (state.phrases.length === 0) return null

  const phrase = cutRandom(state.phrases)

  return (
    <div className='Phrase mb-10'>
      <p className='text-2xl'>{phrase.text}</p>
      <p>{phrase.author}</p>
    </div>
  )
}
