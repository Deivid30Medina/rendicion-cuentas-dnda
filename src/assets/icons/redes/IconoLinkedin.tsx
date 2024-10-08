import React from 'react'

interface SvgIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const IconoLinkedin: React.FC<SvgIconProps> = ({ width = '30', height = '30', className, color = '#000000' }) => {
  return (
    <>
      <svg
        fill={color}
        height={height}
        width={width}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className={className}
      >
        <defs>
          <clipPath id="clip-path">
            <rect id="Rectángulo_677" data-name="Rectángulo 677" width="11.838" height="11.806" fill="none" />
          </clipPath>
        </defs>
        <g id="FooterLK_ico" transform="translate(-1119.49 -699)">
          <rect id="Rectángulo_777" data-name="Rectángulo 777" width="20" height="20" rx="4" transform="translate(1119.49 699)" fill="#36c" />
          <g id="Grupo_1065" data-name="Grupo 1065" transform="translate(1124.07 703.32)">
            <g id="Grupo_906" data-name="Grupo 906" transform="translate(0 0)" clipPath="url(#clip-path)">
              <path id="Trazado_2878" data-name="Trazado 2878" d="M30.64,26.442c.164-.184.3-.371.468-.53a2.566,2.566,0,0,1,1.846-.728,4.268,4.268,0,0,1,1.161.141,2.269,2.269,0,0,1,1.611,1.694,7.1,7.1,0,0,1,.215,1.941c0,1.38,0,2.76,0,4.139,0,.129-.036.163-.163.162q-1.066-.009-2.133,0c-.125,0-.152-.038-.152-.156q.006-1.969,0-3.939a3.538,3.538,0,0,0-.114-.978,1.1,1.1,0,0,0-1.209-.857,1.322,1.322,0,0,0-1.389,1.319,4.924,4.924,0,0,0-.038.616c0,1.277,0,2.554,0,3.831,0,.127-.031.165-.161.164q-1.074-.01-2.148,0c-.115,0-.148-.03-.148-.146q0-3.792,0-7.584c0-.125.041-.154.159-.153q1.02.008,2.04,0c.125,0,.157.039.155.158-.007.3,0,.6,0,.907" transform="translate(-24.103 -21.457)" fill="#fefefe" />
              <path id="Trazado_2879" data-name="Trazado 2879" d="M3.726,30.449c0,1.251,0,2.5,0,3.752,0,.139-.034.181-.178.179-.711-.008-1.421-.006-2.132,0-.114,0-.148-.028-.148-.145q.005-3.8,0-7.6c0-.1.025-.142.137-.141.721,0,1.442.006,2.163,0,.138,0,.157.052.157.171q-.005,1.891,0,3.783" transform="translate(-1.083 -22.574)" fill="#fefefe" />
              <path id="Trazado_2880" data-name="Trazado 2880" d="M2.839,1.412A1.419,1.419,0,1,1,1.422,0,1.424,1.424,0,0,1,2.839,1.412" transform="translate(0 0)" fill="#fefefe" />
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}



export default IconoLinkedin
