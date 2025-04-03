import React,{useState,useContext}  from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../context/context';

const Login=()=>{
const {storeToken}=useContext(TokenContext);
const navigate=useNavigate();
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const login=async(e)=>{
        e.preventDefault();
        const userData={
        email,password
        }
        try{
            const response=await fetch("http://localhost:8000/api/login",{
                method:"POST",
                headers:{
                "Content-Type":"application/json"  
                },
                body:JSON.stringify(userData),
            });
            const msg=await response.json();
            console.log(msg);
            if(response.ok){
                console.log(msg.token);
                storeToken(msg.token);
                setEmail("");
                setPassword("");
               navigate("/home");
            }
            else{
                alert("login failed");
            }
        } catch (error) {
           console.error(error); 
        } 
    }
    return(
        <>
         <div className=' bg-black h-full flex flex-row justify-center items-center gap-10 p-1'>
        <div className='p-10  '><img src='images/login.png' className='h-100'></img></div>
            <div className=' max-h-full flex flex-col gap-15 text-white '>
                <h1 className='text-4xl font-semibold underline decoration-4 decoration-solid decoration-[#3a0ca3] underline-offset-4 '>Login Form</h1>
                <form onSubmit={(e)=>login(e)} className='flex flex-col gap-2 ' >
                   
                    <label>Email</label>
                    <input value={email} autoComplete='email' type='email'  required onChange={(e)=>setEmail(e.target.value)} className='bg-[#353535] w-96 h-10 p-1  rounded-sm outline-none'></input>
                    <label>Password</label>
                    <input value={password} autoComplete="new-password"  type='password'  required onChange={(e)=>setPassword(e.target.value)} className='bg-[#353535] w-96 h-10 p-1  rounded-sm outline-none'></input>
                    <button className='bg-[#3a0ca3] rounded-sm text-white w-24 h-8'>Log in</button>
                </form>
            </div>
            </div></>
    )
}

export default Login;