//"use client"
//import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BiLogoGmail } from "react-icons/bi";
// import { FaHouse } from "react-icons/fa6";
// import { usePathname } from 'next/navigation';
// import Link from 'next/link'

export default function Footer() {
    
  //const pathname = usePathname()
  
  return (
        <footer className="row-start-3 items-center justify-between w-full px-6 relative">
          
          {/* {
            pathname !== '/' && (
              <Link href='/' className='text-5xl text-green-600 hover:text-white transition-colors duration-500 absolute left-6 animate-bounce'>
                <FaHouse />
              </Link>
            )
          } */}
          
          <div className="flex gap-20 p-4 justify-center w-full bg-gradient-to-r from-green-600 via-yellow-500 to-blue-500 text-transparent bg-clip-text rounded-lg">
            <a 
              className="text-5xl text-yellow-500 bg-gradient-to-r from-green-600 via-yellow-500 to-blue-500 text-transparent bg-clip-text hover:text-white transition-colors duration-500"
              href="https://github.com/AngeloMakory"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub/>
            </a>

            <a 
              className="text-5xl text-yellow-500 bg-grdient-to-r from-green-600 via-yellow-500 to-blue-500 text-transparent bg-clip-text hover:text-white transition-colors duration-500"
              href="mailto:angelomakory@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail />
            </a>

            <a
              className="text-5xl text-yellow-500 bg-gradient-to-r from-green-600 via-yellow-500 to-blue-500 text-transparent bg-clip-text hover:text-white transition-colors duration-500"
              href="https://www.linkedin.com/in/angelo-makory-607614256/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin/>
            </a>

          </div>
          <br></br>
          <div className="text-sm text-yellow-500 text-center">
            POWERED BY ANGELO MAKORY
          </div>

          
      </footer>
    )
}
