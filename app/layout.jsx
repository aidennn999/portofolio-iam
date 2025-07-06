import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"],
});

export const metadata = {
 title: "Aiden | Beginner Front-End Developer",
 description: "Portfolio of Aiden, Beginner Web Developer",
};

export default function RootLayout({children}) {
 return (
  <html
   lang="en"
   className="scroll-smooth">
   <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100dvh] flex flex-col items-center bg-gray-50`}>
    <Navbar />
    <main className="flex-grow pt-20 w-full">{children}</main>
    <Footer />
   </body>
  </html>
 );
}
