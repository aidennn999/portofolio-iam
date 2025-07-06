"use client";
import {motion} from "framer-motion";
import {useLanguage} from "@/context/LanguageContext";
import { translations } from "@/lib/translation";

const About = () => {
 const {language} = useLanguage();
 const t = translations[language].about;

 const container = {
  hidden: {opacity: 0},
  show: {
   opacity: 1,
   transition: {
    staggerChildren: 0.1,
   },
  },
 };

 const item = {
  hidden: {opacity: 0, y: 20},
  show: {opacity: 1, y: 0},
 };

 return (
  <section
   id="about"
   className="py-20 bg-white">
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
     className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
     <motion.div variants={item}>
      <div className="relative group">
       <div className="absolute -inset-4 bg-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
       <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
        <img
         src="/images/profile.jpg"
         alt="Profile"
         className="w-full h-auto object-cover"
        />
       </div>
      </div>
     </motion.div>

     <motion.div
      variants={item}
      className="space-y-6">
      {t.content.map((paragraph, index) => (
       <motion.p
        key={index}
        variants={item}
        className="text-lg text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{
         __html: paragraph.replace(
          /<1>(.*?)<\/1>/g,
          '<span class="font-semibold text-blue-600">$1</span>'
         ),
        }}
       />
      ))}

      <motion.div
       variants={item}
       className="pt-4">
       <div className="flex flex-wrap gap-4">
        {t.skills.map((skill) => (
         <span
          key={skill}
          className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-800">
          {skill}
         </span>
        ))}
       </div>
      </motion.div>
     </motion.div>
    </motion.div>
   </div>
  </section>
 );
};

export default About;
