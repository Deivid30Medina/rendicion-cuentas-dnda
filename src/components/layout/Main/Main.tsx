import ImagenWithText from '../../specific/ImagenWithText';
import useDynamicImageText from '../../../hooks/ui/useDynamicImageText';

type MainProps = {
    children: React.ReactNode; // Tipo de children
};

const Main = ({ children }: MainProps) => {
    const { text, image } = useDynamicImageText();

    return (
        <main className='w-screen h-auto'> 
            <ImagenWithText text={text} img={image} />
            <div className="w-screen px-5 xl:px-80 h-auto">
                {children} {/* Aquí se renderiza el contenido dinámico */}
            </div>
        </main>
    );
};

export default Main;
