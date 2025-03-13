"use client"
import {useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
//import { FaHouse } from "react-icons/fa6";
import { LuHouse, LuSquareMenu, LuSquareDashed} from "react-icons/lu";



export default function Header() {

    const pathname = usePathname()

    //State management for the hamburger menu
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    //screen resizing and mobile state
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        //first check
        checkIfMobile()

        //Event listeners
        window.addEventListener('resize', checkIfMobile)

        return () => {
            window.removeEventListener('resize', checkIfMobile)
        }
    }, [])

    //Hide menu when you click outside the menu
    useEffect(() => {
        const handleOutsideClick = (e : MouseEvent) =>{
            
            const target = e.target as HTMLElement
            
            if(isMenuOpen && !target.closest('nav')) {
                setIsMenuOpen(false)
            }

        }

        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }

    },[isMenuOpen])

    //Nav route handling to hide menu whenever another page is open
    useEffect(() => {
        setIsMenuOpen(false)
    },[pathname])
    


    return (
        <header className="w-full">      
            <div className="container mx-auto px-4">
                <nav className="w-full flex justify-between items-center py-4 relative">
                    {/* Hamburger menu button for mobile only */}
                    <div className='block md:hidden'>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="text-blue-500 hover:text-white transition-colors duration-300"
                            aria-label={isMenuOpen? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen
                            ? <LuSquareDashed size = {28}/>
                            : <LuSquareMenu size= {28}/>
                            }
                        </button>
                    </div>

                    {/* Navigation Links */}

                    <ul 
                        className={`
                            ${isMobile
                                ? `absolute top-full left-0 w-3/5 bg-gray-800 z-50 flex-col py-4 px-6 shadow-lg
                                ${isMenuOpen ? 'flex' : 'hidden'}`
                                : 'flex gap-6 text-md flex-wrap'
                            }
                            "flex gap-6 text-md font-[family-name:var(--font-geist-mono)] bg-gradient-to-r from-green-600 via-yellow-500 to-blue-500 text-transparent bg-clip-text  ">
                        `}
                        style={isMobile ? {backgroundColor: '#374151'}: {}}
                        >
                        <li className={isMobile ? "py-3 border-b border-gray-800" : ""}>
                            <Link className="hover:text-white transition-colors duration-300"href="/about" >About Me</Link>                        
                        </li>
                        <li className={isMobile ? "py-3 border-b border-gray-800" : ""}>
                            <Link className="hover:text-white transition-colors duration-300" href="/education" >My Education</Link>
                        </li>
                        <li className={isMobile ? "py-3 border-b border-gray-800" : ""}>
                            <Link className="hover:text-white transition-colors duration-300" href="/experience" >My Experience</Link>
                        </li>
                        <li className={isMobile ? "py-3 border-b border-gray-800" : ""}>
                            <Link className="hover:text-white transition-colors duration-300" href="/projects" >My Projects</Link>
                        </li>
                        <li className={isMobile ? "py-3 border-b border-gray-800" : ""}>
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
