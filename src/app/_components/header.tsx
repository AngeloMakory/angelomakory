"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
//import { FaHouse } from "react-icons/fa6";
import { LuHouse } from "react-icons/lu";



export default function Header() {

    const pathname = usePathname()

    return (
        <header className="w-full">      
            <div className="container mx-auto px-4">
                <nav className="w-full flex justify-between items-center py-4">
                    <ul className="flex gap-6 text-md font-[family-name:var(--font-geist-mono)] bg-gradient-to-r from-green-600 via-yellow-500 to-blue-500 text-transparent bg-clip-text  ">
                        <li>
                            <Link className="hover:text-white transition-colors duration-300"href="/about" >About Me</Link>                        
                        </li>
                        <li>
                            <Link className="hover:text-white transition-colors duration-300" href="/education" >My Education</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-colors duration-300" href="/projects" >My Projects</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-colors duration-300" href="/contact" >Contact Me</Link>
                        </li>
                    </ul>
                    {
                        pathname !== '/' && (
                            <Link href='/' className="text-blue-500 hover:text-white transition-colors duration-500">
                                <LuHouse size={35} />
                            </Link>
                        )
                    }
                </nav>
            </div>
            <br></br>
        </header>
    )
}
