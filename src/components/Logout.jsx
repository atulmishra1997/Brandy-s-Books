import React, { useContext } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"
    const handleLogout = () => {
        logOut().then(() => {
            //sign-out successful
            alert("Sign-Out SuccessFul!!!");
            navigate(from, {replace: true})
        })
        .catch((error) => {
            //An error 
        });

    }
  return (
    <div className='h-screen bg-slate-600 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout