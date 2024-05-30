import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';



const Register = () => {

    const {createUser}= useContext(AuthContext);
    const navigate= useNavigate();

    const handleRegister =event=>{
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
       
        createUser(email,password)
        .then((result)=>{
            const user= result.user;
            // console.log(user);
            navigate('/')
        })
        .catch((error)=>{
            console.log(error);
        })
         

    }
    return (
        <div className="flex justify-center  bg-green-400 w-full  lg:py-10 items-center text-white">
        <div className="bg-green-500 p-8 rounded-lg shadow-lg max-w-md lg:w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">REGISTER HERE</h2>
            <form onSubmit={handleRegister}>
            <div className="mb-4">
                <label className="label">
                Full Name
                </label>
                <input type="text" name="fullName"placeholder="Enter Your Full Name" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                required />
            </div>
            <div className="mb-4">
                <label className="label">
                User Name
                </label>
                <input type="text" name="username" placeholder="Enter User Name" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                required />
            </div>
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
            </div><div className="mb-4">
                <label className="label">
                Repeat Password
                </label>
                <input type="password" name="repeatPassword" placeholder="Repeat Password" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                required />
            </div>
            <button className="w-full btn btn-outline bg-emerald-950 text-white mt-4 px-16 text-lg hover:bg-white">REGISTER</button>
            <div className="my-4 "><Link to={'/login'}>If Already Register? Please  Click Here.</Link> </div>
            </form>
        </div>
</div>
    );
};

export default Register;