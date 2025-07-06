"use client";
import Image from "next/image";
import {motion} from "framer-motion";
import {useLanguage} from "@/context/LanguageContext";
import {translations} from "@/lib/translation";

const Projects = () => {
 const {language} = useLanguage();
 const t = translations[language].projects;

 const container = {
  hidden: {opacity: 0},
  show: {
   opacity: 1,
   transition: {
    staggerChildren: 0.2,
   },
  },
 };

 const item = {
  hidden: {opacity: 0, y: 50},
  show: {opacity: 1, y: 0},
 };

 return (
  <section
   id="projects"
   className="py-20 bg-gray-50">
   <div className="container mx-auto px-4">
    <motion.div
     initial={{opacity: 0, y: 50}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true, margin: "-100px"}}
     transition={{duration: 0.6}}
     className="text-center mb-16">
     <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.title}</h2>
     <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
    </motion.div>

    <motion.div
     variants={container}
     initial="hidden"
     whileInView="show"
     viewport={{once: true, margin: "-100px"}}
     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {t.items.map((project) => (
      <motion.div
       key={project.id}
       variants={item}
       whileHover={{y: -10}}
       className="group relative overflow-hidden rounded-xl shadow-lg bg-white">
       <div className="relative h-64 overflow-hidden">
        <Image
         src={`/images/project${project.id}.jpg`}
         alt={project.title}
         fill
         className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
         <div>
          <div className="flex flex-wrap gap-2 mb-2">
           {project.tags?.map((tag) => (
            <span
             key={tag}
             className="px-3 py-1 bg-blue-600/80 text-white text-xs rounded-full">
             {tag}
            </span>
           ))}
          </div>
         </div>
        </div>
       </div>
       <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
         {project.title}
        </h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <a
         href={project.link || "#"}
         className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
         target="_blank"
         rel="noopener noreferrer">
         {project.view}
         <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
         </svg>
        </a>
       </div>
      </motion.div>
     ))}
    </motion.div>
   </div>
  </section>
 );
};

export default Projects;
