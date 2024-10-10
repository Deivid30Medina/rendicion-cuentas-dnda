import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useDynamicImageText = () => {
    const location = useLocation();
    const [text, setText] = useState('');

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setText('Rendición de cuentas DNDA 2024');
                break;
            case '/informes':
                setText('Informes 2024');
                break;
            case '/informes/jurisdiccionales':
                setText('Subdirección de Asuntos Jurisdiccionales');
                break;
            case '/informes/capacitacion':
                setText('Subdirección Técnica de Capacitación, Investigación y Desarrollo');
                break;
            case '/informes/administrativa':
                setText('Subdirección Administrativa');
                break;
            case '/informes/registro':
                setText('Oficina de Registro');
                break;
            case '/informes/juridica':
                setText('Oficina Asesora Jurídica');
                break;
            case '/informes/conciliacion-arbitraje':
                setText('Centro de Conciliación y Arbitraje');
                break;
            case '/informes/ucsti':
                setText('Unidad de Comunicaciones, Servicio al Ciudadano y Tecnologías de la Información');
                break;
            case '/informes/control-interno':
                setText('Oficina de Control Interno');
                break;
            default:
                setText('Rendición de cuentas'); // Texto por defecto
        }
    }, [location.pathname]);

    return text;
};

export default useDynamicImageText;
