import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Reports from '../pages/Reports/Reports'
import Ucsti from '../pages/Reports/UCSTI/Ucsti'
import MainLayout from '../components/layout/MainLayout/MainLayout'

const AppRouter = () => {
    return (
        <>
            <MainLayout>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/informes' element={<Reports />}></Route>
                    <Route path='/informes/jurisdiccionales' element={<Ucsti />}></Route>
                    <Route path='/informes/capacitacion' element={<Ucsti />}></Route>
                    <Route path='/informes/administrativa' element={<Ucsti />}></Route>
                    <Route path='/informes/registro' element={<Ucsti />}></Route>
                    <Route path='/informes/juridica' element={<Ucsti />}></Route>
                    <Route path='/informes/conciliacion-arbitraje' element={<Ucsti />}></Route>
                    <Route path='/informes/ucsti' element={<Ucsti />}></Route>
                    <Route path='/informes/control-interno' element={<Ucsti />}></Route>
                    <Route path="*" element={<Home></Home>} />
                </Routes>
            </MainLayout>
        </>
    )
}

export default AppRouter
