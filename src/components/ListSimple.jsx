import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Photo from './Photo'
import Img from './Img'

export default function ListSimple({ photos }) {
  const stepClass = (i) => {
    const grid = [
      ' 1 col-span-4 row-span-3',
      ' 2 col-span-2 row-span-3',
      ' 3 col-span-6 row-span-4',
      ' 4 col-span-3 row-span-3',
      ' 5 col-span-3 row-span-3',
      ' 6 col-span-6 row-span-6',
      ' 7 col-span-2 row-span-2',
      ' 8 col-span-2 row-span-2',
      ' 9 col-span-2 row-span-2',
      '10 col-span-2 row-span-2',
      '11 col-span-2 row-span-2',
      '12 col-span-2 row-span-2',
      '13 col-span-6 row-span-4',
      '14 col-span-2 row-span-2',
      '15 col-span-4 row-span-4',
      '16 col-span-2 row-span-2',
      '17 col-span-4 row-span-4',
      '18 col-span-2 row-span-2',
      '20 col-span-2 row-span-2',
      '21 col-span-6 row-span-4',
    ]

    return grid[i % grid.length]
  }

  return (
    <div className='ListSimple mx-3 grid grid-cols-6 gap-2' style={{ gridAutoRows: '15vw' }}>
      {photos.map((photo, i) => {
        const className = classNames(stepClass(i), 'relative')

        return (
          <Link key={photo.id} className={className} to={`/photos/${photo.albumID}/${photo.id}`}>
            <Img
              className='w-full h-full object-cover'
              src={photo.small}
              width={photo.width}
              height={photo.height}
            />
          </Link>
        )
      })}
    </div>
  )
}
