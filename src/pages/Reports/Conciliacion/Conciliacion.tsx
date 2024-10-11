import { Link } from "react-router-dom"
import IconLupa from "../../../assets/icons/IconLupa"
import Button from "../../../components/common/Buttons/Button"
import IconInforme from "../../../assets/icons/dependencies/IconInforme"
import IconVideo from "../../../assets/icons/dependencies/IconVideo"
import IconPresentacion from "../../../assets/icons/dependencies/IconPresentacion"

const Conciliacion = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between flex-nowrap pt-12">
        <IconLupa className="min-h-20 min-w-28" />
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-color-dnda text-2xl font-semibold">Unidad de Comunicaciones, Servicio al Ciudadano y Tecnologías de la Información</h1>
          <p>
            Unidad de Comunicaciones, Servicio al Ciudadano y Tecnologías de la Información: Su objetivo es liderar y gestionar las comunicaciones de la Dirección Nacional de Derechos de Autor, generando condiciones que favorezcan la interacción con los ciudadanos; asimismo, fortalecer la imagen de la Entidad e informar sobre las funciones, trámites y servicios a su cargo, a través de los diferentes medios de comunicación, eventos académicos y feriales, con el propósito de contribuir en la construcción de una cultura de respeto a los Derecho de Autor.
          </p>
        </div>
      </div>
      <div className="w-full pt-16 grid place-items-start justify-items-stretch gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <a className="sm:mx-0 md:mx-0 xl:mx-0" target="_blank" href="#">
          <div className={`h-auto flex items-center justify-start flex-nowrap hover:bg-white bg-color-icon-jurisdiccionales-degradado border-2 hover:border-color-icon-jurisdiccionales rounded-lg duration-700 hover:scale-110`}>

            <IconInforme className="w-auto max-h-20" />

            <p className="text-center text-xl text-color-dnda">Informe</p>
          </div>
        </a>
        <a className="sm:mx-0 md:mx-0 xl:mx-0" target="_blank" href="#">
          <div className={`h-auto flex items-center justify-start flex-nowrap  hover:bg-white bg-color-icon-capacitacion-degradado border-2 hover:border-color-icon-capacitacion rounded-lg duration-700 hover:scale-110`}>
            <IconVideo className="w-auto max-h-20" />
            <p className="text-center text-xl text-color-dnda">Vídeo</p>
          </div>
        </a>
        <a className="sm:mx-0 md:mx-0 xl:mx-0" target="_blank" href="#">
          <div className={`h-auto flex items-center justify-start flex-nowrap  hover:bg-white bg-color-icon-capacitacion-degradado border-2 hover:border-color-icon-capacitacion rounded-lg duration-700 hover:scale-110`}>
            <IconPresentacion className="w-auto max-h-20" />
            <p className="text-center text-xl text-color-dnda">Presentación</p>
          </div>
        </a>
      </div>
      <div className="w-full flex items-center justify-center mt-20">
        <Link to="/Rendicion-Cuentas/2024/informes" >
          <Button label={"Volver"} className="bg-gray-300 hover:bg-gray-400 duration-700 hover:scale-110 rounded-lg w-24 h-10 text-2xl"></Button>
        </Link>
      </div>
    </>
  )
}

export default Conciliacion
