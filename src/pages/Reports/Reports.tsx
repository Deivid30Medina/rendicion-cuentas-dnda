import IconJurisdiccionales from "../../assets/icons/dependency/IconJurisdiccionales"
import IconAsesoriaJuridica from "../../assets/icons/dependency/IconAsesoriaJuridica"
import IconCapacitacion from "../../assets/icons/dependency/IconCapacitacion"
import IconAdministrativa from "../../assets/icons/dependency/IconAdministrativa"
import IconRegistro from "../../assets/icons/dependency/IconRegistro"
import IconConciliacion from "../../assets/icons/dependency/IconConciliación"
import IconComunicaciones from "../../assets/icons/dependency/IconComunicaciones"
import IconControlInterno from "../../assets/icons/dependency/IconControlInterno"
import { Link } from "react-router-dom"
import IconDireccionG from "../../assets/icons/dependency/IconDireccionG"

const Reports = () => {
  return (
    <>
      <div className="w-full flex items-start justify-between flex-col pt-12">

        <h3 className="text-color-dnda text-3xl font-medium">Informes</h3>
        <p className="text-lg pt-12">
          Las dependencias de la Dirección Nacional de Derecho de Autor, elaboraron un informe ejecutivo sobre su gestión correspondiente al período
          entre el 1° de enero y al 30 de septiembre de 2024.
          <br /><br />
          Puede hacer clic sobre cada una y consultar las cifras sobre los mayores logros, las dificultades que han debido sortear y los retos que tienen
          por cumplir.
        </p>
        <div className="w-full pt-12 grid gap-12 place-items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
          <Link className="w-full min-h-60 mx-auto sm:mx-0 md:mx-0 xl:mx-0" to="/Rendicion-Cuentas/2024/informes/direccion-general">
            <div className={`h-full flex items-center justify-center flex-col  hover:bg-white bg-color-icon-direccionG-degradado border-2 hover:border-color-icon-direccionG rounded-lg duration-700 hover:scale-110`}>

              <IconDireccionG className="w-full max-h-32" />

              <p className="text-center text-sm">Dirección General</p>
            </div>
          </Link>
          <Link className="w-full min-h-60 mx-auto sm:mx-0 md:mx-0 xl:mx-0" to="/Rendicion-Cuentas/2024/informes/jurisdiccionales">
            <div className={`h-full flex items-center justify-center flex-col  hover:bg-white bg-color-icon-jurisdiccionales-degradado border-2 hover:border-color-icon-jurisdiccionales rounded-lg duration-700 hover:scale-110`}>

              <IconJurisdiccionales className="w-full max-h-32" />

              <p className="text-center text-sm">Subdirección de Asuntos Jurisdiccionales</p>
            </div>
          </Link>
          <Link className="w-full min-h-60 mx-auto sm:mx-0 md:mx-0 xl:mx-0" to="/Rendicion-Cuentas/2024/informes/capacitacion">
            <div className={`h-full flex items-center justify-center flex-col  hover:bg-white bg-color-icon-capacitacion-degradado border-2 hover:border-color-icon-capacitacion rounded-lg duration-700 hover:scale-110`}>
              <IconCapacitacion className="w-full max-h-32" />
              <p className="text-center text-sm">Subdirección Técnica de Capacitación, Investigación y Desarrollo</p>
            </div>
          </Link>
          <Link className="w-full min-h-60 mx-auto sm:mx-0 md:mx-0 xl:mx-0" to="/Rendicion-Cuentas/2024/informes/administrativa">
            <div className={`h-full flex items-center justify-center flex-col  hover:bg-white bg-color-icon-administrativa-degradado border-2 hover:border-color-icon-administrativa rounded-lg duration-700 hover:scale-110`}>
              <IconAdministrativa className="w-full max-h-32" />
              <p className="text-center text-sm">Subdirección Administrativa</p>
            </div>
          </Link>
          <Link className="w-full min-h-60 mx-auto sm:mx-0 md:mx-0 xl:mx-0" to="/Rendicion-Cuentas/2024/informes/registro">
            <div className={`h-full flex items-center justify-center flex-col  hover:bg-white bg-color-icon-registro-degradado  border-2 hover:border-color-icon-registro rounded-lg duration-700 hover:scale-110`}>
              <IconRegistro className="w-full max-h-32" />
              <p className="text-center text-sm">Oficina de Registro</p>
            </div>
          </Link>
          <Link className="w-full min-h-60 mx-auto sm:mx-0 md:mx-0 xl:mx-0" to="/Rendicion-Cuentas/2024/informes/juridica">
            <div className={`h-full flex items-center justify-center flex-col  hover:bg-white bg-color-icon-juridica-degradado  border-2 hover:border-color-icon-juridica rounded-lg duration-700 hover:scale-110`}>
              <IconAsesoriaJuridica className="w-full max-h-32" />
              <p className="text-center text-sm">Oficina Asesora Jurídica</p>
            </div>
          </Link>
          <Link className="w-full min-h-60 mx-auto sm:mx-0 md:mx-0 xl:mx-0" to="/Rendicion-Cuentas/2024/informes/conciliacion-arbitraje">
            <div className={`h-full flex items-center justify-center flex-col  hover:bg-white bg-color-icon-conciliacion-degradado  border-2 hover:border-color-icon-conciliacion rounded-lg duration-700 hover:scale-110`}>
              <IconConciliacion className="w-full max-h-32" />
              <p className="text-center text-sm">Centro de Conciliación y Arbitraje</p>
            </div>
          </Link>
          <Link className="w-full min-h-60 mx-auto sm:mx-0 md:mx-0 xl:mx-0" to="/Rendicion-Cuentas/2024/informes/ucsti">
            <div className={`h-full flex items-center justify-center flex-col hover:bg-white bg-color-icon-ucsti-degradado  border-2 hover:border-color-icon-ucsti rounded-lg duration-700 hover:scale-110`}>
              <IconComunicaciones className="w-full max-h-32" />
              <p className="text-center text-sm">Unidad de Comunicaciones, Servicio al Ciudadano y Tecnologías de la Información</p>
            </div>
          </Link>
          <Link className="w-full min-h-60 mx-auto sm:mx-0 md:mx-0 xl:mx-0" to="/Rendicion-Cuentas/2024/informes/control-interno">
            <div className={`h-full flex items-center justify-center flex-col  hover:bg-white bg-color-icon-controlInterno-degradado  border-2 hover:border-color-icon-controlInterno rounded-lg duration-700 hover:scale-110`}>
              <IconControlInterno className="w-full max-h-32" />
              <p className="text-center text-sm">Oficina de Control Interno</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Reports
