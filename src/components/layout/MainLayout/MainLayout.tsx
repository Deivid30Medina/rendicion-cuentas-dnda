import { ReactNode } from "react";
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Main from "../Main/Main"

interface MainLayoutProps {
    children: ReactNode; // Define el tipo de children
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default MainLayout
