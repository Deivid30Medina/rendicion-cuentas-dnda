import { Link } from "react-router-dom";
import Button from "../../../components/common/Buttons/Button";
import IconInforme from "../../../assets/icons/dependencies/IconInforme";
import IconVideo from "../../../assets/icons/dependencies/IconVideo";
import IconPresentacion from "../../../assets/icons/dependencies/IconPresentacion";
import IconJurisdiccionales from "../../../assets/icons/dependency/IconJurisdiccionales";

const Jurisdiccionales = () => {
  return (
    <>
      <div className="w-full flex items-start justify-between flex-nowrap pt-12 gap-4">
        <IconJurisdiccionales
          className="h-28 min-w-28 border-2 border-color-dnda rounded-lg"
          colorSVG="#004884"
        />
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-color-dnda text-2xl font-semibold">
            Subdirección de Asuntos Jurisdiccionales
          </h1>
          <p>
            Su objetivo es ejercer las funciones jurisdiccionales asignadas a la
            Dirección Nacional de Derecho de Autor por el artículo 24 del Código
            General del Proceso en los procesos relacionados con los derechos de
            autor y conexos. Así como dirimir conflictos civiles relacionados
            con el derecho de autor y los derechos conexos. Atender a los
            interesados en interponer una acción judicial ante la Dirección
            Nacional de Derecho de Autor.
          </p>
        </div>
      </div>
      <div className="w-full pt-16 grid place-items-start justify-items-stretch gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <a className="sm:mx-0 md:mx-0 xl:mx-0" target="_blank" href="reports/reporte-jurisdiccionales.pdf">
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
        <a className="sm:mx-0 md:mx-0 xl:mx-0" target="_blank" href="presentation/Presentacion-jurisdiccionales.pptx">
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

export default Jurisdiccionales;
