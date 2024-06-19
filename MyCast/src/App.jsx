import React from 'react'
import Sidebar from './components/Sidebar'
import AudioPlayer from './components/AudioPlayer'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
      </div>
      <AudioPlayer />
    </div>
  )
}

export default App
