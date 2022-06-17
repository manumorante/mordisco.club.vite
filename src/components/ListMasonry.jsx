import { Masonry } from 'masonic'
import React from 'react'
import MasonryItem from './MasonryItem'

export default function ListMasonry({ items }) {
  console.log(items)
  return (
    <div className='ListMasonry max-w-7xl mx-auto'>
      <Masonry
        items={items}
        columnGutter={24}
        columnWidth={410}
        overscanBy={5}
        render={MasonryItem}
      />
    </div>
  )
}
