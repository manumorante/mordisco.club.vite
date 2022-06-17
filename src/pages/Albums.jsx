import React from 'react'
import { useApiContext } from '../js/ApiContext'
import AlbumCard from '../components/AlbumCard'

export default function Albums() {
  const { state } = useApiContext()
  const albums = state.albums.slice().reverse()

  return (
    <section className='Albums max-w-7xl mx-6 sm:mx-auto grid grid-cols-3 gap-8 opacity-0 animate-fade-in'>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}

      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className='bg-neutral-900 w-full h-72 min-h-full' />
      ))}
    </section>
  )
}
