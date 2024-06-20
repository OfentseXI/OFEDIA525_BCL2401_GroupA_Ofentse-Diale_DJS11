import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Casts</h1>
        <div className='flex overflow-auto'>
            {albumsData.map((item,index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Todays Biggest Hits</h1>
        <div className='flex overflow-auto'>
            {}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
