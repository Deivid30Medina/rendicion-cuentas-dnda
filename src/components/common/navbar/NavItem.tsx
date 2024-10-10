import { NavLink } from 'react-router-dom';
// Definición de la interfaz para las props del NavItem
interface NavItemProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, onClick, children }) => {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          isActive
            ? 'relative block text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-color-hover-navbar'
            : 'relative block text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
