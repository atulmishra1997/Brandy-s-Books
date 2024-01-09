import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";



//react icons
import { FaBarsStaggered, FaCartPlus, FaUser, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //navItem here
  const navItems = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "About",
      path: "/about",
    },
    {
      link: "Shop",
      path: "/shop",
    },
    {
      link: "Sell Your Book",
      path: "/admin/dashboard",
    },
    {
      link: "Blog",
      path: "/blog",
    },
    { 
      link: <button className="flex items-center"><FaCartPlus className=" w-5 hover:text-cyan-800"/>Cart</button>,
      path: "/cart"
    },

  ];
  return (
    <header className="z-50 w-full  sticky bg-[#16bdca] top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 h-32 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-cyan-300" : ""
        }`}
      >
        <div className=" flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link
            to="/"
            className=" text-2xl font-bold text-cyan-800 flex items-center gap-3 "
          >
            <img src={logo} className="flex w-28 h-28" />
            Brandy's Books
          </Link>

          {/* nav items for large devices */}

          <ul className=" md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className=" block text-base text-black uppercase cursor-pointer hover:text-cyan-800"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for lg devices */}

          <div className=" space-x-12 hidden lg:flex items-center">
            <button>
              <FaUser className=" w-5 hover:text-cyan-800" />
            </button>
            {user?.displayName || "User"}
          </div>

          {/* menu button for mobile devices */}

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className=" h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className=" h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* navItems for small devices */}
        <div
          className={`space-y-4 px-4 py-9 bg-cyan-800 ${
            isMenuOpen ? "block fixed top-[7rem] right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link 
            onClick={toggleMenu}
              key={path}
              to={path}
              className=" block text-base text-white uppercase cursor-pointer hover:text-yellow-400"
            >
              {link}
            </Link>
          ))}
          <p className="block text-base text-white uppercase cursor-pointer hover:text-yellow-400">{user?.displayName || ""}</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
