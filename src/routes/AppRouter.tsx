import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/layout/Footer/Footer'
import Header from '../components/layout/Header/Header'
import Home from '../pages/Home/Home'
import Reports from '../pages/Reports/Reports'
import Ucsti from '../pages/Reports/UCSTI/Ucsti'

const AppRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/informes' element={<Reports></Reports>}>
                    <Route path='ucsti' element={<Ucsti></Ucsti>}></Route>
                    <Route path="*" element={<Reports></Reports>} />
                </Route>
                <Route path="*" element={<Home></Home>} />
            </Routes>
            <Footer />
        </>
    )
}

export default AppRouter
