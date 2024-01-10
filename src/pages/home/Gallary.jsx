import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/circle-chevron-left.svg";
import RightArrow from "../../assets/circle-chevron-right.svg";
import Container from "../../components/Container";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img
    className="w-20 h-20 hover:bg-indigo-600 slick-prev"
    src={LeftArrow}
    alt="prevArrow"
    {...props}
  />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img
    className="w-20 h-20 hover:bg-indigo-600"
    src={RightArrow}
    alt="nextArrow"
    {...props}
  />
);

const Gallary = () => {
  const settings = {
    dots: true,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 3000,
    // cssEase: "linear",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div id="gallary1">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-12">
        চুইঝাল গ্যালারী
      </h1>
      <div className="md:w-full w-[22rem] text-center  mx-auto text-slate-500 my-20 px-7">
        <Slider {...settings}>
          <div className="mx-auto">
            <img
              className="w-72 h-72 rounded-lg"
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411071827_864466802353286_1798985628233004209_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=_-K7JzHYGjwAX_CqnKT&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCGyJqvQFORraW4L-ffAcW_1vBUpJMEdPpF3R6Y1A4UVA&oe=65878ABC"
            />
          </div>
          <div className="mx-auto">
            <img
              className="w-72 h-72 rounded-lg"
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411437365_863795805753719_8755839441510138374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xtKXX4OArnsAX-0edYW&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA85Dzd2fen73UUo7RYtSsDUsqx35ulrZAyqNcOtA1gmg&oe=6587D7FC"
            />
          </div>
          <div className="mx-auto">
            <img
              className="w-72 h-72 rounded-lg"
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411131277_862384709228162_7122716054042689418_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=fmJ3Tnb0OxcAX_-wxAy&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAxQK-bUlQjxzzGriaDxYXa3Zq9QJ6mz6svJi2VIQP5Vw&oe=658846F7"
            />
          </div>
          <div className="mx-auto">
            <img
              className="w-72 h-72 rounded-lg"
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/409009017_858145352985431_383209555235447952_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=F6KUTcIA6ZoAX8fspDM&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA_mfQ0HCEUFaiGXJ2wlnEanCo97b6vaHQW5uouTMp9MA&oe=6587B32D"
            />
          </div>
          <div className="mx-auto">
            <img
              className="w-72 h-72 rounded-lg"
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411437365_863795805753719_8755839441510138374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xtKXX4OArnsAX-0edYW&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA85Dzd2fen73UUo7RYtSsDUsqx35ulrZAyqNcOtA1gmg&oe=6587D7FC"
            />
          </div>
          
        </Slider>
      </div>
    </div>
  );
};

export default Gallary;
