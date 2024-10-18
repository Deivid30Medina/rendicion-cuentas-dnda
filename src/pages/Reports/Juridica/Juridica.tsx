import { Link } from "react-router-dom";
import Button from "../../../components/common/Buttons/Button";
import IconInforme from "../../../assets/icons/dependencies/IconInforme";
import IconVideo from "../../../assets/icons/dependencies/IconVideo";
import IconPresentacion from "../../../assets/icons/dependencies/IconPresentacion";
import IconAsesoriaJuridica from "../../../assets/icons/dependency/IconAsesoriaJuridica";

const Juridica = () => {
  return (
    <>
      <div className="w-full flex items-start justify-between flex-nowrap pt-12 gap-4">
        <IconAsesoriaJuridica
          className="h-28 min-w-24 max-w-32 border-2 border-color-dnda rounded-lg"
          colorSVG="#004884"
        />
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-color-dnda text-2xl font-semibold">
            Oficina Asesora Jurídica
          </h1>
          <p>
            Brindar asesoría legal eficiente, oportuna y efectiva a la Dirección
            Nacional de Derechos de Autor y demás dependencias para garantizar
            la correcta ejecución de la misión de la entidad, fundamentada está
            en la observancia y acato de los principios y garantías
            constitucionales y legales vigentes. De la misma manera hacer el
            seguimiento de los proyectos de ley relacionados con derecho de
            autor y derechos conexos que cursen en el congreso.
          </p>
        </div>
      </div>
      <div className="w-full pt-16 grid place-items-start justify-items-stretch gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <a className="sm:mx-0 md:mx-0 xl:mx-0" target="_blank" href="reports/reporte-juridica.pdf">
          <div
            className={`h-auto flex items-center justify-start flex-nowrap hover:bg-white bg-color-dnda-card border-2 hover:border-color-dnda rounded-lg duration-700 hover:scale-105`}
          >
            <IconInforme className="w-auto max-h-20" />

            <p className="text-center text-xl text-color-dnda">Informe</p>
          </div>
        </a>
        <a className="sm:mx-0 md:mx-0 xl:mx-0" target="_blank" href="#">
          <div
            className={`h-auto flex items-center justify-start flex-nowrap  hover:bg-white bg-color-dnda-card border-2 hover:border-color-dnda rounded-lg duration-700 hover:scale-105`}
          >
            <IconVideo className="w-auto max-h-20" />
            <p className="text-center text-xl text-color-dnda">Video</p>
          </div>
        </a>
        <a className="sm:mx-0 md:mx-0 xl:mx-0" target="_blank" href="presentation/Presentacion-juridica.pptx">
          <div
            className={`h-auto flex items-center justify-start flex-nowrap  hover:bg-white bg-color-dnda-card border-2 hover:border-color-dnda rounded-lg duration-700 hover:scale-105`}
          >
            <IconPresentacion className="w-auto max-h-20" />
            <p className="text-center text-xl text-color-dnda">Presentación</p>
          </div>
        </a>
      </div>
      <div className="w-full flex items-center justify-center mt-20">
        <Link to="/Rendicion-Cuentas/2024/informes">
          <Button
            label={"Volver"}
            className="bg-gray-300 hover:bg-gray-400 duration-700 hover:scale-110 rounded-lg w-24 h-10 text-2xl"
          ></Button>
        </Link>
      </div>
    </>
  );
};

export default Juridica;
