import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";


export default function Login() {


const [email,setEmail]=useState("")
const [password,setPassword]=useState("")




  return (
    
    <>
    <Navbar/>
    <div className="container py-7 px-3">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">Login Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8  text-violet-700 hover:scale-110 transition-transform duration-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


        </h1>
        <form className="space-y-3 my-4">

            <div className="email">
                <input type="email" className="form-control" placeholder="Your Email Address" name="email" value={email} 
                onChange={function(e){setEmail(e.target.value)}} 
                />
            </div>
            <div className="password">
                <input type="password" className="form-control" placeholder="Your password" name="password" value={password}
                onChange={function(e){setPassword(e.target.value)}}  />
            </div>
            <button className="btn bg-violet-600 text-white hover:bg-violet-800 transition-colors duration-300" type="submit">Login</button>

        </form>
    </div>
    </>
  )
}
