
import { motion } from 'framer-motion';


const Hero = () => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id='Home' class="relative w-full h-screen font-poppins flex items-center justify-center text-center">
  <div class="absolute inset-0 bg-[url('/hero.jpg')]  bg-cover bg-center bg-no-repeat">
    <div class="absolute inset-0 bg-black/60"></div>  
  </div>

  <div class="relative mt-40 z-[999] px-6 md:px-12">
    <h1 class="text-white text-4xl md:text-6xl font-bold leading-tight animate-fade-up">
      Your Trusted Packers & Movers
    </h1>
    <p class="text-gray-200 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
      Fast, safe, and hassle-free shifting across India. Get your free quote now!
    </p>
    
    <motion.button whileTap={{ scale: 0.9 }} onClick={() => scrollToSection("Contact-us")}  class="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300">
      Get a Free Quote
    </motion.button>
    <motion.a whileTap={{ scale: 0.9 }} className='fixed py-3 lg:py-5 lg:px-6 px-4 text-2xl lg:text-4xl bg-green-500 hover:text-[40px] hover:bg-green-600 text-white rounded-full bottom-5 lg:bottom-10 right-5 lg:right-52 transition-all duration-300 z-[999]' href="https://wa.me/+919567078537?text=Hi,%20I%20need%20help%20with%20moving!%20Can%20you%20provide%20details%20about%20your%20services%20and%20pricing%20?%20"> <i className="fab fa-whatsapp"></i><span class="absolute inset-0 animate-ping bg-green-500 opacity-50 rounded-full"></span> </motion.a>
  </div>
</section>

  )
}

export default Hero