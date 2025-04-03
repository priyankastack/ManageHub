import React,{useContext, useState,useEffect}  from 'react';
import { TokenContext } from '../context/context';
const Contact=()=>{
    const {loginuser}=useContext(TokenContext);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
    //--------handling loggedinuser data in contact form
    useEffect(() => {
        if (loginuser) {
            setName(loginuser.username || "");  
            setEmail(loginuser.email || "");
        }
    }, [loginuser]);

    //-----handling contact form
    const submitHandler=async(e)=>{
        e.preventDefault();
        const userData={
          name,
          email,
          message
        }
        try{
            const response=await fetch("https://manage-hub-backend.vercel.app/api/contact",{
                method:"POST",
                headers:{
                "Content-Type":"application/json"  
                },
                body:JSON.stringify(userData),
            });
         if(response.ok){
            setName("");
            setEmail("");
            setMessage("");
            alert('Thanks for Contacting');
         }
        }
        catch(error){
           console.error(error);
               }
    }
    return(
        <>
        <div className=' bg-black h-full flex flex-row justify-center items-center gap-10 p-1'>
        <div className='p-10  '><img src='images/contact.png' className='h-100'></img></div>
            <div className=' max-h-full flex flex-col gap-15 text-white '>
                <h1 className='text-4xl font-semibold underline decoration-4 decoration-solid decoration-[#3a0ca3] underline-offset-4 '>Contact Form</h1>
                <form onSubmit={(e)=>submitHandler(e)} className='flex flex-col gap-2 ' >
                    <label>Name</label>
                    <input value={name} type='text' required onChange={(e)=>setName(e.target.value)} className='bg-[#353535] w-96 h-10 p-1 rounded-sm outline-none  '></input>
                    <label>Email</label>
                    <input value={email} type='email'  required onChange={(e)=>setEmail(e.target.value)} className='bg-[#353535] w-96 h-10 p-1  rounded-sm outline-none'></input>
                    <label>Message</label>
                    <textarea value={message}  required onChange={(e)=>setMessage(e.target.value)} className='bg-[#353535] w-96 h-30 p-1  rounded-sm outline-none'></textarea>
                    <button className='bg-[#3a0ca3] rounded-sm text-white w-24 h-8'>Submit</button>
                </form>
            </div>
            </div>
            </>
    )
}

export default Contact;