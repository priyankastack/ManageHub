import React, { createContext, useState, useEffect, useCallback } from 'react';

export const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [loginuser, setLoginuser] = useState("");
  const [loading, setLoading] = useState(true);

  // Store token in localStorage
  const storeToken = (newToken) => {
    localStorage.setItem("Token", newToken);
    setToken(newToken);
  };

  // Logout function
  const logout = () => {
    const isConfirm = window.confirm("Are you sure?");
    if (isConfirm) {
      localStorage.removeItem("Token");
      setToken("");
      window.location.href = "/login";
    } else {
      alert("You are still logged in!");
    }
  };

  // Fetch logged-in user details
  const loggeduser = useCallback(async () => {
    if (!token) return; // Avoid unnecessary API calls if token is empty

    setLoading(true);
    try {
      const response = await fetch("https://manage-hub-backend.vercel.app/api/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const userData = await response.json();
        setLoginuser(userData.data);
      } else {
        setLoginuser(null);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  }, [token]); // Dependency on `token`

  // Fetch token from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("Token");
    if (storedToken) {
      setToken(storedToken); // Only setting token, not calling API yet
    }
  }, []);

  // Fetch user data when token is available
  useEffect(() => {
    if (token) {
      loggeduser();
    }
  }, [token, loggeduser]); // Use `loggeduser` as a dependency to avoid unnecessary re-renders

  return (
    <TokenContext.Provider value={{ token, storeToken, logout, loginuser, setLoginuser, loading }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
