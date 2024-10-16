import { useState, useEffect } from 'react';
import IconMenuBurger from '../../../assets/icons/IconMenuBurger';
import IconDNDA from '../../../assets/icons/IconDNDA';
import NavItem from './NavItem';
import ExternalNavItem from './ExternalNavItem';
import '../../../styles/MediaQuerys.css';
import IconMinInterior from '../../../assets/icons/IconMinInterior';

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
      className={`w-full bg-color-dnda flex items-center justify-between z-50 custom-max-h transition-all duration-1000 ease-in-out
    ${isAtTop ? 'max-h-40 flex-col pt-3' : 'fixed top-0 left-0 flex-row max-h-16 px-8'}`}
    >

      <a href="https://www.derechodeautor.gov.co/es" target='_blank' className={`flex items-center justify-center ${isAtTop ? 'block' : 'hidden'}`}>
        <IconDNDA className={`cursor-pointer transition-opacity duration-300 h-auto w-32 xl:w-48`} />
      </a>

      <a href="https://www.derechodeautor.gov.co/es" target='_blank' className={`cursor-pointer pr-3 border-r-2 border-r-white transition-opacity duration-300 h-16 ${isAtTop ? 'hidden' : 'flex items-center justify-center'}`}>
        <IconMinInterior className='block max-h-9 w-aut' />
      </a>

      <div className='relative w-full xl:hidden flex items-center justify-end p-3 min-h-full' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <IconMenuBurger width={35} height={35} fill='red' className='cursor-pointer' />
      </div>

      <ul className={`absolute w-full bg-color-dnda flex flex-col items-center justify-center z-50 top-16 left-0 transition-all duration-700 ease-in-out overflow-hidden gap-12 ${isMenuOpen ? (isAtTop ? 'max-h-[550px] mt-10 opacity-100' : 'mt-0 opacity-100') : 'max-h-0 opacity-0'} xl:flex xl:flex-row xl:static xl:top-0 xl:bg-transparent xl:w-auto xl:max-h-none xl:opacity-100`}>
        <NavItem to='/Rendicion-Cuentas/2024/' onClick={() => setIsMenuOpen(false)}>Inicio</NavItem>
        <NavItem to='/Rendicion-Cuentas/2024/informes' onClick={() => setIsMenuOpen(false)}>Informes</NavItem>
        <ExternalNavItem href="#" >Inscripción</ExternalNavItem>
        <ExternalNavItem href="#" >Reglamento</ExternalNavItem>
        <ExternalNavItem href="#" >Ver audiencia</ExternalNavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
