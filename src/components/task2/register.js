import React from 'react'
import Box from '@mui/system/Box';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [password, setPassword] = useState();

    const handleLoginClick = () => {
        navigate("/login");
    }

    const handleSignUp = () => {

        if (!firstname || !email || !password) {
            alert("Please fill in all required fields.");
            return;
        }

        const confirmed = window.confirm(`Please confirm your details:\n\nFirst Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nPassword: ${password}`);
    
        if (confirmed) {
        console.log(firstname);
        console.log(lastname);
        console.log(email);
        console.log(password);
        navigate("/login");
        }
        
    }

    const handleForm = (event) => {
        event.preventDefault();
    }

  return (
    
    <>
    <Box sx={{display: "flex",
    justifyContent: "center",
    textAlign: "left",
    alignItems: "center",
    height: "100vh",

    }}>
      
      
      <div className="w-full max-w-xs">
      <form onSubmit={handleForm} style={{ background: "lightGrey" }} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
          First Name*
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="First Name*" onChange={e=>setFirstname(e.target.value)} required/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
          Last Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last Name" onChange={e=>setLastname(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email*
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email*" onChange={e=>setEmail(e.target.value)} required/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password*
          </label>
          <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={e=>setPassword(e.target.value)} required/>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button" onClick={handleSignUp}>
            Sign Up
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </form>
    </div>
    </Box>
    </>
  )
}

export default Register
