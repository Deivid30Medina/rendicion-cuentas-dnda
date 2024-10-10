import { Link } from "react-router-dom"
import { ReactNode } from "react"

interface Props {
  to: string,
  icon: ReactNode,
  text: string,
  color: string
}

const ButtonCardReports = ({ to, icon, text, color }: Props) => {
  return (
    <>
      <Link to={to} className="max-w-48">
        <div className={`flex items-center justify-center flex-col max-w-48  border-2 border-black hover:border-color-${color} hover:rounded-lg duration-700 hover:scale-110`}>
          <div className="max-h-32">
            {icon}
          </div>
          <p>{text}</p>
        </div>
      </Link>
    </>
  )
}

export default ButtonCardReports
