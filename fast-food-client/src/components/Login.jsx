import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    const {userSignIn,signInWithGoogle}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleLogIn=event=>{
        event.preventDefault();
        const email= event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);

        userSignIn(email,password)
        .then((result)=>{
            const user=result.user;
            console.log(user);
            event.target.reset();
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const handelGoogleSignIn=()=>{

        signInWithGoogle()
        .then((result)=>{
            const user=result.user;
            console.log(user);
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className="flex justify-center  bg-green-400 text-white w-full  py-10 items-center">
            <div className="bg-green-500 p-8 rounded-lg shadow-lg max-w-md w-3/4">
                <h2 className="text-2xl font-bold mb-6 text-center">LOG IN HERE</h2>
                <form  onSubmit={handleLogIn}>
                <div className="mb-4">
                    <label className="label">
                    Email
                    </label>
                    <input type="email" name="email" placeholder="Enter Your Email" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                    required />
                </div>

                <div className="mb-4">
                    <label className="label">
                    Password
                    </label>
                    <input type="password" name="password" placeholder="Type Password" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                    required />
                </div> 
                <button className="w-full btn btn-outline bg-emerald-950 hover:bg-white text-white mt-4 px-16 text-lg">LOG IN</button>
                </form>
                <div className="flex justify-center my-2 items-center">
                    OR
                </div>
                <div className="flex justify-center mb-2 items-center">
                    <FaGoogle  onClick={handelGoogleSignIn} className="size-6 mr-4"/>
                    <FaFacebook className="size-7 mr-4"/>
                    <FaGithub className="size-7 mr-4"/>
                </div>
                 
                <div className="my-4"><Link to={'/register'}>If Not Register? Please  Click Here.</Link> </div>
            </div>
        </div>
    );
};

export default Login;