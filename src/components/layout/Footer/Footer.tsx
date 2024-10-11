import IconDNDAColor from '../../../assets/icons/IconDNDAColor'
import IconoWebDnda from '../../../assets/icons/redes/IconoWebDnda'
import IconFacebook from '../../../assets/icons/redes/IconFacebook'
import IconX from '../../../assets/icons/redes/IconX'
import IconInstagram from '../../../assets/icons/redes/IconInstagram'
import IconYoutube from '../../../assets/icons/redes/IconYoutube'
import IconoTickTock from '../../../assets/icons/redes/IconoTickTock'
import IconoLinkedin from '../../../assets/icons/redes/IconoLinkedin'
import IconoThread from '../../../assets/icons/redes/IconoThread'

const Footer = () => {
  return (
    <>
      <footer className='w-screen h-auto flex flex-col flex-nowrap mt-64'>
        <div className='w-full bg-color-dnda px-5 xl:px-80 h-auto'>
          <div className='w-full bg-white border-custom-2 border-custom-black flex flex-wrap flex-col xl:flex-row items-start justify-center px-8 rounded-xl -mt-28 mb-12 py-5'>
            <div className='w-full xl:flex xl:flex-wrap xl:items-start'>
              <div className='w-full xl:w-4/5'>
                <h3 className='text-xl text-color-dnda-oscuro font-bold font-serif'>Dirección Nacional de Derecho de Autor</h3>
                <p className='text-color-dnda-oscuro text-base font-serif mt-4'>Sede Principal</p>
                <p className='text-base mt-8'>Calle 28 No. 13A - 15 Piso 17, Bogotá D.C., Colombia </p>
                <p className='text-base'>Código postal: 110311 </p>
                <p className='text-base mt-8'>Línea de atención gratuita al ciudadano y de anticorrupción: </p>
                <p className='text-base'>+ 57 01 8000 127878PBX: +57 601 7868220 </p>
                <p className='text-base mt-8'>Correo Institucional: <a className='text-color-dnda-oscuro' href="info@derechodeautor.gov.co">info@derechodeautor.gov.co</a></p>
                <a className='text-color-dnda-oscuro block text-base' href="https://www.derechodeautor.gov.co/es/peticiones-quejas-reclamos-sugerencias-y-denuncias" target='_blank'>QUEJAS Y/O DENUNCIAS DISCIPLINARIAS </a>
                <a className='text-color-dnda-oscuro block text-base' href="https://www.derechodeautor.gov.co/es/notificaciones-judiciales" target='_blank'>NOTIFICACIONES JUDICIALES</a>
                <p className='text-base mt-8'>Horario de Atención</p>
                <p className='text-base'>Lunes a Viernes de 8:30 a. m. a 5:00 p. m.</p>
              </div>

              <div className='w-full xl:w-1/5 flex items-center justify-center'>
                <a href="https://www.derechodeautor.gov.co/es" target='_blank'>
                  <IconDNDAColor className='cursor-pointer max-h-20 xl:max-h-24 mt-6 xl:mt-0'/>
                </a>
              </div>

              <div className='flex flex-wrap justify-start items-start xl:items-center flex-row w-full h-auto gap-2 mt-12'>
                <a className='text-xl text-color-dnda-oscuro flex items-center justify-start flex-nowrap gap-2 min-w-52 min-h-9' href="https://www.facebook.com/derechodeautor"><IconoWebDnda width={20} height={20} className='cursor-pointer min-w-5'/>@derechodeautor</a>
                <a className='text-xl text-color-dnda-oscuro flex items-center justify-start flex-nowrap gap-2 min-w-52 min-h-9' href="https://www.derechodeautor.gov.co/es"><IconFacebook width={20} height={20} className='cursor-pointer min-w-5'/>@derechodeautor</a>
                <a className='text-xl text-color-dnda-oscuro flex items-center justify-start flex-nowrap gap-2 min-w-52 min-h-9' href="https://x.com/i/flow/login?redirect_after_login=%2FDerechodeautor"><IconX width={20} height={20} className='cursor-pointer min-w-5'/>@derechodeautor</a>
                <a className='text-xl text-color-dnda-oscuro flex items-center justify-start flex-nowrap gap-2 min-w-52 min-h-9' href="https://www.instagram.com/derechodeautor/"><IconInstagram width={20} height={20} className='cursor-pointer min-w-5'/>@derechodeautor</a>
                <a className='text-xl text-color-dnda-oscuro flex items-center justify-start flex-nowrap gap-2 min-w-52 min-h-9' href="https://www.youtube.com/@DERECHODEAUTORCOL"><IconYoutube width={20} height={20} className='cursor-pointer min-w-5'/>derechodeautorcol</a>
                <a className='text-xl text-color-dnda-oscuro flex items-center justify-start flex-nowrap gap-2 min-w-52 min-h-9' href="https://www.tiktok.com/@derechodeautorcol?lang=es"><IconoTickTock width={20} height={20} className='cursor-pointer min-w-5'/>@derechodeautor</a>
                <a className='text-xl text-color-dnda-oscuro flex items-center justify-start flex-nowrap gap-2 min-w-52 min-h-9' href="https://www.linkedin.com/in/direcci%C3%B3n-nacional-de-derecho-de-autor-de-colombia-7210b915b/"><IconoLinkedin width={20} height={20} className='cursor-pointer min-w-5'/>/company/derechodeautor</a>
                <a className='text-xl text-color-dnda-oscuro flex items-center justify-start flex-nowrap gap-2 min-w-52 min-h-9' href="https://www.threads.net/@derechodeautor"><IconoThread width={20} height={20} className='cursor-pointer min-w-5'/>@derechodeautor</a>
              </div>
              <div className='flex flex-wrap w-full h-auto gap-4 mt-16'>
                <a className='text-sm text-color-dnda-oscuro' target='_blank' href="https://www.derechodeautor.gov.co/sobre-dnda/politicas/politicas-de-uso-y-seguridad">POLÍTICAS</a>
                <a className='text-sm text-color-dnda-oscuro' target='_blank' href="https://www.derechodeautor.gov.co/es/peticiones-quejas-reclamos-sugerencias-y-denuncias#">MAPA DEL SITIO</a>
                <a className='text-sm text-color-dnda-oscuro' target='_blank' href="https://www.derechodeautor.gov.co/sobre-dnda/politicas/politicas-de-uso-y-seguridad">TÉRMINOS Y CONDICIONES</a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-color-institucional min-h-28 max-h-28 flex items-center justify-start xl:px-80 px-5 gap-4'>
          <a className='inline-block h-12 w-12' href="inline-block h-full w-auto">
            <img className='object-contain h-full w-auto' src="icons/IconColombia.png" alt="Icono colombia" />
          </a>
          <span className='h-12 border-l-2 border-white'></span>
          <a className='inline-block h-12 w-32' href="inline-block h-full w-auto">
            <img className='object-contain h-full w-auto' src="icons/Iconpresidencia.png" alt="Icono presidencia" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
