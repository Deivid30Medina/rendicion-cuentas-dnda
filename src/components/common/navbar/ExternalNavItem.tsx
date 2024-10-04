// components/ExternalNavItem.js
import React from 'react';

const ExternalNavItem = ({ href, onClick, children }) => {
  return (
    <li onClick={onClick} className='relative text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'>
      <a className='no-underline' target='_blank' rel="noopener noreferrer" href={href}>
        {children}
      </a>
    </li>
  );
};

export default ExternalNavItem;
