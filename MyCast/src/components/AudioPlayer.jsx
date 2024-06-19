import React from 'react'
import {songsData} from '../assets/assets' 

const AudioPlayer = () => {
  return (
    <div className='h-[10%] bg-black flex justify-betweenn items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={songsData[0].image} alt="" />
        <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gapp-4'>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
