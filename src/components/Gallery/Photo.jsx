import React, { useState, useRef } from 'react'
import { useIntersection } from '../../js/useIntersection'
import { useApiContext } from '../../context/ApiContext'
import Spinner from './Spinner'

export default function Photo({ data: { id, albumID, small, width, height } }) {
  const { state, acc } = useApiContext()
  const [src, setSrc] = useState()
  const [loading, setLoading] = useState(true)
  const imgRef = useRef()

  // Calculate photo height based on original photo width and column width setting
  const arHeight = (state.column * height) / width
  const style = {
    height: `${arHeight}px`,
  }

  // Control when photo is visible
  useIntersection(imgRef, () => {
    // setIsInView(true)
    setSrc(small)
  })

  const _onClick = () => {
    acc({ type: 'SET', albumID, photoID: id })
  }

  // Hide Spinner just when img is completlely loaded
  const _onLoad = () => {
    setLoading(false)
  }

  return (
    <div ref={imgRef} className='Photo' style={style}>
      <img
        width={width}
        height={height}
        className='Photo__img'
        style={{
          opacity: loading ? 0 : 1,
        }}
        src={src}
        onLoad={_onLoad}
        onClick={_onClick}
      />
      <Spinner showif={loading} />
    </div>
  )
}
