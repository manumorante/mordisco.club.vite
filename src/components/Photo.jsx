import React from 'react'
import { Link } from 'react-router-dom'
import Img from './Img'

export default function Photo({ data: { id, albumID, small, width, height } }) {
  return (
    <Link className='Photo' to={`/photos/${albumID}/${id}`}>
      <Img className='Photo__img' src={small} width={width} height={height} />
    </Link>
  )
}
