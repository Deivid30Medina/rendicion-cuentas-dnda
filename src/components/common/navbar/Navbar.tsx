import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import IconMenuBurger from '../../../assets/icons/IconMenuBurger';
import IconDNDA from '../../../assets/icons/IconDNDA';
import IconDNDA2 from '../../../assets/icons/IconDNDA2';
import NavItem from './NavItem'; // Importar NavItem
import ExternalNavItem from './ExternalNavItem'; // Importar ExternalNavItem
import '../../../styles/MediaQuerys.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
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
        ${isAtTop ? 'relative h-40 flex-col pt-3 transition-all duration-1000' : 'fixed top-0 left-0 flex-row min-h-16 transition-all duration-1000'}`}
    >
      <a href="https://www.derechodeautor.gov.co/es" target='_blank' className={`flex items-center justify-center ${isAtTop ? 'block' : 'hidden'}`}>
        <IconDNDA width={100} height={100} className={`cursor-pointer transition-opacity duration-300`} />
      </a>

      <a href="https://www.derechodeautor.gov.co/es" target='_blank' className={`cursor-pointer transition-opacity duration-300 ${isAtTop ? 'hidden' : 'flex items-center justify-center h-16 border-r-white'}`}>
        <IconDNDA2 className='block max-h-14 w-auto' />
      </a>

      <div className='relative w-full xl:hidden flex items-center justify-end p-3 min-h-full' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <IconMenuBurger width={35} height={35} fill='red' className='cursor-pointer' />
      </div>

      <ul className={`absolute w-full bg-color-dnda flex flex-col items-center justify-center z-50 top-16 left-0 transition-all duration-700 ease-in-out overflow-hidden gap-12 ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} xl:flex xl:flex-row xl:static xl:top-0 xl:bg-transparent xl:w-auto xl:max-h-none xl:opacity-100`}>
        <NavItem to='/' onClick={() => setIsMenuOpen(false)}>Inicio</NavItem>
        <NavItem to='/informes' onClick={() => setIsMenuOpen(false)}>Informes</NavItem>
        <ExternalNavItem href="#" onClick={() => setIsMenuOpen(false)}>Inscripción</ExternalNavItem>
        <ExternalNavItem href="#" onClick={() => setIsMenuOpen(false)}>Reglamento</ExternalNavItem>
        <ExternalNavItem href="#" onClick={() => setIsMenuOpen(false)}>Ver audiencia</ExternalNavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
