
import { motion } from 'framer-motion'

import logo from '/icon-Photoroom.png'
import { Menu , X } from "lucide-react"
import { useState } from 'react'


const Navbar = () => {

  
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = ( ) => {
        setIsOpen(!isOpen)
    }

  return ( 
    <header className=" fixed flex font-poppins top-0 z-[9999] flex-wrap mx-auto w-full items-center justify-between shadow-md px-5  lg:px-32 bg-white lg:py-4 py-2" > 

    <div className="logo max-sm:h-14 h-16 w-20 flex items-center ">
        <img src={logo} className='max-md:w-12 w-16' alt="logo" />
    </div>
        <nav className=' flex justify-end'>
        <div className='hidden justify-between items-center w-full md:flex' >
            <Nav close='close' setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
          <div className='md:hidden' >
            <button onClick={toggleNavbar} >{ isOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>

        {isOpen && 
        <motion.div initial={{ y: -20,opacity: 0 }} // Start off-screen
        animate={{ y: isOpen ? 0 : -20, opacity: 1 }} // Slide in & out
        transition={{ duration: 0.2, ease: "easeInOut" }} className='flex basis-full flex-col items-center absolute right-10 bg-white px-4 py-6 shadow-2xl border-t-1 border-[#336aea] rounded-2xl top-16 ' >
            <Nav menu='flex-col items-center gap-2' />
        </motion.div>
        }

    </header>
  )
}

export default Navbar


const Nav = (props) => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

    let menu  = props.menu ?? ''

   

    return (
        <ul className={`flex w-full ${menu} gap-4 items-center justify-evenly `}>
                <motion.li whileTap={{ scale: 0.9 }} ><button className='hover:bg-blue-400 hover:p-3 hover:text-white hover:rounded-2xl transition-all duration-300' onClick={() => scrollToSection("Home")} >Home</button></motion.li >
                <motion.li whileTap={{ scale: 0.9 }} ><button className='hover:bg-blue-400 hover:p-3 hover:text-white hover:rounded-2xl transition-all duration-300' onClick={() => scrollToSection("Services")} >Services</button></motion.li>
                <motion.li whileTap={{ scale: 0.9 }} ><button className='hover:bg-blue-400 hover:p-3 hover:text-white hover:rounded-2xl transition-all duration-300' onClick={() => scrollToSection("Reviews")} >Reviews</button></motion.li>
                <motion.li whileTap={{ scale: 0.9 }} ><button className='hover:bg-blue-400 hover:p-3 hover:text-white hover:rounded-2xl transition-all duration-300' onClick={() => scrollToSection("Location")} >Location</button></motion.li>
                <motion.li whileTap={{ scale: 0.9 }} ><button onClick={() => scrollToSection("Contact-us")} className='bg-blue-500 text-white p-3 rounded-2xl hover:bg-blue-600 transition-all duration-300 ' >Get a Quote</button></motion.li>
            </ul> 
    )
}

