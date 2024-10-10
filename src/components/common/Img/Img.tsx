interface Props{
    src: string,
    alt: string,
    className: string
}

const Img = ({src, alt, className }: Props) => {
  return (
    <>
      <img src={src} alt={alt} className={className}/>
    </>
  )
}

export default Img
