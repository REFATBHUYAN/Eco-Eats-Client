import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

const reviews = [
  {
    id: 1,
    description:
      "ইকোইটসকে অনেক ধন্যবাদ আমাকে একদম ফ্রেশ চুইঝাল দেওয়ার জন্য ও কিভাবে ব্যবহার করতে হয় সেটা শেখানোর জন্য। দাম খুবই রিজনেবল প্রোডাক্ট অনুযায়ী।",
    name: "সৈকত ব্যাপাই",
    address: "চট্টগ্রাম",
    url: "https://www.facebook.com/saikot.bapai01/posts/pfbid02E7GSMxhNWL6FfXc6FQQhhWfgX2PKarFLjc8PVX9XDVX34g5aDVNTnhT5ZAMamTQMl",
    photo:"/ecoeats/review/review-1.jpg"

  },
  {
    id: 2,
    description:
      "আমি তাদের বিশ্বাস করে টাকা পাঠাই প্রোডাক্ট রিসিভ করার আগেই এবং তারা আমার বিশ্বাস রক্ষা করে। প্রোডাক্ট ঠিকমত বুঝে পেয়েছি এবং রিকমেন্ড করছি।",
    name: "সাজ্জাদ হোসেইন",
    address: "ঢাকা",
    url: "https://www.facebook.com/shazzad.hossain1/posts/pfbid0wP9rufPMoDzTDkCLJGvXz2HBRZMCSDwVZwJBAxnMKxFHHWLh2UY9doH8zrVnHdT3l",
    photo:"/ecoeats/review/review-2.jpg"
  },
  {
    id: 3,
    description:
      "দুই বার অর্ডার করেছি দুই বারই বেস্ট কোয়ালিটির চুইঝাল পেয়েছি, অন্য জায়গা থেকেও অর্ডার করেছিলাম। তবে উনাদের মত বেস্ট কেউ দিতে পারে নাই।",
    name: "আলম আহমেদ হৃদয়",
    address: "ঢাকা",
    url: "https://www.facebook.com/TofayelAlamBD/posts/pfbid02u6a6iQEoKofFpEwwrxLMDiVYofy1c64sb71uQyX1zZEEGkfh8MUWVUAqizBukoLXl",
    photo:"/ecoeats/review/review-3.jpg"
  },
  {
    id: 4,
    description:
      "ইকোইটসকে অনেক ধন্যবাদ আমাকে একদম ফ্রেশ চুইঝাল দেওয়ার জন্য ও কিভাবে ব্যবহার করতে হয় সেটা শেখানোর জন্য। দাম খুবই রিজনেবল প্রোডাক্ট অনুযায়ী।",
    name: "সৈকত ব্যাপাই",
    address: "চট্টগ্রাম",
    url: "https://www.facebook.com/saikot.bapai01/posts/pfbid02E7GSMxhNWL6FfXc6FQQhhWfgX2PKarFLjc8PVX9XDVX34g5aDVNTnhT5ZAMamTQMl",
    photo:"/ecoeats/review/review-1.jpg"
  },
  {
    id: 5,
    description:
      "আমি তাদের বিশ্বাস করে টাকা পাঠাই প্রোডাক্ট রিসিভ করার আগেই এবং তারা আমার বিশ্বাস রক্ষা করে। প্রোডাক্ট ঠিকমত বুঝে পেয়েছি এবং রিকমেন্ড করছি।",
    name: "সাজ্জাদ হোসেইন",
    address: "ঢাকা",
    url: "https://www.facebook.com/shazzad.hossain1/posts/pfbid0wP9rufPMoDzTDkCLJGvXz2HBRZMCSDwVZwJBAxnMKxFHHWLh2UY9doH8zrVnHdT3l",
    photo:"/ecoeats/review/review-2.jpg"
  },
  {
    id: 6,
    description:
      "দুই বার অর্ডার করেছি দুই বারই বেস্ট কোয়ালিটির চুইঝাল পেয়েছি, অন্য জায়গা থেকেও অর্ডার করেছিলাম। তবে উনাদের মত বেস্ট কেউ দিতে পারে নাই।",
    name: "আলম আহমেদ হৃদয়",
    address: "ঢাকা",
    url: "https://www.facebook.com/TofayelAlamBD/posts/pfbid02u6a6iQEoKofFpEwwrxLMDiVYofy1c64sb71uQyX1zZEEGkfh8MUWVUAqizBukoLXl",
    photo:"/ecoeats/review/review-3.jpg"
  },
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div id="review" className="">
      {/* chevron-right */}
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-1 top-28 z-50 bg-slate-200 hover:bg-green-500 rounded-full p-1 "
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
        className="absolute right-1 top-28 z-50 bg-slate-200 hover:bg-green-500 rounded-full p-1 ml-2"
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

const Review = () => {
  return (
    <div id="review" className="">
      <h1 className="text-3xl font-bold text-center text-green-500 mb-12">
        কাস্টমার রিভিউ
      </h1>
      <div>
        <div className="App relative">
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              //   slidesPerView="auto"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div>
                    <div className=" h-60 w-full bg-slate-100 rounded-xl p-9">
                      <p className="text-slate-400 mb-5 line-clamp-2">
                        {review.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <img
                            className="h-11 w-11 rounded-full"
                            src={review.photo}
                            alt=""
                          />
                          <div className="text-start">
                            <h1 className="text-slate-600 font-semibold">
                              {review.name}
                            </h1>
                            <p className="text-slate-500">{review.address}</p>
                          </div>
                        </div>
                        <a href={review.url} target="_blank" className="hover:text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-brand-facebook"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
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

export default Review;
