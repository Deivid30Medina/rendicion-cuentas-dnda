
interface Props{
  label: string,
  className: string,
  parentMethod?: () => void
}

const Button = ({label, className, parentMethod} : Props) => {
  return (
    <button className={className} onClick={parentMethod}>
      {label}
    </button>
  )
}

export default Button
