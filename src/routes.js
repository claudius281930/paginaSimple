import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Portifolio from './pages/Portifolio';
import SuperCilios from './pages/SuperCilios';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';



function RoutesApp() {
    return (
        <BrowserRouter>

            <Logo />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/supercilios' element={<SuperCilios />} /> 
                <Route path='/portifolio' element={<Portifolio />} /> 
                <Route path='/contato' element={<Contact />} /> 
                <Route path='*' element={<Error />} />
                <Route path='/instagram' element={<Contact />} />
                <Route path='/facebook' element={<Contact />} />
                <Route path='/whatsapp' element={<Contact />} />
            </Routes>
            <Footer />

        </BrowserRouter>
    )
}
export default RoutesApp;
