// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default ({ images }) => {


  return (
    <Swiper
      // install Swiper modules
      className="h-screen ml-0"
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={10}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          {["jpg", "jpeg"].includes(image.split(".")[1]) ? (
            <img src={image} alt="" className="w-full h-full object-cover" />
          ) : (
            <video
              src={image}
              className="w-full h-full object-cover"
              autoPlay
              loop
              alt=""
            />
          )}
        </SwiperSlide>
      ))}

      {/* <SwiperSlide>

        <img src="images/dakhla1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/dakhla2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <video src="images/beach-dakhla.mp4" autoPlay loop alt="" />
      </SwiperSlide> */}
    </Swiper>
  );
};
