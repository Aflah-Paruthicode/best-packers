const VideoSection = () => {
    return (
      <section className="bg-gradient-to-r from-gray-200 to-gray-100 font-poppins py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Our Packing in Action
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          See how we carefully pack items to ensure safe delivery.
        </p>
  
        {/* Video Wrapper for Portrait Video */}
        <div className="relative w-[300px] md:w-[350px] h-auto overflow-hidden rounded-xl shadow-lg border border-gray-300">
          <video controls muted className="w-full h-auto rounded-xl">
            <source src="/packed-items.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    );
  };
  
  export default VideoSection;
  