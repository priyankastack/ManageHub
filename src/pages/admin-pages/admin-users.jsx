import React, { useState, useEffect, useContext } from "react";
import {useNavigate,Link} from "react-router-dom";
import { TokenContext } from "../../context/context";


const Adminusers = () => {
  
  const navigate=useNavigate();
  const [data, setData] = useState([]);
  const { token } = useContext(TokenContext);

 

  console.log("Token in Admin Panel:", token); // ✅ Debugging token
  useEffect(() => {
    const adminaccess = async () => {
      if (!token) {
        console.error("No token found!");
        return;
      }

      try {
        const response = await fetch("https://manage-hub-backend.vercel.app/api/admin/userdata", {
          method: "GET",
          headers: { 
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}` // ✅ Ensure token is included
          },
        });
        const result = await response.json();
        console.log("Admin API Response:", result); // ✅ Debug response
        if (response.ok) {
          setData(result.data);
          console.log(data);
        } else {
          navigate('*');
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    if (token) adminaccess(); // ✅ Ensure token is available before calling API
  }, []); //✅Add token as dependency

useEffect(()=>{
console.log(data);
  }),[token];

  const handleDelete=async(id)=>{
    try {
      const response=await fetch(`https://manage-hub-backend.vercel.app/api/admin/deletebyId/${id}`,{
        method: "DELETE",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      });
      const result = await response.json();
      setData((prevData) => prevData.filter((user) => user._id !== id));    
    } catch (error) {
        console.log(error);
    }
  
  }
  return (
    <>
    <div className="w-full h-110 overflow-scroll flex justify-center m-2">
    <table className=" border-collapse border border-gray-300 w-5xl ">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user) => (
              <tr key={user._id} className="text-center">
                <td className="border p-2">{user.username}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.phone}</td>
                <td className="border p-2">
                <Link to={`/admin/users/${user._id}/edit`} className="bg-blue-500 text-white px-3 py-1 mr-2 rounded cursor-pointer">
  Edit
</Link>

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
              <td colSpan="4" className="border p-2 text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
     
    </>
  );
};

export default Adminusers;
