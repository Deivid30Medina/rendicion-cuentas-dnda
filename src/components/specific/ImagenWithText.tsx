import Img from '../common/Img/Img'

interface Props {
    text: string,
}

const ImagenWithText = ({ text }: Props) => {
    return (
        <>
            <div className='w-screen h-auto relative'>
                <Img src="../Imgs/BannerGlobal.jpg" alt='Redición de cuentas' className='h-full w-full' />
                <h1 className='xl:absolute xl:right-0 xl:top-1/2 text-white xl:px-8 xl:py-4 xl:text-left xl:text-5xl py-2 text-4xl text-center font-semibold bg-color-dnda '>{text}</h1>
            </div>
        </>
    )
}

export default ImagenWithText
