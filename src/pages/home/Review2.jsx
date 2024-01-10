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
    // photo:"https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/357380215_2458285481005856_8845722829196627779_n.jpg?stp=dst-jpg_p480x480&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_ohc=H1RJwrTAm_gAX8yI1BQ&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAa9QDFEBX59e0pUVXQ9GbzBe2o9SY6UlGxP6XEftN9MQ&oe=658874DC"
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
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div id="review" className="">
      {/* chevron-right */}
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-1 bottom-28 z-50 bg-slate-200 hover:bg-slate-400 rounded-full p-1 "
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
        className="absolute right-1 bottom-28 z-50 bg-slate-200 hover:bg-slate-400 rounded-full p-1 ml-2"
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

const Review2 = () => {
  return (
    <div id="review" className="">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-12">
        কাস্টমার রিভিউ
      </h1>
      <div>
        <div className="App relative">
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
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
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              //   slidesPerView="auto"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div>
                    <div className=" h-60 w-full bg-slate-100 rounded-lg p-9">
                      <p className="text-slate-400 mb-5 text-justify">
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
                        <a href={review.url} target="_blank" className="hover:text-green-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-brand-facebook"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
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
              {/* <SwiperSlide>
                <div>
                  <div className=" h-60 w-full bg-slate-100 rounded-lg p-9">
                    <p className="text-slate-400 text-start mb-5">
                      আমি তাদের বিশ্বাস করে টাকা পাঠাই প্রোডাক্ট রিসিভ করার আগেই
                      এবং তারা আমার বিশ্বাস রক্ষা করে। প্রোডাক্ট ঠিকমত বুঝে
                      পেয়েছি এবং রিকমেন্ড করছি।
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <img
                          className="h-11 w-11 rounded-full"
                          src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/342501253_2403999883108561_327231943607014439_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ceTvsiHVF4QAX9kQsEe&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCPAFgCTB8bwbDZ__10niRoQVHPZEH-aA0dLTrCQfgypw&oe=65890C8B"
                          alt=""
                        />
                        <div className="text-start">
                          <h1 className="text-slate-600 font-semibold">
                            সাজ্জাদ হোসেইন
                          </h1>
                          <p className="text-slate-500">ঢাকা</p>
                        </div>
                      </div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-brand-facebook"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className=" h-60 w-full bg-slate-100 rounded-lg p-9">
                    <p className="text-slate-400 text-start mb-5">
                      দুই বার অর্ডার করেছি দুই বারই বেস্ট কোয়ালিটির চুইঝাল
                      পেয়েছি, অন্য জায়গা থেকেও অর্ডার করেছিলাম। তবে উনাদের মত
                      বেস্ট কেউ দিতে পারে নাই।
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <img
                          className="h-11 w-11 rounded-full"
                          src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/314523039_2253859021443428_2363062891664998573_n.jpg?stp=c0.103.480.480a_dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=2eLcl1SaMtcAX-tTkVy&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCO3P2BmUbJ_6MayGWG14sIdpbW60i10sSOHJsWzfdMdg&oe=6588AFE5"
                          alt=""
                        />
                        <div className="text-start">
                          <h1 className="text-slate-600 font-semibold">
                            আলম আহমেদ হৃদয়
                          </h1>
                          <p className="text-slate-500">ঢাকা</p>
                        </div>
                      </div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-brand-facebook"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className=" h-60 w-full bg-slate-100 rounded-lg p-9">
                    <p className="text-slate-400 text-start mb-5">
                      আমি তাদের বিশ্বাস করে টাকা পাঠাই প্রোডাক্ট রিসিভ করার আগেই
                      এবং তারা আমার বিশ্বাস রক্ষা করে। প্রোডাক্ট ঠিকমত বুঝে
                      পেয়েছি এবং রিকমেন্ড করছি।
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <img
                          className="h-11 w-11 rounded-full"
                          src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/342501253_2403999883108561_327231943607014439_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ceTvsiHVF4QAX9kQsEe&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCPAFgCTB8bwbDZ__10niRoQVHPZEH-aA0dLTrCQfgypw&oe=65890C8B"
                          alt=""
                        />
                        <div className="text-start">
                          <h1 className="text-slate-600 font-semibold">
                            সাজ্জাদ হোসেইন
                          </h1>
                          <p className="text-slate-500">ঢাকা</p>
                        </div>
                      </div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-brand-facebook"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className=" h-60 w-full bg-slate-100 rounded-lg p-9">
                    <p className="text-slate-400 text-start mb-5">
                      দুই বার অর্ডার করেছি দুই বারই বেস্ট কোয়ালিটির চুইঝাল
                      পেয়েছি, অন্য জায়গা থেকেও অর্ডার করেছিলাম। তবে উনাদের মত
                      বেস্ট কেউ দিতে পারে নাই।
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <img
                          className="h-11 w-11 rounded-full"
                          src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/357380215_2458285481005856_8845722829196627779_n.jpg?stp=dst-jpg_p480x480&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_ohc=H1RJwrTAm_gAX8yI1BQ&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAa9QDFEBX59e0pUVXQ9GbzBe2o9SY6UlGxP6XEftN9MQ&oe=658874DC"
                          alt=""
                        />
                        <div className="text-start">
                          <h1 className="text-slate-600 font-semibold">
                            আলম আহমেদ হৃদয়
                          </h1>
                          <p className="text-slate-500">ঢাকা</p>
                        </div>
                      </div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-brand-facebook"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review2;
