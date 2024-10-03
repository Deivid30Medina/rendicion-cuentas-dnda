import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconMenuBurger from '../../../assets/icons/IconMenuBurger'
import IconDNDA from '../../../assets/icons/IconDNDA';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className='w-full bg-color-dnda min-h-40 flex flex-col items-center justify-between pt-3'>
        <IconDNDA width={90} height={90} className='cursor-pointer'></IconDNDA>
        <ul className='hidden xl:flex items-center justify-center gap-12'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'relative block text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-color-hover-navbar'
                  : 'relative block text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/informes'
              className={({ isActive }) =>
                isActive
                  ? 'relative block text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-color-hover-navbar'
                  : 'relative block text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'
              }
            >
              Informes
            </NavLink>
          </li>
          <li className='relative text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'>
            <a className='no-underline ' target='_blank' href="#">Inscripción</a>
          </li>
          <li className='relative text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'>
            <a target='_blank' href="#">Reglamento</a><a target='_blank' href="#">Reglamento</a>
          </li>
          <li className='relative text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'>
            <a target='_blank' href="#">Ver audiencia</a>
          </li>
        </ul>

        <div className='relative w-full xl:hidden flex items-center justify-end p-3 min-h-full'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IconMenuBurger width={35} height={35} fill='white' className='cursor-pointer'></IconMenuBurger>
        </div>


      </nav>
    </>
  )
}

export default Navbar
