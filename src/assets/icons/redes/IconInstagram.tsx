import React from 'react'

interface SvgIconProps {
    width?: number;
    height?: number;
    className?: string;
    color?: string;
}

const IconInstagram: React.FC<SvgIconProps> = ({ width = '30', height = '30', className, color = '#000000' }) => {
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
                <g id="FooterIG_ico" transform="translate(-247.484 -699)">
                    <rect id="Rectángulo_770" data-name="Rectángulo 770" width="20" height="20" rx="4" transform="translate(247.484 699)" fill="#36c" />
                    <path id="Trazado_3124" data-name="Trazado 3124" d="M146,6.463a3.54,3.54,0,1,0,1.355.269A3.539,3.539,0,0,0,146,6.463Zm0,5.84a2.3,2.3,0,1,1,1.626-.674A2.3,2.3,0,0,1,146,12.3Zm4.509-5.979a.829.829,0,1,1-.243-.585A.832.832,0,0,1,150.511,6.324Zm2.025-.836a3.549,3.549,0,0,0-2.016-2.022,5.04,5.04,0,0,0-1.674-.32c-.736-.034-.971-.042-2.844-.042s-2.107.008-2.842.042a5.032,5.032,0,0,0-1.674.32,3.577,3.577,0,0,0-2.021,2.022,5.042,5.042,0,0,0-.32,1.674c-.034.735-.042.97-.042,2.842s.008,2.108.042,2.844a5.036,5.036,0,0,0,.32,1.673,3.521,3.521,0,0,0,2.021,2.014,5.052,5.052,0,0,0,1.674.321c.735.033.97.041,2.842.041s2.108-.008,2.844-.041a5.062,5.062,0,0,0,1.674-.321,3.523,3.523,0,0,0,2.016-2.017,5.062,5.062,0,0,0,.321-1.673c.033-.736.041-.971.041-2.844s-.008-2.107-.041-2.842A5.076,5.076,0,0,0,152.536,5.488Zm-.921,7.3a3.812,3.812,0,0,1-.237,1.281,2.28,2.28,0,0,1-1.309,1.308,3.8,3.8,0,0,1-1.28.238c-.727.033-.945.04-2.787.04s-2.058-.007-2.786-.04a3.792,3.792,0,0,1-1.28-.238,2.274,2.274,0,0,1-1.309-1.308,3.813,3.813,0,0,1-.237-1.281c-.033-.727-.04-.945-.04-2.787s.007-2.059.04-2.786a3.807,3.807,0,0,1,.237-1.28,2.285,2.285,0,0,1,1.309-1.309,3.777,3.777,0,0,1,1.28-.237c.728-.034.945-.04,2.786-.04s2.06.006,2.787.04a3.781,3.781,0,0,1,1.28.237,2.285,2.285,0,0,1,1.309,1.309,3.806,3.806,0,0,1,.237,1.28c.034.727.041.945.041,2.786s-.007,2.063-.041,2.79Z" transform="translate(111.484 699)" fill="#fff" />
                </g>
            </svg>

        </>
    )
}

export default IconInstagram
