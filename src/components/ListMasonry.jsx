import { Masonry } from 'masonic'
import React from 'react'
import Photo from './Photo'

export default function ListMasonry({ photos }) {
  return (
    <div className='ListMasonry max-w-7xl mx-auto'>
      <Masonry items={photos} columnGutter={24} columnWidth={410} overscanBy={5} render={Photo} />
    </div>
  )
}
