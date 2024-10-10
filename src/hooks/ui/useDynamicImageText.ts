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
      case '/informes/ucsti':
        setText('UCSTI');
        break;
      case '/informes/registro':
        setText('Registro');
        break;
      default:
        setText('Rendición de cuentas'); // Texto por defecto
    }
  }, [location.pathname]);

  return text;
};

export default useDynamicImageText;
