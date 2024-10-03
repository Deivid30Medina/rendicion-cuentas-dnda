import React from 'react'
import Navbar from '../../common/navbar/Navbar'

const Header = () => {
  return (
    <>
      <header className='w-full flex items-center justify-center flex-col'>
        <div className='w-full bg-color-institucional min-h-11'>
        </div>
        <Navbar/>
      </header>
    </>
  )
}

export default Header
