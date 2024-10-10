// components/ExternalNavItem.js
interface Props{
  href : string,
  children: string
}

const ExternalNavItem = ({ href, children } : Props) => {
  return (
    <li className='relative text-white hover:text-color-hover-navbar p-3 transition-all cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[4px] after:bg-color-hover-navbar after:transition-all after:duration-500'>
      <a className='no-underline' target='_blank' rel="noopener noreferrer" href={href}>
        {children}
      </a>
    </li>
  );
};

export default ExternalNavItem;
