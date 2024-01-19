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
// import LightGallery from 'lightgallery/react';
// import { LightGallerySettings } from 'lightgallery/lg-settings';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

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

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="">
      {/* chevron-right */}
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-1 top-20 md:top-32 z-50 bg-slate-200/50 hover:bg-green-500 rounded-full p-1 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-left text-white"
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
        className="absolute right-1 top-20 md:top-32 z-50 bg-slate-200/50 hover:bg-green-500 rounded-full p-1 ml-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-right text-white"
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

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
};

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center text-green-500 my-12">
        চুইঝাল গ্যালারী
      </h1>
      <div id="gallery">
        <div className="App">
          <div className="App relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={2}
              loop={true}
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
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              //   slidesPerView="auto"
            >
              {images.map((image) => (
                <SwiperSlide key={image.id} >
                  <LightGallery
                    onInit={onInit}
                    speed={500}
                    // plugins={[lgThumbnail, lgZoom]}
                    plugins={[lgThumbnail, lgZoom, lgVideo]} 
                    mode="lg-fade"
                    elementClassNames="custom-wrapper-class"
                onBeforeSlide={onBeforeSlide}
                  >
                    <a href={image.url} className="mx-auto">
                      <img
                        className="w-full h-full rounded-xl object-cover aspect-square"
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

export default Gallery;