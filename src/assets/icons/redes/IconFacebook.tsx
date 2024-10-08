import React from 'react'

interface SvgIconProps {
    width?: number;
    height?: number;
    className?: string;
    color?: string;
}

const IconFacebook: React.FC<SvgIconProps> = ({ width = '30', height = '30', className, color = '#000000' }) => {
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
                <g id="FooterFB_ico" transform="translate(-111.484 -699)">
                    <rect id="Rectángulo_769" data-name="Rectángulo 769" width="20" height="20" rx="4" transform="translate(111.484 699)" fill="#36c" />
                    <path id="Trazado_3121" data-name="Trazado 3121" d="M11.048,16.784V10.6H13.12l.311-2.411H11.044V6.649c0-.7.193-1.174,1.2-1.174H13.52V3.318a17.255,17.255,0,0,0-1.859-.094,2.9,2.9,0,0,0-3.1,3.186V8.188H6.48V10.6H8.561v6.185Z" transform="translate(111.484 699)" fill="#fff" />
                </g>
            </svg>

        </>
    )
}

export default IconFacebook
