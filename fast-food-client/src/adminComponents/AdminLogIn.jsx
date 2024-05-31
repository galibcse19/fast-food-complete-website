import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

const AdminLogIn = () => {
    const emailRef= useRef(null);
    const passwordRef=useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleAdminLohIn=(event)=>{
        event.preventDefault();
        const email= emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(email,password);
        if(email==='admin123@gmail.com' && password==='admin123'){
              setIsLoggedIn(true);
        }
        else{
            alert('Incorrect email or password');
        }
    };
    if(isLoggedIn) {
        return <AdminDashboard></AdminDashboard>;
    }
  
    return (
        <div className="flex justify-center  bg-green-400 text-white w-3/4 mx-auto  py-10 items-center">
            <div className="bg-green-500 p-8 rounded-lg shadow-lg max-w-md w-3/4">
                <h2 className="text-2xl font-bold mb-6 text-center">LOG IN AS ADMIN</h2>
                <form onSubmit={handleAdminLohIn}>
                <div className="mb-4">
                    <label className="label">
                    Email
                    </label>
                    <input type="email" ref={emailRef} name="email" placeholder="Enter Your Email" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                    required />
                </div>

                <div className="">
                    <label className="label">
                    Password
                    </label>
                    <input type="password" ref={passwordRef} name="password" placeholder="Type Password" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                    required />
                </div> 
                <button  className="w-full btn btn-outline bg-emerald-950 hover:bg-white text-white mt-4 px-16 text-lg">ADMIN LOG IN</button>
                </form>
                <Link to={'/'}><button className="w-full btn btn-outline bg-emerald-950 hover:bg-white text-white mt-4 px-16 text-lg">HOME</button></Link>
                
            </div>
            
        </div>
    );
};

export default AdminLogIn;