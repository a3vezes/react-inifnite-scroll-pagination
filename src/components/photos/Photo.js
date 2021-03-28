import React from 'react'

const Photo = ({ photo }) => {
  const { albumId, title, thumbnailUrl, id } = photo
  return (
    <div className='card'>
      <img src={thumbnailUrl} alt='thumbnailUrl' />
      <span className='badge badge-light'>{albumId}</span>
      <span className='badge badge-light'>{id}</span>
      <h3>{title}</h3>
    </div>
  )
}

export default Photo
