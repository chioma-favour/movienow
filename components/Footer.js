import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export default function Footer () {
    const year = new Date().getFullYear();

    return(
<footer className="grid grid-cols-1 md:px-8 md:grid-cols-2 lg:grid-cols-3 lg:py-4 lg:px-2 lg:gap-0">
<div>
    <p className="text-2xl text-red-400 font-bold">MovieNow</p>
    <p>Your home of entertainment</p>
</div>
<div>
    <p className="text-md text-gray-700">Head Quarters</p>
    <p className="text-md text-gray-700">Microsoft street , Texas , USA</p>
</div>
<div>
<ul  className="flex lg:justify-end item-center gap-4">
<li><Link href="#"><FaFacebookF className="text-red-400 text-2xl" /></Link></li>
<li><Link href="#">< FaXTwitter className="text-red-400 text-2xl" /></Link></li>
<li><Link href="#"><FaTiktok className="text-red-400 text-2xl" /></Link></li>
</ul>
<ul className="flex lg:justify-end item-center gap-4">
<li><Link href="#" className="text-sm text-gray-600">Term of use</Link></li>
<li><Link href="#" className="text-sm text-gray-600">Glossary</Link></li>
<li><Link href="#" className="text-sm text-gray-600">FAQS</Link></li>
</ul>
</div>
</footer>

    )
}