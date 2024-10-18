import Img from "../../components/common/Img/Img"

const Home = () => {
  return (
    <>
      <div className="w-full flex items-start justify-between flex-wrap pt-12">
        <div className="flex flex-col flex-nowrap w-full xl:w-[55%]">
          <h3 className="text-color-dnda text-3xl font-normal">Audiencia Pública de Rendición de Cuentas 2024</h3>
          <p className="text-color-dnda text-xl">5 de diciembre</p>
          <p className="text-lg pt-12">
            Bienvenido (a) al micrositio de la Audiencia Pública de Rendición de
            Cuentas de la Dirección Nacional de Derecho de Autor [DNDA],
            correspondiente al periodo entre el 1° de enero y al 30 de septiembre
            de 2024.
            <br /><br />
            Esta Audiencia Pública de Rendición de Cuentas, se realizará el miercoles
            11 diciembre de 2024 de 9:00 a.m. a 12:00 p.m. en modalidad virtual, a
            través de nuestro canal de YouTube @derechodeautorcol y de
            Facebook live @derechodeautor
          </p>
        </div>
        <Img src="Imgs/ImagenEventoHome.jpg" alt="Imgane Home rendición de cuentas" className="w-full xl:w-2/5 xl:m-0 mt-8"></Img>
      </div>

    </>
  )
}

export default Home
