import React from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import Dashboard from './Dashboard';

const Home = () => {
    return (
        <div>
            <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/RjVjj3c/pexels-horizon-content-2100060-3762069.jpg)'}}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold text-white ">TASTE ME - HOPE YOU FEEL BATTER.</h1>
                <p className="mb-5 text-white">Peaches are juicy and delicious fruits known for their sweet flavor and velvety skin.They are typically orange or pinkish in color and are enjoyed fresh, canned, or in various dishes like pies, cobblers, and salads.</p>
                <NavLink to={''}><button className="btn btn-outline bg-emerald-950 hover:bg-white text-white px-16 text-lg">ORDER NOW</button></NavLink>
                </div>
            </div>
        </div>
        <div className="bg-emerald-950">
            {/* <Card ></Card>
            <Contact></Contact> */}
        </div>
        </div>
        <Dashboard></Dashboard>
        <Contact></Contact>
        </div>
    );
};

export default Home;