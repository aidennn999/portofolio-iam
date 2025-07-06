"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import {useLanguage} from "@/context/LanguageContext";
import { translations } from "@/lib/translation";


const Navbar = () => {
 const [scrolled, setScrolled] = useState(false);
 const {language, toggleLanguage} = useLanguage();
 const t = translations[language];

 useEffect(() => {
  const handleScroll = () => {
   setScrolled(window.scrollY > 10);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

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
    <div className="flex items-center space-x-6">
     <ul className="flex space-x-6">
      {t.nav.map((item) => (
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
     <button
      onClick={toggleLanguage}
      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium transition-colors duration-300 flex items-center">
      <span className="w-6">{language === "en" ? "🇮🇩" : "🇬🇧"}</span>
      <span className="ml-1">{language === "en" ? "ID" : "EN"}</span>
     </button>
    </div>
   </div>
  </nav>
 );
};

export default Navbar;
