import React from 'react'

interface SvgIconProps {
    width?: number;
    height?: number;
    className?: string;
    color?: string;
}

const IconX: React.FC<SvgIconProps> = ({ width = '30', height = '30', className, color = '#000000' }) => {
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
                <g id="FooterX_ico" transform="translate(-383.484 -699)">
                    <rect id="Rectángulo_771" data-name="Rectángulo 771" width="20" height="20" rx="4" transform="translate(383.484 699)" fill="#36c" />
                    <path id="Trazado_3127" data-name="Trazado 3127" d="M277.612,5.2h1.626l7.179,9.6h-1.626Zm8.742-.766L282.632,8.46l-3.01-4.025h-3.539l4.591,6.139-4.62,4.991h1.04l4.045-4.37,3.268,4.37h3.539L283.1,9.081l4.3-4.646Z" transform="translate(111.484 699)" fill="#fff" />
                </g>
            </svg>

        </>
    )
}

export default IconX
