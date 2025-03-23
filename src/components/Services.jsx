
import cardData from "../Card/cardData"

const Services = () => {
  return (
    
    <div id="Services" className="md:my-60 font-poppins my-28">
          <h2 class="text-4xl max-sm:text-3xl py-16 font-bold text-center text-gray-900">Services</h2>
      <Cards /> 
      
    </div>

  )
}

export default Services

const Cards = () => {

  let services = cardData

  return (

    
  <div 
   className=" grid items-center self-center justify-self-center 
    grid-flow-col max-sm:grid-rows-11 grid-rows-6 lg:grid-rows-4 gap-4">
    
    {services.map((service) => (
      <div className="w-full shadow-xl rounded-xl p-4 text-center will-change-transform hover:rotate-1 hover:-translate-y-2 transition-all duration-300"> 
      <div className="relative">
      <p className=" absolute z-10 top-3 right-3 opacity-80 text-center"><i class="fa-solid fa-truck text-2xl text-white animate-pulse"></i></p>

        <img 
          className="h-60 w-80 rounded-[5px] object-cover will-change-transform"
          src={service.img}
          alt={service.alt}
          loading="lazy" 
        />

        <div className="absolute bottom-2 text-start bg-[#1e1e1ea8] text-white backdrop-blur-[2px] p-2 mx-2 rounded-xl">
        <h1 className="font-bold pb-2 mt-2">{service.title}</h1>
        <p className="text-sm">{service.desc}</p>        
        </div>

        </div>
      </div>
    ))}
  </div>


  )
}