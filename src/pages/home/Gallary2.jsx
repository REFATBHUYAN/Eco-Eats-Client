import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
// light imag

import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const images = [
  {
    id: 1,
    url: "/ecoeats/gallery/1.jpg",
  },
  {
    id: 2,
    url: "/ecoeats/gallery/2.jpg",
  },
  {
    id: 3,
    url: "/ecoeats/gallery/3.jpg",
  },
  {
    id: 4,
    url: "/ecoeats/gallery/4.jpg",
  },
  {
    id: 5,
    url: "/ecoeats/gallery/5.jpg",
  },
  {
    id: 6,
    url: "/ecoeats/gallery/6.jpg",
  },
  {
    id: 7,
    url: "/ecoeats/gallery/7.jpg",
  },
  {
    id: 8,
    url: "/ecoeats/gallery/8.jpg",
  },
];
const photos = [
  {
    id: 1,
    url: "/image.png",
  },
  {
    id: 2,
    url: "/image (1).png",
  },
  {
    id: 3,
    url: "/image (2).png",
  },
  {
    id: 4,
    url: "/image (3).png",
  },
  {
    id: 5,
    url: "/image.png",
  },
  {
    id: 6,
    url: "/image (1).png",
  },
  {
    id: 7,
    url: "/image (2).png",
  },
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="">
      {/* chevron-right */}
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-1 top-1/2 md:bottom-28 z-50 bg-slate-200 hover:bg-slate-400 rounded-full p-1 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-left"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-1 top-1/2  md:bottom-28 z-50 bg-slate-200 hover:bg-slate-400 rounded-full p-1 ml-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-right"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </button>
    </div>
  );
};

const Gallary2 = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-12">
        চুইঝাল গ্যালারী
      </h1>
      <div id="gallary">
        <div className="App relative">
          <div className="App">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={2}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              //   slidesPerView="auto"
            >
              {images.map((image) => (
                <SwiperSlide key={image.id} >
                  <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                  >
                    <a href={image.url} className="mx-auto">
                      <img
                        className="w-full h-full rounded-lg object-cover aspect-square"
                        alt={image.id}
                        src={image.url}
                      />
                    </a>
                  </LightGallery>
                </SwiperSlide>
              ))}
              
              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary2;
