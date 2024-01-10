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

const CustomerReview = () => {
  const settings = {
    dots: true,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 3000,
    // cssEase: "linear",
    infinite: true,
    slidesToShow: 3,
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
    <div id="review1" className="my-2">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-12">
        কাস্টমার রিভিউ
      </h1>
      <div className="md:w-full w-[22rem] text-center  mx-auto text-slate-500 my-20 px-7">
        <Slider {...settings}>
          <div >
            <div className=" h-60 w-96 bg-slate-100 rounded-lg p-9">
              <p className="text-slate-400 text-start mb-5">
                ইকোইটসকে অনেক ধন্যবাদ আমাকে একদম ফ্রেশ চুইঝাল দেওয়ার জন্য ও
                কিভাবে ব্যবহার করতে হয় সেটা শেখানোর জন্য। দাম খুবই রিজনেবল
                প্রোডাক্ট অনুযায়ী।
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <img
                    className="h-11 w-11 rounded-full"
                    src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/357380215_2458285481005856_8845722829196627779_n.jpg?stp=dst-jpg_p480x480&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_ohc=H1RJwrTAm_gAX8yI1BQ&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAa9QDFEBX59e0pUVXQ9GbzBe2o9SY6UlGxP6XEftN9MQ&oe=658874DC"
                    alt=""
                  />
                  <div className="text-start">
                    <h1 className="text-slate-600 font-semibold">সৈকত ব্যাপাই</h1>
                    <p className="text-slate-500">চট্টগ্রাম</p>
                  </div>
                </div>
                <button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></button>
              </div>
            </div>
          </div>
          <div >
            <div className=" h-60 w-96 bg-slate-100 rounded-lg p-9">
              <p className="text-slate-400 text-start mb-5">
              আমি তাদের বিশ্বাস করে টাকা পাঠাই প্রোডাক্ট রিসিভ করার আগেই এবং তারা আমার বিশ্বাস রক্ষা করে। প্রোডাক্ট ঠিকমত বুঝে পেয়েছি এবং রিকমেন্ড করছি।
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <img
                    className="h-11 w-11 rounded-full"
                    src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/342501253_2403999883108561_327231943607014439_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ceTvsiHVF4QAX9kQsEe&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCPAFgCTB8bwbDZ__10niRoQVHPZEH-aA0dLTrCQfgypw&oe=65890C8B"
                    alt=""
                  />
                  <div className="text-start">
                    <h1 className="text-slate-600 font-semibold">সাজ্জাদ হোসেইন</h1>
                    <p className="text-slate-500">ঢাকা</p>
                  </div>
                </div>
                <button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></button>
              </div>
            </div>
          </div>
          <div >
            <div className=" h-60 w-96 bg-slate-100 rounded-lg p-9">
              <p className="text-slate-400 text-start mb-5">
              দুই বার অর্ডার করেছি দুই বারই বেস্ট কোয়ালিটির চুইঝাল পেয়েছি, অন্য জায়গা থেকেও অর্ডার করেছিলাম। তবে উনাদের মত বেস্ট কেউ দিতে পারে নাই।
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <img
                    className="h-11 w-11 rounded-full"
                    src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/314523039_2253859021443428_2363062891664998573_n.jpg?stp=c0.103.480.480a_dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=2eLcl1SaMtcAX-tTkVy&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCO3P2BmUbJ_6MayGWG14sIdpbW60i10sSOHJsWzfdMdg&oe=6588AFE5"
                    alt=""
                  />
                  <div className="text-start">
                    <h1 className="text-slate-600 font-semibold">আলম আহমেদ হৃদয়</h1>
                    <p className="text-slate-500">ঢাকা</p>
                  </div>
                </div>
                <button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></button>
              </div>
            </div>
          </div>
          
          <div >
            <div className=" h-60 w-96 bg-slate-100 rounded-lg p-9">
              <p className="text-slate-400 text-start mb-5">
              আমি তাদের বিশ্বাস করে টাকা পাঠাই প্রোডাক্ট রিসিভ করার আগেই এবং তারা আমার বিশ্বাস রক্ষা করে। প্রোডাক্ট ঠিকমত বুঝে পেয়েছি এবং রিকমেন্ড করছি।
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <img
                    className="h-11 w-11 rounded-full"
                    src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/342501253_2403999883108561_327231943607014439_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ceTvsiHVF4QAX9kQsEe&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCPAFgCTB8bwbDZ__10niRoQVHPZEH-aA0dLTrCQfgypw&oe=65890C8B"
                    alt=""
                  />
                  <div className="text-start">
                    <h1 className="text-slate-600 font-semibold">সাজ্জাদ হোসেইন</h1>
                    <p className="text-slate-500">ঢাকা</p>
                  </div>
                </div>
                <button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></button>
              </div>
            </div>
          </div>
          <div >
            <div className=" h-60 w-96 bg-slate-100 rounded-lg p-9">
              <p className="text-slate-400 text-start mb-5">
              দুই বার অর্ডার করেছি দুই বারই বেস্ট কোয়ালিটির চুইঝাল পেয়েছি, অন্য জায়গা থেকেও অর্ডার করেছিলাম। তবে উনাদের মত বেস্ট কেউ দিতে পারে নাই।
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <img
                    className="h-11 w-11 rounded-full"
                    src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/357380215_2458285481005856_8845722829196627779_n.jpg?stp=dst-jpg_p480x480&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_ohc=H1RJwrTAm_gAX8yI1BQ&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAa9QDFEBX59e0pUVXQ9GbzBe2o9SY6UlGxP6XEftN9MQ&oe=658874DC"
                    alt=""
                  />
                  <div className="text-start">
                    <h1 className="text-slate-600 font-semibold">আলম আহমেদ হৃদয়</h1>
                    <p className="text-slate-500">ঢাকা</p>
                  </div>
                </div>
                <button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></button>
              </div>
            </div>
          </div>
          
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReview;
