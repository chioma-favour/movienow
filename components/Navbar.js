     "use client"
import Link from "next/link";
import { useState } from "react";
import { FaGripLines } from "react-icons/fa6";



export default function Navbar () {
    const [menuOpen,setMenuOpen]= useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return(
<main className="bg-white shadow shadow-gray-300 w-full">
 <div className="flex justify-between h-[50px] pt-3 px-5">
    <p className="text-red-400 font-bold text-2xl">MovieNow</p>
        <ul className="hidden md:flex gap-10 font-semibold cursor-pointer">
            <li>Movielist</li>
            <li>Add-movies</li>
            <li>Profile</li>
        </ul>
        <p className="hidden md:block h-[30px] w-[80px] bg-red-400 text-center text-white rounded-lg cursor-pointer">login</p>

         <div className="block py-2 md:hidden">
          <FaGripLines className="text-2xl text-red-400"
          onClick={toggleMenu} />


         </div>

</div>
{menuOpen && (
<div className="px-5 pb-1 md:hidden"> 
    <ul>
        <li>Movielist</li>
        <li>Add-movie</li>
        <li>proflie</li>
    </ul>
    <p className="mt-2 w-[60px] h-[25px] bg-red-400 rounded-md ">login</p>
</div>
)}
</main>
    )
}