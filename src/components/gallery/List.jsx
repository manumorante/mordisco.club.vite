import React, { lazy, Suspense } from 'react'
import { isMobile } from '../../js/utils'
const ListSimple = lazy(() => import('./ListSimple'))
const ListMasonry = lazy(() => import('./ListMasonry'))

export default function List({ photos, quotes }) {
  // const step = Math.floor(photos.length / quotes.length)
  const step = 10

  const items = []
  let count = 0
  photos.map((photo, i) => {
    if (i % step === 0) {
      const quote = quotes[count]

      const obj = {
        ...quote,
        id: 0,
        albumID: 1,
        big: '',
        width: 400,
        height: 300,
        small: '',
      }

      items.push(obj)
      count++
    }

    items.push(photo)
  })

  return (
    <Suspense fallback={null}>
      {isMobile ? <ListSimple photos={photos} /> : <ListMasonry items={items} />}
    </Suspense>
  )
}
