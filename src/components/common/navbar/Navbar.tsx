import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import IconMenuBurger from '../../../assets/icons/IconMenuBurger';
import IconDNDA from '../../../assets/icons/IconDNDA';
import IconDNDA2 from '../../../assets/icons/IconDNDA2';
import '../../../styles/MediaQuerys.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    const handleResize = () => {
      // Restablecer isMenuOpen a false si la pantalla es mayor o igual a xl
      if (window.innerWidth >= 1280) { // xl = 1280px
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-color-dnda flex items-center justify-between z-50 custom-max-h 
        ${isAtTop ? 'relative h-40 flex-col pt-3 transition-all duration-1000' : 'fixed top-0 left-0 flex-row min-h-16 transition-all duration-1000'}
      `}
    >
      {/* Mostrar IconDNDA solo cuando estamos en la parte superior */}
      <a href="https://www.derechodeautor.gov.co/es" target='_blank' className={`flex items-center justify-center ${isAtTop ? 'block' : 'hidden'}`}>
        <IconDNDA width={100} height={100} className={`cursor-pointer transition-opacity duration-300`} />
      </a>

      {/* Mostrar IconDNDA2 solo cuando no estamos en la parte superior (hemos hecho scroll) */}
      <a href="https://www.derechodeautor.gov.co/es" target='_blank' className={`cursor-pointer transition-opacity duration-300 ${isAtTop ? 'hidden' : 'flex items-center justify-center h-16 border-r-white'}`}>
        <IconDNDA2 className='block max-h-14 w-auto' />
      </a>

      {/* Icono del menú hamburguesa en pantallas pequeñas */}
      <div className='relative w-full xl:hidden flex items-center justify-end p-3 min-h-full' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <IconMenuBurger width={35} height={35} fill='red' className='cursor-pointer' />
      </div>

      {/* Menú principal que se muestra en pantallas grandes y pequeñas */}
      <ul className={`absolute w-full bg-color-dnda flex flex-col items-center justify-center z-50 transition-all duration-700 top-16 left-0 gap-12 ${isMenuOpen ? 'block' : 'hidden'} xl:flex xl:flex-row xl:static xl:top-0 xl:bg-transparent xl:w-auto`}>
        <li>
          <NavLink
            to='/'
            onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? 'relative block text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-color-hover-navbar'
                : 'relative block text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'
            }
          >
            Informes
          </NavLink>
        </li>
        <li onClick={() => setIsMenuOpen(false)} className='relative text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'>
          <a className='no-underline' target='_blank' href="#">Inscripción</a>
        </li>
        <li onClick={() => setIsMenuOpen(false)} className='relative text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'>
          <a target='_blank' href="#">Reglamento</a>
        </li>
        <li onClick={() => setIsMenuOpen(false)} className='relative text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'>
          <a target='_blank' href="#">Ver audiencia</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
