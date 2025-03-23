
import { motion } from "framer-motion"

const WhyChooseUs = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }}
      className="mb-10"
    >
    <section class="py-16 bg-gradient-to-r from-gray-200 to-gray-100 font-poppins">
  <div class="max-w-6xl mx-auto px-6 text-center">
    <h2 class="text-4xl max-sm:text-3xl font-bold text-gray-900">Why Choose Us?</h2>
    <p class="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
      We provide the best packers and movers service across India with top-notch reliability and customer satisfaction.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="text-blue-500 max-sm:text-3xl text-4xl lg:text-5xl mb-4"><i className="fa-solid fa-truck-fast"></i></div>
        <h3 class="text-xl font-semibold text-gray-800">Fast & Reliable Service</h3>
        <p class="text-gray-600 mt-2">We ensure quick and efficient moving services without delays.</p>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="text-blue-500 max-sm:text-3xl text-4xl lg:text-5xl mb-4"><i className="fa-solid fa-indian-rupee-sign"></i></div>
        <h3 class="text-xl font-semibold text-gray-800">Affordable Pricing</h3>
        <p class="text-gray-600 mt-2">Get the best moving experience at budget-friendly rates.</p>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="text-blue-500 max-sm:text-3xl text-4xl lg:text-5xl mb-4"><i className="fa-solid fa-globe"></i></div>
        <h3 class="text-xl font-semibold text-gray-800">Nationwide Coverage</h3>
        <p class="text-gray-600 mt-2"> We provide seamless relocation services across India</p>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="text-blue-500 max-sm:text-3xl text-4xl lg:text-5xl mb-4"><i className="fa-solid fa-clock"></i></div>
        <h3 class="text-xl font-semibold text-gray-800"> On-Time Delivery</h3>
        <p class="text-gray-600 mt-2">We value your time and ensure timely pickups & deliveries.</p>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="text-blue-500 max-sm:text-3xl text-4xl lg:text-5xl mb-4"><i className="fa-solid fa-user-tie"></i></div>
        <h3 class="text-xl font-semibold text-gray-800">Experienced Team</h3>
        <p class="text-gray-600 mt-2">Our professionals have years of experience in hassle-free moving.</p>
      </div>
    </div>
  </div>
</section>

    </motion.div>
  )
}

export default WhyChooseUs
