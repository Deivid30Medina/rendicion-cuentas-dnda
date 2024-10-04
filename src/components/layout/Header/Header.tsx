import React from 'react'
import Navbar from '../../common/navbar/Navbar'

const Header = () => {
  return (
    <>
      <header className='w-full flex items-center justify-center flex-col'>
        <div className='w-full bg-color-institucional max-h-11 py-3 px-16'>
          <a href="https://www.gov.co/" target='_blank' className='inline-block h-full w-auto'>
            <img src="/icons/Iconpresidencia.png" alt="Logo Presidencia" className=' object-contain h-full w-auto' />
          </a>
        </div>
        <Navbar />
      </header>
    </>
  )
}

export default Header
