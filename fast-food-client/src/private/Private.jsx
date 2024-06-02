import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

 
 const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner text-warning"></span>
    }
    if(user){
        return children;
    }
    return  <Navigate to="/login"></Navigate>;
    // return isAuthenticated ? children : <Navigate to="/login" />;
 };

export default Private;