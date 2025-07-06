"use client";
import {motion} from "framer-motion";

const Contact = () => {
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
   id="contact"
   className="py-20 bg-white">
   <div className="container mx-auto px-4">
    <motion.div
     initial={{opacity: 0, y: 50}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true, margin: "-100px"}}
     transition={{duration: 0.6}}
     className="text-center mb-16">
     <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
     <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
    </motion.div>

    <motion.div
     variants={container}
     initial="hidden"
     whileInView="show"
     viewport={{once: true, margin: "-100px"}}
     className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
     <motion.div
      variants={item}
      className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800">
       Let's talk about your project
      </h3>
      <p className="text-gray-700 leading-relaxed">
       Have a project in mind or just want to say hi? Feel free to reach out!
       I'm always open to new opportunities and collaborations.
      </p>
      <div className="space-y-4">
       <div className="flex items-start space-x-4">
        <div className="mt-1 text-blue-600">
         <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
         </svg>
        </div>
        <div>
         <h4 className="font-medium text-gray-800">Email</h4>
         <a
          href="mailto:aidenval999@gmail.com"
          className="text-blue-600 hover:underline">
          aidenval999@gmail.com
         </a>
        </div>
       </div>
       <div className="flex items-start space-x-4">
        <div className="mt-1 text-blue-600">
         <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
         </svg>
        </div>
        <div>
         <h4 className="font-medium text-gray-800">Phone</h4>
         <a
          href="tel:+1234567890"
          className="text-blue-600 hover:underline">
          +62 877 4615-6529
         </a>
        </div>
       </div>
      </div>
      <div className="flex space-x-4 pt-4">
       {["LinkedIn", "GitHub", "Twitter"].map((social) => (
        <a
         key={social}
         href="#"
         className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-800 transition-colors duration-300">
         {social}
        </a>
       ))}
      </div>
     </motion.div>

     <motion.div variants={item}>
      <div className="bg-white rounded-xl shadow-lg p-8">
       <form className="space-y-6">
        <div>
         <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
         </label>
         <input
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          placeholder="John Doe"
         />
        </div>
        <div>
         <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1">
          Your Email
         </label>
         <input
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          placeholder="your.email@example.com"
         />
        </div>
        <div>
         <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1">
          Your Message
         </label>
         <textarea
          id="message"
          rows="5"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          placeholder="Hello, I'd like to talk about..."></textarea>
        </div>
        <button
         type="submit"
         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02]">
         Send Message
        </button>
       </form>
      </div>
     </motion.div>
    </motion.div>
   </div>
  </section>
 );
};

export default Contact;
