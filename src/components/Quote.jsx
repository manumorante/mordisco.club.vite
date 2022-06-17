import React from 'react'

export default function Quote({ ...props }) {
  const text = props?.data?.text
  const author = props?.data?.author
  if (!text || !author) return null

  return (
    <div className='Quote p-16 flex flex-col gap-40 content-between transition-all bg-neutral-900/50 sm:hover:bg-neutral-900'>
      <div className=''>
        <p className='text-5xl text-white mb-4'>{text}</p>
        <p className='text-xl text-neutral-400'>{author}</p>
      </div>
      <div className='meta'>
        <p className='text-xl text-neutral-400'>
          <a href="#">Compartir</a>
        </p>
      </div>
    </div>
  )
}
