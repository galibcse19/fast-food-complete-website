import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser= (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userSignIn = (email,password)=>{
        setLoading(true);
        console.log(email,password);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const userInfo={user,createUser,loading,userSignIn,signInWithGoogle,logOut}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
// AuthProvider.propTypes={
//     children: PropTypes.node,
//  }