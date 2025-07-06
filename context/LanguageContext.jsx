"use client";

import {createContext, useContext, useState, useEffect} from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
 const [language, setLanguage] = useState("en"); // 'en' atau 'id'

 useEffect(() => {
  // Cek localStorage untuk preferensi bahasa
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage) {
   setLanguage(savedLanguage);
  }
 }, []);

 const toggleLanguage = () => {
  setLanguage((prev) => {
   const newLanguage = prev === "en" ? "id" : "en";
   localStorage.setItem("language", newLanguage);
   return newLanguage;
  });
 };

 return (
  <LanguageContext.Provider value={{language, toggleLanguage}}>
   {children}
  </LanguageContext.Provider>
 );
};

export const useLanguage = () => {
 return useContext(LanguageContext);
};
