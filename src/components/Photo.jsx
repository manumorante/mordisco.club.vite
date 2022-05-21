import React, { useEffect, useState } from 'react'
import Loading from './Loading'

export default function Photo({ path, photo, dispatch }) {
  const [loading, setLoading] = useState()
  const [whenLoadedClasses, setWhenLoadedClasses] = useState('')

  useEffect(() => {
    if (!photo || photo.file === '') return

    setLoading(true)
  }, [photo.file])

  const handleOnLoad = () => {
    setLoading(false)
    setWhenLoadedClasses(
      'cursor-pointer md:hover:outline md:hover:outline-1 md:hover:outline-pink-500 transition-all'
    )
  }

  const handleClick = () => {
    if (loading) return
    dispatch({ type: 'SET_PHOTO', photoIndex: photo.index })
  }

  return (
    <div className='Photo relative z-10 w-full h-full'>
      {loading && <Loading />}
      <img
        className={`rounded-sm w-full h-full object-cover ${whenLoadedClasses}`}
        src={`${path}/${photo.file}`}
        onLoad={handleOnLoad}
        onClick={handleClick}
      />
    </div>
  )
}