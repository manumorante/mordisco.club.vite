import React from 'react'
import { useApiContext } from '../js/ApiContext'
import AlbumCard from '../components/AlbumCard'

export default function Albums() {
  const { state } = useApiContext()
  const albums = state.albums.slice().reverse()

  return (
    <section className='Albums max-w-xl mx-6 sm:mx-auto flex flex-col gap-8'>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </section>
  )
}
