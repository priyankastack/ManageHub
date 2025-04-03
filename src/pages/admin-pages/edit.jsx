import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TokenContext } from "../../context/context";

const Edit = () => {
  const { token } = useContext(TokenContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  // Redirect to login if no token is found
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) return; // Ensure token is available before making the request

      setLoading(true);
      try {
        const response = await fetch(`https://manage-hub-backend.vercel.app/api/admin/user/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (response.ok) {
          setUsername(result.data.username);
          console.log(result.data.username);
          setEmail(result.data.email);
          setPhone(result.data.phone);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id, token]); // Only run when `id` or `token` changes

  // Handle form submission
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://manage-hub-backend.vercel.app/api/admin/updatebyId/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, email, password, phone }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("User updated successfully!");
        navigate("/admin/users"); // Redirect after successful update
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (loading) {
    return <p>Loading user data...</p>;
  }

  return (
    <>
      <form onSubmit={handleEdit} className="flex flex-col gap-2">
        <label>Username</label>
        <input
          value={username}
          autoComplete="username"
          type="text"
          required
          onChange={(e) => setUsername(e.target.value)}
          className="bg-[#353535] w-96 h-10 p-1 rounded-sm outline-none"
        />
        <label>Email</label>
        <input
          value={email}
          autoComplete="email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#353535] w-96 h-10 p-1 rounded-sm outline-none"
        />
        <label>Password</label>
        <input
          value={password}
          autoComplete="new-password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[#353535] w-96 h-10 p-1 rounded-sm outline-none"
        />
        <label>Phone</label>
        <input
          value={phone}
          autoComplete="tel"
          type="tel"
          required
          onChange={(e) => setPhone(e.target.value)}
          className="bg-[#353535] w-96 h-10 p-1 rounded-sm outline-none"
        />
        <button className="bg-[#3a0ca3] rounded-sm text-white w-24 h-8">Edit</button>
      </form>
    </>
  );
};

export default Edit;
