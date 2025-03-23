import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"
import "swiper/css";
import "swiper/css/pagination";
import reviews from "../Reviews/CustomerReviews";

const CustomerReviews = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true, amount: 0.2 }}
      className="mb-10 font-poppins"
    >
    <div id="Reviews" className="max-w-5xl my-2 lg:my-20 mx-auto py-12 px-4 ">
      <h2 class="text-4xl max-sm:text-3xl text-center py-20 font-bold text-gray-900">What Our Customers Say</h2>


      
      {isMobile ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          className="w-full"
        >
          {reviews.map((review,index) => (
            <SwiperSlide key={review.id}>
              <div className={`px-7 pt-4 py-8 max-h-[360px] my-10 mx-4 shadow-lg rounded-xl ${index == 0 ? `bg-blue-500 text-white` : `bg-white`}`}>
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-16 h-16 mx-auto object-cover rounded-full mb-3"
                />
                <h3 className="text-lg font-semibold text-center">{review.name}</h3>
                <p className="text-yellow-500 text-xl text-center"> {index !== 0 ? `⭐ ${review.rating}` : '🎖️' } </p>
                <p className={` mt-2 ${index == 0 ? ` text-white` : `bg-white  text-gray-600 `}`}>{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          className="w-full"
        >

        <div className={`grid  lg:grid-cols-3 grid-cols-2 gap-6`}>
          {reviews.map((review, index) => (
            <SwiperSlide key={review.id}>
            <div key={review.id} className={`p-6   shadow-lg my-4 rounded-xl ${index == 0 ? `bg-blue-500 text-white` : `bg-white`}`}>
              <div className="flex items-center gap-3">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-12 h-12 hover:w-16 hover:h-16 rounded-full transition-all duration-300"
                />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-yellow-500 text-xl"> {index !== 0 ? `⭐ ${review.rating}` : '🎖️' } </p>
                </div>
              </div>
              <p className={`text-gray-600 mt-2 hover:text-[17px] transition-all duration-300 ${index == 0 ? ` text-white` : `bg-white text-gray-600 `}`}>{review.review}</p>
            </div>
            </SwiperSlide>
          ))}
        </div>
        </Swiper>
      )}
    </div>
    </motion.div>
  );
};

export default CustomerReviews;
