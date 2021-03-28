import React from 'react'
import Photo from './Photo'

const Photos = ({ photos }) => {
  return (
    <div className='grid-4'>
      {photos.map(photo => (
        <Photo photo={photo} key={photo.id} />
      ))}
    </div>
  )
}

export default Photos
