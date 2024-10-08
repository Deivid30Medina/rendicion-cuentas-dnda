import React from 'react';

interface IconoThreadProps {
  width?: number;
  height?: number;
  className?: string;
}

const IconoThread: React.FC<IconoThreadProps> = ({ width = '30', height = '30', className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      className={className}
    >
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectángulo_778" data-name="Rectángulo 778" width="13.091" height="15" transform="translate(955.455 2.5)" fill="#fff" />
        </clipPath>
      </defs>
      <g id="FooterTR_ico" transform="translate(-1063.484 -699)">
        <rect id="Rectángulo_777" data-name="Rectángulo 777" width="20" height="20" rx="4" transform="translate(1063.484 699)" fill="#36c" />
        <g id="Grupo_1064" data-name="Grupo 1064" transform="translate(111.484 699)" clipPath="url(#clip-path)">
          <path id="Trazado_3144" data-name="Trazado 3144" d="M962.044,17.5a6.074,6.074,0,0,1-6.277-4.713,12.316,12.316,0,0,1-.092-5.075,6.53,6.53,0,0,1,2.888-4.36,7.946,7.946,0,0,1,5.139-.7,5.936,5.936,0,0,1,3.65,2.175,6.434,6.434,0,0,1,1.194,2.47l-1.256.245.627-.122-.627.125a5.221,5.221,0,0,0-.948-1.931A4.661,4.661,0,0,0,963.431,3.9a6.669,6.669,0,0,0-4.259.574,5.341,5.341,0,0,0-2.243,3.483,11.119,11.119,0,0,0,.077,4.508,4.642,4.642,0,0,0,2.653,3.285,6.777,6.777,0,0,0,4.508.149,3.653,3.653,0,0,0,2.359-2.334,2.368,2.368,0,0,0-1.154-2.792,3.529,3.529,0,0,1-1.853,2.872,3.232,3.232,0,0,1-4.088-1.153,2.368,2.368,0,0,1,.047-2.235,2.907,2.907,0,0,1,2.552-1.326,9.828,9.828,0,0,1,2.073.091,1.82,1.82,0,0,0-1.742-1.746,1.926,1.926,0,0,0-1.875.832L959.4,7.444A3.2,3.2,0,0,1,962.41,6c1.749.066,2.905,1.363,3.017,3.383a3.7,3.7,0,0,1,2.343,4.478,4.881,4.881,0,0,1-3.214,3.257,8.466,8.466,0,0,1-2.514.378Zm.628-7.3c-.751,0-1.708.051-2.085.7a1.076,1.076,0,0,0-.014,1.015,2.017,2.017,0,0,0,2.415.568,2.451,2.451,0,0,0,1.151-2.154,7.394,7.394,0,0,0-1.467-.133Z" fill="#fff" />
        </g>
      </g>
    </svg>
  );
};

export default IconoThread;
