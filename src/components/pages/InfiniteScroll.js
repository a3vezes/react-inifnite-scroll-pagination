import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Photos from '../photos/Photos'

const InfiniteScroll = () => {
  const [photos, setPhotos] = useState([])
  const [photosToShow, setPhotosToShow] = useState([])
  const [albumId, setAlbumId] = useState(1)
  const [qtd, setQtd] = useState(5)
  const [loading, setLoading] = useState(false)
  const loader = useRef(null)

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    }
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options)
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, [])

  useEffect(() => {
    setPhotosToShow(photos.slice(0, qtd))
  }, [qtd])

  const fetchPhotos = async (albumId, qtd) => {
    setLoading(true)
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/?albumId=${albumId}`
    )
    setPhotos(res.data)
    setPhotosToShow(photos.slice(0, qtd))
    setLoading(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetchPhotos(albumId, qtd)
  }

  const handleObserver = entities => {
    const target = entities[0]
    if (target.isIntersecting) {
      setQtd(qtd => qtd + qtd)
    }
  }

  return (
    <>
      <p className='large'>Filters</p>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='albumId' className='lead'>
          Album Id
        </label>
        <input
          type='number'
          min='0'
          step='1'
          name='albumId'
          placeholder='Album Id'
          value={albumId}
          onChange={e => {
            setAlbumId(e.target.value)
          }}
        />
        <label htmlFor='quantity' className='lead'>
          Quantity
        </label>
        <input
          type='number'
          min='5'
          step='5'
          name='qtd'
          placeholder='qtd'
          value={qtd}
          onChange={e => {
            setQtd(e.target.value)
          }}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {loading ? 'Loading...' : <Photos photos={photosToShow} />}
      <div className='loading' ref={loader}>
        <h2>Load More</h2>
      </div>
    </>
  )
}

export default InfiniteScroll
