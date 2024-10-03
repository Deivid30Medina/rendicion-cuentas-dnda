import React from 'react';

interface SvgIconProps {
  width?: number; // Propiedad opcional para el ancho
  height?: number; // Propiedad opcional para la altura
  fill?: string; // Propiedad opcional para el color
  className?: string;
}

const IconMenuBurger: React.FC<SvgIconProps> = ({ width = 24, height = 24, fill = 'rgba(0, 0, 0, 1)', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width} // Usar prop de ancho
      height={height} // Usar prop de alto
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" fill={fill} />
    </svg>
  );
};

export default IconMenuBurger;
