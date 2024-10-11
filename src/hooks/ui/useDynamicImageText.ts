import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useDynamicImageText = () => {
    const location = useLocation();
    const [text, setText] = useState('');

    useEffect(() => {
        switch (location.pathname) {
            case '/Rendicion-Cuentas/2024':
                setText('Rendición de cuentas DNDA 2024');
                break;
            case '/Rendicion-Cuentas/2024/informes':
                setText('Informes 2024');
                break;
            case '/Rendicion-Cuentas/2024/informes/jurisdiccionales':
                setText('Subdirección de Asuntos Jurisdiccionales');
                break;
            case '/Rendicion-Cuentas/2024/informes/capacitacion':
                setText('Subdirección Técnica de Capacitación, Investigación y Desarrollo');
                break;
            case '/Rendicion-Cuentas/2024/informes/administrativa':
                setText('Subdirección Administrativa');
                break;
            case '/Rendicion-Cuentas/2024/informes/registro':
                setText('Oficina de Registro');
                break;
            case '/Rendicion-Cuentas/2024/informes/juridica':
                setText('Oficina Asesora Jurídica');
                break;
            case '/Rendicion-Cuentas/2024/informes/conciliacion-arbitraje':
                setText('Centro de Conciliación y Arbitraje');
                break;
            case '/Rendicion-Cuentas/2024/informes/ucsti':
                setText('Unidad de Comunicaciones, Servicio al Ciudadano y Tecnologías de la Información');
                break;
            case '/Rendicion-Cuentas/2024/informes/control-interno':
                setText('Oficina de Control Interno');
                break;
            default:
                setText('Rendición de cuentas 2024'); // Texto por defecto
        }
    }, [location.pathname]);

    return text;
};

export default useDynamicImageText;
