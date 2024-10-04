import React from 'react'
import IconDNDAColor from '../../../assets/icons/IconDNDAColor'

const Footer = () => {
  return (
    <>
      <footer className='w-full h-auto flex flex-col flex-nowrap'>
        <div className='w-full bg-color-dnda px-80 h-auto'>
          <div className='w-full bg-white border-custom-2 border-custom-black flex flex-wrap items-center justify-center px-4 rounded-xl -mt-28 mb-12 py-12'>
            <div className='w-[80%]'>
              <h3>Dirección Nacional de Derecho de Autor</h3>
              <p>Sede Principal</p>
              <p>Calle 28 No. 13A - 15 Piso 17, Bogotá D.C., Colombia </p>
              <p>Código postal: 110311 </p>
              <br /><br />
              <p>Línea de atención gratuita al ciudadano y de anticorrupción: </p>
              <p>+ 57 01 8000 127878PBX: +57 601 7868220 </p>
              <br /><br />
              <p>Correo Institucional: <a href="info@derechodeautor.gov.co">info@derechodeautor.gov.co</a></p>
              <a href="https://www.derechodeautor.gov.co/es/peticiones-quejas-reclamos-sugerencias-y-denuncias" target='_blank'>QUEJAS Y/O DENUNCIAS DISCIPLINARIAS </a>
              <a href="https://www.derechodeautor.gov.co/es/notificaciones-judiciales" target='_blank'>NOTIFICACIONES JUDICIALES</a>
              <br /><br />
              <p>Horario de Atención</p>
              <p>Lunes a Viernes de 8:30 a. m. a 5:00 p. m.</p>
              <div className='flex flex-wrap w-full h-auto gap-4'>
                <a className='min-w-52 min-h-9' href="https://www.facebook.com/derechodeautor"><img src="" alt="Facebook" /><span>@derechodeautor</span></a>
                <a className='min-w-52 min-h-9' href="https://x.com/i/flow/login?redirect_after_login=%2FDerechodeautor"><img src="" alt="X" /><span>@derechodeautor</span></a>
                <a className='min-w-52 min-h-9' href="https://www.instagram.com/derechodeautor/"><img src="" alt="Instagram" /><span>@derechodeautor</span></a>
                <a className='min-w-52 min-h-9' href="https://www.youtube.com/@DERECHODEAUTORCOL"><img src="" alt="YouTube" /><span>derechodeautorcol</span></a>
                <a className='min-w-52 min-h-9' href="https://www.tiktok.com/@derechodeautorcol?lang=es"><img src="" alt="TikTok" /><span>@derechodeautor</span></a>
                <a className='min-w-52 min-h-9' href="https://www.linkedin.com/in/direcci%C3%B3n-nacional-de-derecho-de-autor-de-colombia-7210b915b/"><img src="" alt="Linkedin" /><span>/company/derechodeautor</span></a>
                <a className='min-w-52 min-h-9' href="https://www.threads.net/@derechodeautor"><img src="" alt="Threads" /><span>@derechodeautor</span></a>
              </div>
              <div className='flex flex-wrap w-full h-auto gap-4'>
                <a target='_blank' href="https://www.derechodeautor.gov.co/sobre-dnda/politicas/politicas-de-uso-y-seguridad">POLÍTICAS</a>
                <a target='_blank' href="https://www.derechodeautor.gov.co/es/peticiones-quejas-reclamos-sugerencias-y-denuncias#">MAPA DEL SITIO</a>
                <a target='_blank' href="https://www.derechodeautor.gov.co/sobre-dnda/politicas/politicas-de-uso-y-seguridad">TÉRMINOS Y CONDICIONES</a>
              </div>
            </div>
            <div className='w-[20%]'>
              <a href="https://www.derechodeautor.gov.co/es" target='_blank'>
                <IconDNDAColor />
              </a>
            </div>
            <div></div>
          </div>
        </div>
        <div className='w-full bg-color-institucional min-h-28 max-h-28 flex items-center justify-start px-80 gap-4'>
          <a className='inline-block h-12 w-12' href="inline-block h-full w-auto">
            <img className='object-contain h-full w-auto' src="./icons/IconColombia.png" alt="Icono colombia" />
          </a>
          <span className='h-12 border-l-2 border-white'></span>
          <a className='inline-block h-12 w-32' href="inline-block h-full w-auto">
            <img className='object-contain h-full w-auto' src="./icons/Iconpresidencia.png" alt="Icono presidencia" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
