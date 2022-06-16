import React, { lazy, Suspense } from 'react'
import { isMobile } from '../js/utils'
const Simple = lazy(() => import('./ListSimple'))
const Masonry = lazy(() => import('./ListMasonry'))

export default function List({ photos }) {
  return (
    <Suspense fallback={null}>
      {isMobile ? <Simple photos={photos} /> : <Masonry photos={photos} />}
    </Suspense>
  )
}
