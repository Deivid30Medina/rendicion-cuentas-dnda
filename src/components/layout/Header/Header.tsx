import Navbar from '../../common/navbar/Navbar'

const Header = () => {
  return (
    <>
      <header className='w-screen flex items-center justify-center flex-col'>
        <div className='w-full bg-color-institucional max-h-11 py-3 xl:px-20 px-8'>
          <a href="https://www.gov.co/" target='_blank' className='inline-block h-full w-auto'>
            <img src="icons/Iconpresidencia.png" alt="Logo Presidencia" className=' object-contain h-full w-auto' />
          </a>
        </div>
        <Navbar />
      </header>
    </>
  )
}

export default Header
