import React, { useState } from 'react'
import Loading from './Loading'

export default function BigPhoto({ path, photo, index, dispatch, style }) {
  const [loading, setLoading] = useState(true)

  const handleClick = () => {
    if (loading) return
    dispatch({ type: 'SET_PHOTO', photoIndex: index })
  }

  return (
    <div className={`BigPhoto`} style={style}>
      {loading && (
        <>
          <Loading />
          <img className='photo' src={`${path}/s/${photo.file}`} />
        </>
      )}
      <img
        className='photo'
        src={`${path}/${photo.file}`}
        onLoad={() => setLoading(false)}
        onClick={handleClick}
      />
    </div>
  )
}
