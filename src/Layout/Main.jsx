import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noFooter = location.pathname.includes('signup')
    const noHeader = location.pathname.includes('signup')
    return (
        <div className='bg-[#07332F]  max-w-screen-2xl mx-auto'>
           { noHeader || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;