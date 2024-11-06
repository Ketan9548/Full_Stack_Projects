import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-zinc-700 w-screen p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Library</div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div
            className={`md:flex space-x-6 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <NavLink
              to="/home"
              className="text-white hover:text-gray-300 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="#books"
              className="text-white hover:text-gray-300 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Books
            </NavLink>
            <NavLink
              to="#categories"
              className="text-white hover:text-gray-300 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </NavLink>
            <NavLink
              to="#about"
              className="text-white hover:text-gray-300 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search books..."
              className="px-3 py-1 rounded-md outline-none"
            />
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <NavLink
            to="/home"
            className="block text-white hover:text-gray-300 transition duration-200 p-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="#books"
            className="block text-white hover:text-gray-300 transition duration-200 p-2"
            onClick={() => setIsOpen(false)}
          >
            Books
          </NavLink>
          <NavLink
            to="#categories"
            className="block text-white hover:text-gray-300 transition duration-200 p-2"
            onClick={() => setIsOpen(false)}
          >
            Categories
          </NavLink>
          <NavLink
            to="#about"
            className="block text-white hover:text-gray-300 transition duration-200 p-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
