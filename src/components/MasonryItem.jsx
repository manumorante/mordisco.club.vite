import React from 'react'
import Photo from './Photo'
import Quote from './Quote'

const itemTypes = {
  photo: Photo,
  quote: Quote,
}

export default function MasonryItem({ ...props }) {
  const type = props.data?.type
  const types = Object.keys(itemTypes)
  if (!types.includes(type)) return null

  const Item = itemTypes[type]
  return <Item {...props} />
}
