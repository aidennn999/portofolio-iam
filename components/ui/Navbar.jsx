import Link from "next/link";
import {IoMdCodeDownload} from "react-icons/io";

export default function Navbar() {
 return (
  <nav className="w-full h-20 bg-black text-white flex item-center justify-center">
   <ul className="container mx-auto">
    <ul className="flex items-center h-full justify-between">
     <h1 className="text-3xl font-bold">
      My<span className="text-4xl text-emerald-300">.</span>Portofolio
     </h1>
     <li className="flex items-center gap-4 font-medium">
      <Link href="/">Summary</Link>
      <Link href="/">About Me</Link>
      <Link href="/">Project</Link>
      <Link href="/">Contact</Link>
      <Link
       href="/"
       className="flex items-center gap-2 hover:text-emerald-300">
       <IoMdCodeDownload className="text-2xl" />
       Download CV
      </Link>
     </li>
    </ul>
   </ul>
  </nav>
 );
}
