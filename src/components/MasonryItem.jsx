import React from 'react'
import Photo from './Photo'
import Phrase from './Phrase'

export default function MasonryItem({ ...props }) {
  if (props.data.text) return <Phrase text={props.data.text} author={props.data.author} />
  return <Photo {...props} />
}
