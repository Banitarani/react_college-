import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import ShopContext from "../context/ShopContext";

const Navbar = () => {
  const { shop, logoutShop } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutShop();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-500 text-white p-2 shadow-md w-full overflow-x-auto">
      <div className="flex justify-between items-center space-x-4">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/stockmate_icon.png"
            alt="StockMate Logo"
            className="h-14 w-14 rounded-full shadow-md bg-white"
          />
          <span className="text-3xl font-bold">StockMate</span>
        </Link>

        {/* Additional Navigation Links */}
        <div className="flex space-x-6 flex-wrap ">          
          <NavLink
            to="/features"
            className={({ isActive }) =>
              `hover:text-gray-200 px-3 py-2 rounded-md ${
                isActive ? "bg-blue-800" : ""
              }`
            }
          >
            Features
          </NavLink>
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              `hover:text-gray-200 px-3 py-2 rounded-md ${
                isActive ? "bg-blue-800" : ""
              }`
            }
          >
            Solutions
          </NavLink>
          <NavLink
            to="/integrations"
            className={({ isActive }) =>
              `hover:text-gray-200 px-3 py-2 rounded-md ${
                isActive ? "bg-blue-800" : ""
              }`
            }
          >
            Integrations
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `hover:text-gray-200 px-3 py-2 rounded-md ${
                isActive ? "bg-blue-800" : ""
              }`
            }
          >
            Resources
          </NavLink>
        </div>
        
        {/* Navigation Links (Only for logged-in shops) */}
        {shop && (
          <div className="flex space-x-6 flex-wrap">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-200 px-3 py-2 rounded-md ${
                  isActive ? "bg-blue-800" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                `hover:text-gray-200 px-3 py-2 rounded-md ${
                  isActive ? "bg-blue-800" : ""
                }`
              }
            >
              Inventory
            </NavLink>
            <NavLink
              to="/warehouses"
              className={({ isActive }) =>
                `hover:text-gray-200 px-3 py-2 rounded-md ${
                  isActive ? "bg-blue-800" : ""
                }`
              }
            >
              Warehouses
            </NavLink>
          </div>
        )}

        {/* Authentication Section */}
        <div>
          {shop ? (
            <div className="flex items-center space-x-4">
              <span className="text-lg">Welcome, {shop.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `bg-gray-200 text-blue-600 px-4 py-2 rounded-md ${
                    isActive ? "bg-gray-400" : ""
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `bg-gray-200 text-blue-600 px-4 py-2 rounded-md ${
                    isActive ? "bg-gray-400" : ""
                  }`
                }
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
