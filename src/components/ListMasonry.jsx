import { Masonry } from 'masonic'
import React from 'react'
import Photo from './Photo'

export default function ListMasonry({ photos }) {
  return (
    <div className='ListMasonry mx-6'>
      <Masonry items={photos} columnGutter={24} columnWidth={288} overscanBy={5} render={Photo} />
    </div>
  )
}
