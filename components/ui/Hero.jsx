"use client";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {useLanguage} from "@/context/LanguageContext";
import { translations } from "@/lib/translation";


const Hero = () => {
 const ref = useRef(null);
 const {language} = useLanguage();
 const t = translations[language].hero;

 const {scrollYProgress} = useScroll({
  target: ref,
  offset: ["start start", "end start"],
 });

 const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
 const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
 const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

 return (
  <section
   ref={ref}
   id="hero"
   className="relative flex items-center justify-center h-screen bg-cover bg-center text-white overflow-hidden"
   style={{backgroundImage: 'url("/images/hero-bg.jpg")'}}>
   <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

   <motion.div
    className="absolute inset-0 bg-cover bg-center"
    style={{
     backgroundImage: 'url("/images/hero-bg.jpg")',
     y: yBg,
     scale: 1.2,
    }}
   />

   <motion.div
    className="relative z-10 text-center px-4"
    style={{y: yText, opacity: opacityText}}>
    <motion.h1
     initial={{opacity: 0, y: 20}}
     animate={{opacity: 1, y: 0}}
     transition={{duration: 0.8}}
     className="text-5xl md:text-7xl font-bold mb-4"
     dangerouslySetInnerHTML={{
      __html: t.title
       .replace(/<1>(.*?)<\/1>/g, '<span class="text-blue-400">$1</span>')
       .replace(/<3>(.*?)<\/3>/g, '<span class="text-blue-400">$1</span>'),
     }}
    />
    <motion.p
     initial={{opacity: 0, y: 20}}
     animate={{opacity: 1, y: 0}}
     transition={{duration: 0.8, delay: 0.2}}
     className="text-xl md:text-2xl mb-8">
     {t.subtitle}
    </motion.p>
    <motion.div
     initial={{opacity: 0, y: 20}}
     animate={{opacity: 1, y: 0}}
     transition={{duration: 0.8, delay: 0.4}}>
     <a
      href="#projects"
      className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 hover:scale-105 transform">
      {t.button}
     </a>
    </motion.div>
   </motion.div>

   <motion.div
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-lg flex flex-col items-center"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 1.5}}>
    <p>{t.scroll}</p>
    <motion.div
     animate={{y: [0, 10, 0]}}
     transition={{repeat: Infinity, duration: 1.5}}
     className="mt-2">
     <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 5v14M19 12l-7 7-7-7" />
     </svg>
    </motion.div>
   </motion.div>
  </section>
 );
};

export default Hero;
