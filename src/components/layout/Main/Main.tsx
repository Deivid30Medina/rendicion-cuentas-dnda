import ImagenWithText from '../../specific/ImagenWithText';
import useDynamicImageText from '../../../hooks/ui/useDynamicImageText';

type MainProps = {
  children: React.ReactNode; // Tipo de children
};

const Main = ({ children }: MainProps) => {
  const text = useDynamicImageText();

  return (
    <main className='w-screen h-auto'>
      <ImagenWithText text={text} />
      {children} {/* Aquí se renderiza el contenido dinámico */}
    </main>
  );
};

export default Main;
