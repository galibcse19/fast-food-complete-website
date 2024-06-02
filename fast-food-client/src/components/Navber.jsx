import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navber = () => {
    const {user,logOut}=useContext(AuthContext);

    const handelSignOut=()=>{
        logOut()
        .then(()=>{
            console.log('Log out successfully');
             
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const links = <>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        {
                            user && <><li><NavLink to={'/dashboard'}>Dashboard</NavLink></li></>
                        }
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                        
                        {
                            !user && <>
                            <li><NavLink to={'/login'}>LogIn</NavLink></li>
                            <li><NavLink to={'/register'}>Register</NavLink></li>
                            </>
                        }
                 </>
    return (
        <div >
            <div className="navbar bg-emerald-950">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Fast-Food</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                   {links}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user ? <>
                        <span className="mr-4">{user.email}</span>
                        <button onClick={handelSignOut} className="btn btn-outline bg-emerald-950 hover:bg-white text-white">Sign out</button>
                        {/* <a onClick={handelSignOut} className="btn">sign out</a> */}
                        </> 
                        : <Link to="/login"><button className="btn btn-outline bg-emerald-950 hover:bg-white text-white ">LOG IN</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;