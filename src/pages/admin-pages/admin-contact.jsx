import React ,{useState,useEffect} from 'react';
import { useContext } from 'react';
import { TokenContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const Admincontact=()=>{
    const navigate=useNavigate();
    const [data,setData]=useState("");
const{token,storeToken}=useContext(TokenContext);


  // Retrieve token from localStorage on page load
  useEffect(() => {
    const storedToken = localStorage.getItem("Token");
    if (storedToken) {
      storeToken(storedToken);
    } else {
      navigate("/login"); // Redirect to login if no token is found
    }
  }, [storeToken]);
    useEffect(()=>{
        const adminaccess=async()=>{
            try {
               
                const response=await fetch("http://localhost:8000/api/admin/contactdata",{
                    method:"GET",
                    headers: {
                        Authorization: `Bearer ${token}` // Ensure token is stored and retrieved properly
                      }
                });
               const result=await response.json();
               console.log(result);
                if(response.ok){
                 setData(result.data);
                }
                else{
                    navigate('*');
                }
            } catch (error) {
                console.log(error)
            }
        }
        adminaccess();
        },[]);
       useEffect(()=>{
        console.log(data);
        },[data]);


        const handleDelete=async(Contactid)=>{
try {
  const response=await fetch(`http://localhost:8000/api/admin/deleteContact/${Contactid}`,{
    method:"DELETE",
    headers: { 
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  });
  if(!response.ok){  
    return alert('Deletion failed!');
  }
  const result=await response.json();
  alert(result.message);
  setData((prevData) => prevData.filter((user) => user._id !==Contactid));  


} catch (error) {
  console.log(error.message);
}
        }


return(
    <>
  <div className=' overflow-scroll w-full h-110 m-2 flex justify-center'>
  <table className=" bg-white border border-gray-300 shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Message</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.message}</td>
                <td className="border p-2">
                  <button
                    onClick={(e) => handleDelete(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center p-4">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
  </div>
    </>
)
}

export default Admincontact;