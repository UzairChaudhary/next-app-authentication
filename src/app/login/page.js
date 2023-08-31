"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function LoginPage(){
    const [user, setuser] = React.useState({
        name: "",
        email: "",
        password: "",
    });

   
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const res = await axios.post("/api/users/signup", user);
        if(res.data.error){
            alert(res.data.error);
        }else{
           
        }
    }
    
    return(
        <div
        className="flex flex-col items-center  justify-center min-h-screen bg-[#14253c]" >
            <h1
            className="text-3xl text-white font-bold mb-4"
            >Login Page</h1>
            <form onSubmit={handleSubmit} className="text-black">
                <label
                className="text-white" htmlFor="email">Email:</label><br/>

                <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="email" placeholder="Email" value={user.email} onChange={(e)=>setuser({...user, email: e.target.value})} />
                <br></br>
                <label
                className="text-white" htmlFor="password">Password:</label><br/>
                <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="password" placeholder="Password" value={user.password} onChange={(e)=>setuser({...user, password: e.target.value})} />
                <br></br>

                <button className="text-white p-2 px-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="submit" >Login</button>

            </form>
            <Link
            className="text-white p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
             href="/signup">Signup</Link>
        </div>

    )
  
}
