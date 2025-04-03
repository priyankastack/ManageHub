import React,{useState}  from 'react';
import { useNavigate } from 'react-router-dom';

const Register=()=>{
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");
    const register= async(e)=>{
        e.preventDefault();
        const userData={
            username,
            email,
            password,
            phone
        }
        try{
            const response=await fetch("https://manage-hub-backend.vercel.app/api/register",{
                method:"POST",
                headers:{
                "Content-Type":"application/json"  
                },
                body:JSON.stringify(userData),
            });
        
            if(response.ok){
               setUsername("");
                setEmail("");
                setPassword("");
                setPhone("");
                navigate("/login");
            }else{
                alert(response.message);
            }
        }
        catch(error){
            console.log(error);
        }
        
    }

    return(
        <div className=' bg-black h-full flex flex-row justify-center items-center gap-10 p-1'>
        <div className='p-10  '><img src='images/register.png' className='h-100'></img></div>
            <div className=' max-h-full flex flex-col gap-15 text-white '>
                <h1 className='text-4xl font-semibold underline decoration-4 decoration-solid decoration-[#3a0ca3] underline-offset-4 '>Register Form</h1>
                <form onSubmit={(e)=>register(e)} className='flex flex-col gap-2 ' >
                    <label>Username</label>
                    <input value={username} autoComplete='username' type='text' required onChange={(e)=>setUsername(e.target.value)} className='bg-[#353535] w-96 h-10 p-1 rounded-sm outline-none  '></input>
                    <label>Email</label>
                    <input value={email} autoComplete='password' type='email'  required onChange={(e)=>setEmail(e.target.value)} className='bg-[#353535] w-96 h-10 p-1  rounded-sm outline-none'></input>
                    <label>Password</label>
                    <input value={password} autoComplete="new-password"  type='password'  required onChange={(e)=>setPassword(e.target.value)} className='bg-[#353535] w-96 h-10 p-1  rounded-sm outline-none'></input>
                    <label>Phone</label>
                    <input value={phone} autoComplete='phone' type='phone'  required onChange={(e)=>setPhone(e.target.value)} className='bg-[#353535] w-96 h-10 p-1  rounded-sm outline-none'></input>
                    <button className='bg-[#3a0ca3] rounded-sm text-white w-24 h-8'>Register</button>
                </form>
            </div>
            </div>
    )
}

export default Register;