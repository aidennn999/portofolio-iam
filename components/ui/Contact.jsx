"use client";
import {motion} from "framer-motion";
import {useLanguage} from "@/context/LanguageContext";
import {translations} from "@/lib/translation";
import {useState} from "react";

const Contact = () => {
 const {language} = useLanguage();
 const t = translations[language].contact;
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
 });
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState({
  success: false,
  message: "",
 });

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

 const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus({success: false, message: ""});

  try {
   const response = await fetch("https://formspree.io/f/mvgrnvqz", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({
     name: formData.name,
     email: formData.email,
     message: formData.message,
     _language: language, // Tambahkan bahasa saat ini
    }),
   });

   if (response.ok) {
    setSubmitStatus({
     success: true,
     message:
      language === "en"
       ? "Message sent successfully!"
       : "Pesan berhasil dikirim!",
    });
    setFormData({name: "", email: "", message: ""});
   } else {
    throw new Error("Failed to send message");
   }
  } catch (error) {
   setSubmitStatus({
    success: false,
    message:
     language === "en"
      ? "Failed to send message. Please try again later."
      : "Gagal mengirim pesan. Silakan coba lagi nanti.",
   });
  } finally {
   setIsSubmitting(false);
  }
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
     <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.title}</h2>
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
      <h3 className="text-2xl font-semibold text-gray-800">{t.subtitle}</h3>
      <p className="text-gray-700 leading-relaxed">{t.description}</p>
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
         <h4 className="font-medium text-gray-800">{t.email}</h4>
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
         <h4 className="font-medium text-gray-800">{t.phone}</h4>
         <a
          href="tel:+6287746156529"
          className="text-blue-600 hover:underline">
          +62 877 4615-6529
         </a>
        </div>
       </div>
      </div>
      <div className="flex space-x-4 pt-4">
       {t.social.map((social) => (
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
       <form
        className="space-y-6"
        onSubmit={handleSubmit}>
        <div>
         <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1">
          {t.form.name}
         </label>
         <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          placeholder={language === "en" ? "John Doe" : "Nama Anda"}
          required
         />
        </div>
        <div>
         <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1">
          {t.form.email}
         </label>
         <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          placeholder={
           language === "en"
            ? "your.email@example.com"
            : "email.anda@contoh.com"
          }
          required
         />
        </div>
        <div>
         <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1">
          {t.form.message}
         </label>
         <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          placeholder={
           language === "en"
            ? "Hello, I'd like to talk about..."
            : "Halo, saya ingin membahas tentang..."
          }
          required></textarea>
        </div>
        {submitStatus.message && (
         <div
          className={`p-3 rounded-lg ${
           submitStatus.success
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
          }`}>
          {submitStatus.message}
         </div>
        )}
        <button
         type="submit"
         disabled={isSubmitting}
         className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
         }`}>
         {isSubmitting
          ? language === "en"
            ? "Sending..."
            : "Mengirim..."
          : t.form.button}
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
