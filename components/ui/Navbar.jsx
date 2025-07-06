"use client"

import Link from "next/link";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";

const Navbar = () => {
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
   setScrolled(window.scrollY > 10);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const navItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#about"},
  {name: "Projects", href: "#projects"},
  {name: "Contact", href: "#contact"},
 ];

 return (
  <nav
   className={`fixed w-full z-50 transition-all duration-300 ${
    scrolled
     ? "bg-white/90 backdrop-blur-md shadow-md py-3"
     : "bg-white/80 backdrop-blur-sm py-4"
   }`}>
   <div className="container mx-auto flex justify-between items-center px-4">
    <Link
     href="/"
     className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
     Aiden.Porto
    </Link>
    <ul className="flex space-x-6">
     {navItems.map((item) => (
      <li key={item.name}>
       <Link
        href={item.href}
        className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 px-2 py-1">
        {item.name}
        <motion.span
         layoutId="nav-underline"
         className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"
         initial={{scaleX: 0}}
         whileInView={{scaleX: 1}}
         transition={{duration: 0.3}}
        />
       </Link>
      </li>
     ))}
    </ul>
   </div>
  </nav>
 );
};

export default Navbar;
