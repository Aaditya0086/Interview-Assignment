import React, { useState } from 'react'
import Box from '@mui/system/Box';

const Login = () => {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleLogin = () => {
        console.log("Email: " + email + " " + "Password: " + password);
        if ((email === "gargaaditya.18@gmail.com") && (password === "Password@123")) {
            alert("Login Successful");
        }else {
            alert("Invalid Credentials");
        }

    }

  return (
    
    <>
    <Box sx={{display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
    textAlign: "left",

    }}>
      
      
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} style={{background: "lightGrey"}} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={e=>setPassword(e.target.value)}/>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
    </Box>
    </>
  )
}

export default Login
