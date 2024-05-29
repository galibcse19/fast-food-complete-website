import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from './Navber';

const Root = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <Navber ></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;