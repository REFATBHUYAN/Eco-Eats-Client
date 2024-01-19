import React from "react";

import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
// import LightGallery from 'lightgallery/react';
// import { LightGallerySettings } from 'lightgallery/lg-settings';
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

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

const Gallery2 = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  return (
    <div id="gallery" className="">
      <h1 className="text-3xl font-bold text-center text-green-500 mb-12">
        চুইঝাল গ্যালারী
      </h1>
      <div>
        <div className="App">
          <div className="App ">
            <LightGallery
              onInit={onInit}
              speed={500}
              // plugins={[lgThumbnail, lgZoom]}
              plugins={[lgThumbnail, lgZoom]}
              mode="lg-fade"
              elementClassNames="grid grid-cols-2 md:grid-cols-4 w-full gap-5 "
              // elementClassNames="flex flex-wrap gap-1  "
              onBeforeSlide={onBeforeSlide}
              autoplay={true}
              pause={3000}
            >
              {images.map((image) => (
                <a
                  key={image.id}
                  href={image.url}
                  className="gallery-item basis-1/4 mx-auto hidden md:block"
                >
                  <img
                    className=" w-full   h-full rounded-xl aspect-square"
                    src={image.url}
                  />
                </a>
              ))}
              {images.slice(0, 4).map((image) => (
                <a
                  key={image.id}
                  href={image.url}
                  className="gallery-item flex-auto mx-auto block md:hidden"
                >
                  <img
                    className="w-full h-full rounded-xl aspect-square"
                    src={image.url}
                  />
                </a>
              ))}
            </LightGallery>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
