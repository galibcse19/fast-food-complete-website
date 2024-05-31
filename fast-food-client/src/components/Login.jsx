import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase/firebase.config';
 

const Login = () => {
    const {userSignIn,signInWithGoogle}=useContext(AuthContext);
    const navigate=useNavigate();
    const emailRef= useRef(null);
    const handleLogIn=event=>{
        event.preventDefault();
        const email= event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);

        userSignIn(email,password)
        .then((result)=>{
            const user=result.user;
            console.log(user);
            if(user.emailVerified){
                console.log('success');
                event.target.reset();
                navigate('/');
            }
            else{
                alert('Please,verify your email.')
            }
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
    const handleResetPassword=(event)=>{
        const email= emailRef.current.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!email){
            console.log('enter your email');
            return;
        }
        else if (!emailRegex.test(email)){
            console.log('Provide a valid email');
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email');
            })
            .catch((error) => {
                console.log(error);
            });
         
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
                    <input type="email" ref={emailRef} name="email" placeholder="Enter Your Email" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                    required />
                </div>

                <div className="">
                    <label className="label">
                    Password
                    </label>
                    <input type="password" name="password" placeholder="Type Password" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                    required />
                </div> 
                <div>
                    <Link onClick={handleResetPassword}>Forget Password?</Link>
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