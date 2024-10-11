import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Reports from '../pages/Reports/Reports'
import Ucsti from '../pages/Reports/UCSTI/Ucsti'
import MainLayout from '../components/layout/MainLayout/MainLayout'
import Jurisdiccionales from '../pages/Reports/Jurisdicionales/Jurisdiccionales'
import Capacitacion from '../pages/Reports/Capacitacion/Capacitacion'
import SubdireccionAdministrativa from '../pages/Reports/SubdireccionAdministrativa/SubdireccionAdministrativa'
import Registro from '../pages/Reports/Registro/Registro'
import Juridica from '../pages/Reports/Juridica/Juridica'
import Conciliacion from '../pages/Reports/Conciliacion/Conciliacion'
import ControlInterno from '../pages/Reports/ControlInterno/ControlInterno'

const AppRouter = () => {
    return (
        <>
            <MainLayout>
                <Routes>
                    <Route path='/Rendicion-Cuentas/2024/' element={<Home />}></Route>
                    <Route path='/Rendicion-Cuentas/2024/informes' element={<Reports />}></Route>
                    <Route path='/Rendicion-Cuentas/2024/informes/jurisdiccionales' element={<Jurisdiccionales />}></Route>
                    <Route path='/Rendicion-Cuentas/2024/informes/capacitacion' element={<Capacitacion />}></Route>
                    <Route path='/Rendicion-Cuentas/2024/informes/administrativa' element={<SubdireccionAdministrativa />}></Route>
                    <Route path='/Rendicion-Cuentas/2024/informes/registro' element={<Registro />}></Route>
                    <Route path='/Rendicion-Cuentas/2024/informes/juridica' element={<Juridica />}></Route>
                    <Route path='/Rendicion-Cuentas/2024/informes/conciliacion-arbitraje' element={<Conciliacion />}></Route>
                    <Route path='/Rendicion-Cuentas/2024/informes/ucsti' element={<Ucsti />}></Route>
                    <Route path='/Rendicion-Cuentas/2024/informes/control-interno' element={<ControlInterno />}></Route>
                    <Route path="*" element={<Home></Home>} />
                </Routes>
            </MainLayout>
        </>
    )
}

export default AppRouter
