import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="bg-green-500 text-blue-50 px-4 sm:px-6 md:px-10 lg:px-16 py-3 flex items-center justify-between sticky top-0 z-50 border-b border-white/20">
      {/* Home */}
      <div className="text-xl hover:text-black">
        <Link to="/home">Home</Link>
      </div>

      {/* Hamburger button: only on small screens */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex md:gap-6">
        <Link to="/post" className="text-white hover:text-black ">
            Post
          </Link>
        <Link to="/messege" className="text-white hover:text-black">
            Messege
          </Link>
        <Link to="/me" className="text-white hover:text-black">
            Me
          </Link>  
          <Link to="/" className="text-white hover:text-black">
            Logout
          </Link>      
      </div>

      {/* Mobile sidebar menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-green-500 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } font-sans`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
            &times;
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col mt-10 gap-6 pl-6">
          <Link onClick={() => setIsOpen(false)} to="/post" className="text-white hover:text-black ">
            Post
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/messege" className="text-white hover:text-black">
            Messege
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/me" className="text-white hover:text-black">
            Me_page
          </Link>         
           <Link onClick={() => setIsOpen(false)} to="/" className="text-white hover:text-black">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;