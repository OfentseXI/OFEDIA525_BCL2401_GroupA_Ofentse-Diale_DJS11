import React from 'react'
import Sidebar from './components/Sidebar'
import AudioPlayer from './components/AudioPlayer'
import Display from './components/Display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <AudioPlayer />
      <audio preload='auto'></audio>
    </div>
  )
}

export default App
