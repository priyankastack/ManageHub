import React, { useContext } from "react";
import "../App.css";
import { Link, NavLink} from "react-router-dom";
import { TokenContext } from "../context/context";

const Header = () => {
  const {token,logout}= useContext(TokenContext);

  return (
    <>
      <nav className=" flex flex-row justify-center items-center gap-100 bg-black h-20">
        <Link
          to="."
          className="text-3xl font-bold text-[#3a0ca3] cursor-pointer"
        >
          Logo
        </Link>
        <div className=" flex flex-row gap-5 text-lg font-medium">
          <NavLink
            to="."
            className={({ isActive }) =>
              isActive
                ? "text-white underline decoration-solid decoration-2 decoration-[#3a0ca3] underline-offset-8"
                : " text-[#3a0ca3] "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white underline decoration-solid decoration-2 decoration-[#3a0ca3] underline-offset-8"
                : " text-[#3a0ca3] "
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-white underline decoration-solid decoration-2 decoration-[#3a0ca3] underline-offset-8"
                : " text-[#3a0ca3] "
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white underline decoration-solid decoration-2 decoration-[#3a0ca3] underline-offset-8"
                : " text-[#3a0ca3] "
            }
          >
            Contact
          </NavLink>
          {token ? (
            <button onClick={(e)=>logout(e)} className="bg-[#3a0ca3] text-white rounded-sm w-30 h-10 text-center cursor-pointer">
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline decoration-solid decoration-2 decoration-[#3a0ca3] underline-offset-8"
                    : " text-[#3a0ca3] "
                }
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline decoration-solid decoration-2 decoration-[#3a0ca3] underline-offset-8"
                    : " text-[#3a0ca3] "
                }
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
