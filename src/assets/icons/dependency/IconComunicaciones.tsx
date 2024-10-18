interface SvgIconProps {
    className?: string;
    colorSVG?: string
  }

const IconComunicaciones: React.FC<SvgIconProps> = ({  className, colorSVG = "#B51CFD" } : SvgIconProps) => {
  return (
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" className={className}><path d="m246.22,129.71c.07-.07.12-.14.19-.21-.07.07-.13.14-.19.21Z" style={{fill:'none'}}/><polygon points="241.85 135.03 243.39 133.23 243.39 133.23 241.85 135.03" style={{fill:'none'}}/><path d="m200.09,336.49c.61-.33,1.18-.69,1.69-1.11l-1.69,1.11Z" style={{ fill: colorSVG}}/><polygon points="243.39 133.23 243.4 133.23 243.39 133.23 243.39 133.23" style={{ fill: colorSVG}}/><path d="m246.22,129.71c-.17.17-.34.34-.48.52-.47.62-1.27,1.66-1.74,2.28l3.19-3.72c-.28.25-.54.48-.78.7-.07.07-.12.14-.19.21Z" style={{ fill: colorSVG}}/><path d="m310.25,280.3c-26.27,5.02-52.51,10.24-78.75,15.47-4.72.94-7.31,6.07-5.26,10.43,1.44,3.07,4.79,4.77,8.12,4.12,26.24-5.09,52.47-10.27,78.71-15.38,5.21-1.01,7.72-6.98,4.81-11.41-1.66-2.52-4.68-3.8-7.64-3.24Z" style={{ fill: colorSVG}}/><path d="m352.5,219.32c-4.22-6.39-3.67-10.92.55-17.01,28.12-40.56-21.34-52.08-21.34-52.08-3.79.88-7.96,0-11.8.74-5.05.96-7.52-1.09-9.86-5.33-7.65-13.83-15.52-27.54-23.68-41.07-8-13.26-24.21-15.72-34.77-5.49-2.64,2.56-4.8,5.64-7.08,8.55-29.63,37.72-59.27,75.42-88.81,113.21-3.02,3.86-6.76,7.09-11.02,9.51-18.88,10.75-37.73,21.56-56.45,32.59-16.9,9.97-25.11,25.22-26.01,41.38-.21,37.25,31.32,62.09,64.66,53.64,5.65-1.43,7.74.04,10.26,4.51,10.66,18.93,21.52,37.75,32.55,56.48,9.53,16.17,26.99,21.26,41.82,12.53,14.51-8.54,18.58-25.97,9.62-42.04-5.65-10.14-11.18-20.38-17.52-30.07-3.72-5.68-2.33-7.82,3.14-10.85,18.15-10.03,18.13-10.32,8.27-28.92-.47-.9-.8-1.64-1-2.28l-9.95-18.05c-.96-.66-1.83-1.68-2.66-3.17-7.72-13.79-15.62-27.48-23.57-41.14-2.14-3.69-6.94-4.82-10.51-2.49-3.31,2.16-4.36,6.53-2.39,9.96,7.71,13.42,15.45,26.82,23.27,40.17.57.97.93,1.8,1.05,2.53l10.31,17.11c2.58,2.75,4.38,6.06,4.39,8.99,0,1.2-.45,2.23-1.17,3.12l.19.23-1.21.8c-.51.42-1.09.79-1.69,1.11l-19.29,12.69c9.46,16.38,19.03,32.69,28.19,49.23,5.89,10.62-1.05,22.24-12.59,22.21-5.74.04-10.01-2.65-12.81-7.45-11.71-20.05-23.27-40.18-34.97-60.24-1.51-2.59-1.64-4.19,1.38-5.8,6.31-3.38,12.5-7.01,18.59-10.77l8.23-4.96c3.55-2.14,4.61-6.81,2.33-10.28h0c-2.12-3.23-6.4-4.25-9.75-2.33-12.89,7.4-25.75,14.83-38.69,22.15-5,2.83-10.61,3.9-16.38,3.9-16.12.03-30.53-10.31-35.44-25.45-4.96-15.29,0-32.55,13.71-41.26,18.48-11.75,37.76-22.24,56.65-33.36l18.3-15.14c.11-.15.21-.3.34-.45,24.77-31.29,49.38-62.7,74.04-94.07l-.08-.06,1.54-1.8c.8-1.02,1.6-2.04,2.4-3.05.13-.16.28-.31.43-.47.07-.07.12-.14.19-.21.24-.23.5-.46.78-.7l12.28-14.32c.36-3.47,3.29-6.61,7.3-6.79,3.71.15,5.87,2.67,7.67,5.82,5.64,9.86,11.36,19.67,17.03,29.5,22.08,38.27,44.17,76.54,66.22,114.83,4.13,7.17,3.07,11.86-2.89,13.83-3.85,1.27-6.18.09-8.31-3.62-24.54-42.76-49.22-85.44-73.86-128.14-2.51-4.34-8.5-5.02-11.91-1.34-2.22,2.4-2.62,5.96-.99,8.79,23.4,40.55,46.76,81.13,70.29,121.61,1.44,2.47,2.32,4.19,2.01,5.45,4.59,7.68,12.81,12.48,21.77,12.69.3-.06.6-.12.9-.17,17.79-3.38,25.71-19.04,16.82-34.98-6.13-11-12.09-22.14-19.01-32.63Zm-12.82-22.65c-5.77-9.99-10.48-18.31-15.37-26.51-1.97-3.31-1.64-4.52,2.53-4.85,10.2-.8,19.64,5.76,20.79,16.2.61,5.53-5.21,8.82-7.95,15.16Z" style={{ fill: colorSVG}}/><polygon points="244 132.52 244 132.52 243.4 133.23 244 132.52" style={{ fill: colorSVG}}/><path d="m246.22,129.71c-.15.15-.3.3-.43.47-.8,1.02-1.6,2.04-2.4,3.05h0s.61-.72.61-.72c.47-.62,1.27-1.66,1.74-2.28.14-.18.31-.35.48-.52Z" style={{ fill: colorSVG}}/><path d="m246.41,129.51c.24-.23.5-.46.78-.7-.28.25-.54.48-.78.7Z" style={{ fill: colorSVG}}/><path d="m440.87,111.75c-2.58-4.53-6.62-4.81-10.83-2.5-13.16,7.24-26.25,14.6-39.37,21.92-2.75,1.53-4.49,3.78-4.74,6.71-.01,6.17,5.95,9.41,11.9,6.22,13.24-7.09,26.3-14.51,39.37-21.91,4.1-2.32,6.32-5.77,3.67-10.43Z" style={{ fill: colorSVG}}/><path d="m352.76,119.35c3.67.71,7.28-1.63,8.35-5.21,2.84-9.53,5.46-19.14,7.83-28.81,1.02-4.17-1.21-7.31-5.19-8.62-3.86-1.27-7.33.48-8.47,4.04-3.22,10.07-5.82,20.33-8.23,28.95-.33,5.87,1.35,8.81,5.71,9.66Z" style={{ fill: colorSVG}}/><path d="m427.94,186.37c-10.32-3.2-20.77-6.04-31.3-8.46-3.71-.85-6.62,1.72-7.63,5.51-.96,3.59.58,6.9,3.8,7.94,10.28,3.31,20.76,6.02,29.08,8.38,5.82.22,8.58-1.21,9.64-4.72,1.12-3.7.21-7.47-3.58-8.64Z" style={{ fill: colorSVG}}/><path d="m202.8,334.35c-.3.37-.64.71-1.02,1.02l1.21-.8-.19-.23Z" style={{ fill: colorSVG}}/><path d="m241.93,135.09c.49-.62.97-1.24,1.46-1.85l-1.54,1.8.08.06Z" style={{ fill: colorSVG}}/></svg>
  )
}

export default IconComunicaciones
