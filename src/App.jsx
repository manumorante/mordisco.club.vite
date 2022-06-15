import React, { lazy, Suspense } from 'react'
import Spinner from './components/Spinner.jsx'

const PAGES = {
  Home: lazy(() => import('./pages/Home')),
  Albums: lazy(() => import('./pages/Albums')),
  Album: lazy(() => import('./pages/Album')),
}

export default function App({ page = 'Home' }) {
  const Page = PAGES[page]
  if (!Page) return <div>Page `{page}` not found</div>

  return (
    <Suspense fallback={<Spinner />}>
      <Page />
    </Suspense>
  )
}
