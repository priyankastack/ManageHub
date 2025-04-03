import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiUsers } from "react-icons/hi";
import { RiContactsBookLine } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";


const Sidebar=()=>{
    return(
        <>
       <div className='h-115 w-60 bg-black flex flex-col justify-items-start gap-10 items-center '>
<NavLink to='users' className={({isActive})=>isActive?"  text-white underline decoration-solid decoration-2 decoration-[#3a0ca3] underline-offset-8 flex justify-center items-center gap-2 text-2xl" :" text-[#3a0ca3] cursor-pointer flex justify-center items-center gap-2 text-xl"}><HiUsers/> Users</NavLink>
       <NavLink to='dashboard' className={({isActive})=>isActive?"  text-white underline decoration-solid decoration-2 decoration-[#3a0ca3] underline-offset-8 flex justify-center items-center gap-2 text-xl" :" text-[#3a0ca3] cursor-pointer flex justify-center items-center gap-2 text-xl"}> <BiSolidDashboard />
       Dashboard</NavLink>
       <NavLink to='contact'className={({isActive})=>isActive?"  text-white underline decoration-solid decoration-2 decoration-[#3a0ca3] underline-offset-8 flex justify-center items-center gap-2 text-xl" :" text-[#3a0ca3] cursor-pointer flex justify-center items-center gap-2 text-xl"}><RiContactsBookLine /> Contact-Details</NavLink>
       </div>
        </>
    )
}


export default Sidebar