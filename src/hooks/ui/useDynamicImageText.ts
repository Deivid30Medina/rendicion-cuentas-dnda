import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useDynamicImageText = () => {
    const location = useLocation();
    const [state, setState] = useState({
        text: '',
        image: ''
    });

    useEffect(() => {
        switch (location.pathname) {
            case '/Rendicion-Cuentas/2024':
                setState({
                    text: 'Rendición de cuentas DNDA 2024',
                    image: 'Imgs/BanerHome.jpg'
                });
                break;
            case '/Rendicion-Cuentas/2024/informes':
                setState({
                    text: 'Informes 2024',
                    image: 'Imgs/BanerInformes.jpg'
                });
                break;
            case '/Rendicion-Cuentas/2024/informes/jurisdiccionales':
                setState({
                    text: 'Subdirección de Asuntos Jurisdiccionales',
                    image: 'Imgs/BanerJurisdiccionales.jpg'
                });
                break;
            case '/Rendicion-Cuentas/2024/informes/capacitacion':
                setState({
                    text: 'Subdirección Técnica de Capacitación, Investigación y Desarrollo',
                    image: 'Imgs/BannerGlobal.jpg'
                });
                break;
            case '/Rendicion-Cuentas/2024/informes/administrativa':
                setState({
                    text: 'Subdirección Administrativa',
                    image: 'Imgs/BannerGlobal.jpg'
                });
                break;
            case '/Rendicion-Cuentas/2024/informes/registro':
                setState({
                    text: 'Oficina de Registro',
                    image: 'Imgs/BannerGlobal.jpg'
                });
                break;
            case '/Rendicion-Cuentas/2024/informes/juridica':
                setState({
                    text: 'Oficina Asesora Jurídica',
                    image: 'Imgs/BannerGlobal.jpg'
                });
                break;
            case '/Rendicion-Cuentas/2024/informes/conciliacion-arbitraje':
                setState({
                    text: 'Centro de Conciliación y Arbitraje',
                    image: 'Imgs/BannerGlobal.jpg'
                });
                break;
            case '/Rendicion-Cuentas/2024/informes/ucsti':
                setState({
                    text: 'Unidad de Comunicaciones, Servicio al Ciudadano y Tecnologías de la Información',
                    image: 'Imgs/BannerGlobal.jpg'
                });
                break;
            case '/Rendicion-Cuentas/2024/informes/control-interno':
                setState({
                    text: 'Oficina de Control Interno',
                    image: 'Imgs/BannerGlobal.jpg'
                });
                break;
            default:
                setState({
                    text: 'Rendición de cuentas DNDA 2024',
                    image: 'Imgs/BanerHome.jpg'
                });
        }
    }, [location.pathname]);

    return state;
};

export default useDynamicImageText;
