import React,{useContext, useEffect} from 'react';
import Sidebar from '../componenets/admin-components/sidebar';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { TokenContext } from '../context/context';


const Adminlayout=()=>{
    const navigate=useNavigate();
const {loginuser,loading}=useContext(TokenContext);
if(loading){
    return<h1>Loading...</h1>
}
if(!loginuser.isAdmin){
 return navigate('/login');
}
    return(
        <>
        <div className='flex flex-row'>
        <Sidebar/>
        <Outlet/>
        </div>
        </>
    )
}

export default Adminlayout;