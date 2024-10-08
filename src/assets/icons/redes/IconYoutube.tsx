import React from 'react'

interface SvgIconProps {
    width?: number;
    height?: number;
    className?: string;
    color?: string;
}

const IconYoutube: React.FC<SvgIconProps> = ({ width = '30', height = '30', className, color = '#000000' }) => {
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
                <g id="FooterYT_ico" transform="translate(-655.484 -699)">
                    <rect id="Rectángulo_773" data-name="Rectángulo 773" width="20" height="20" rx="4" transform="translate(655.484 699)" fill="#36c" />
                    <path id="Trazado_3133" data-name="Trazado 3133" d="M560.405,5.964c-.38-.7-.792-.831-1.631-.88S555.828,5,554,5s-3.939.025-4.776.084-1.25.178-1.634.881A8.978,8.978,0,0,0,547,10V10a8.841,8.841,0,0,0,.592,4.025,1.637,1.637,0,0,0,1.633.888c.837.059,2.947.084,4.777.084s3.934-.03,4.773-.084,1.251-.186,1.631-.888A8.777,8.777,0,0,0,561,10V10A8.789,8.789,0,0,0,560.405,5.964Zm-8.155,6.761V7.272L556.625,10Z" transform="translate(111.484 699)" fill="#fff" />
                </g>
            </svg>

        </>
    )
}

export default IconYoutube
