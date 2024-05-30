import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from './Navber';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='w-3/4 mx-auto text-white'>
            <Navber ></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;