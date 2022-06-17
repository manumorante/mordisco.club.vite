import React from 'react'

export default function Phrase({ text, author }) {
  return (
    <div className='Phrase py-32 px-20 transition-all bg-black sm:hover:bg-neutral-900/50'>
      <p className='text-5xl mb-4'>{text}</p>
      <p className='text-xl'>{author}</p>
    </div>
  )
}
