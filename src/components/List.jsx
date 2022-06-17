import React, { lazy, Suspense } from 'react'
import { isMobile } from '../js/utils'
const Simple = lazy(() => import('./ListSimple'))
const Masonry = lazy(() => import('./ListMasonry'))

export default function List({ photos, phrases }) {
  const step = Math.floor(photos.length / phrases.length)

  const items = []
  let count = 0
  photos.map((photo, i) => {
    if (i % step === 0) {
      items.push(phrases[count])
      count++
    }

    items.push(photo)
  })

  return (
    <Suspense fallback={null}>
      {isMobile ? <Simple photos={photos} /> : <Masonry items={items} />}
    </Suspense>
  )
}
