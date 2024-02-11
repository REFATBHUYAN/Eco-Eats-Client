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
      "চুই ঝাল ছাড়া কোরবানির ঈদের গরুর মাংস রান্না জমে নাকি? তাই অথেনটিক মোটা জাতের চুই ঝাল পেতে ইকোইটস এ অর্ডার করেছিলাম। ধন্যবাদ খুব ভালো মানের ফ্রেশ চুই ঝাল পাঠানোর জন্য। চুই ঝাল কলাপাতায় মুড়িয়ে তারপর প্যাকেট করে ডেলিভারি করা হয়েছিলো, যাতে নষ্ট না হয়ে যায়।",
    name: "শোয়েব মাহমুদ",
    address: "ঢাকা",
    url: "https://www.facebook.com/shoaib.mahmood.12/posts/pfbid07ZLq2GpXtCvPe7mgsW1D9jqmsFXsnpNiNEFrEGmmJkxHZAiJpbh5TZo5T4g1jwfal",
    photo:"/media/review/review-1.jpg"
  },
  {
    id: 2,
    description:
      "আলহামদুলিল্লাহ। প্রথমবার চুই ঝাল অর্ডার করেছিলাম। তাদের বিশ্বাসযোগ্যতা ও আতিথেয়তা দেখে আমি মুগ্ধ। বিশেষ করে পণ্য হাতে পেয়ে পরে মূল্য পরিশোধের বিষয়টি কাস্টমারদের প্রতি তাদের অগাধ বিশ্বাসের প্রতিফলনই শুধু নয়, তাদের প্রতি চরম আস্থা রাখার ব্যবসায়ীক কৌশলও বটে। আমি প্রতিষ্ঠানটির সর্বোপরি সাফল্য কামনা করি।",
    name: "শফিকুল ইসলাম মান্না",
    address: "বরিশাল",
    url: "https://www.facebook.com/safiqul.islammanna/posts/pfbid0FAmdkh6gCB6eJUsuidJdnf9VSECXxapu1JW8chax4UupgVhHy4YEJMv554BczLN9l",
    photo:"/media/review/review-2.jpg"
  },
  {
    id: 3,
    description:
      "ভাই যখন বুঝলেন, চুই সম্পর্কে আমার একেবারেই আইডিয়া নেই, আমার অর্ডারকৃত এঁটো চুইয়ের সাথে এক গোছা গাছ চুইও পাঠিয়ে দিলেন গিফট হিসেবে। আর টেস্ট নিয়ে কিছু বলার নাই, ফার্স্ট ক্লাস চুই।",
    name: "মল্লিক গালিব শাহরিয়ার",
    address: "ঢাকা",
    url: "https://www.facebook.com/Mallik.Galib.Shahriar/posts/pfbid02HatJzFtG2Abkhr9ogCKh9eag9kngoQvHtNuL9xKKk7gDPL6DxtDdzTL9PMJnmdK5l",
    photo:"/media/review/review-3.jpg"
  },
  {
    id: 4,
    description:
      "কম দামে ভালো মানের চুইঝাল কোথায় পাওয়া যাবে অনেক দিন ধরে খুজছিলাম ফাইনালি পেয়ে যাই ইকোইটস এ। পেজের ফাস্ট ডেলিভারি এবং প্যাকিজিং আমার খুবই ভালো লেগেছে। কলাপাতায় মুড়িয়ে তারপর প্যাকেট করে ডেলিভারি করা হয়েছিলো যেন একদম ফ্রেশ চুইঝাল আমি হাতে পাই। অনেক শুভকামনা রইল ইকোইটস।",
    name: "শাহেনুর ইসলাম",
    address: "ঢাকা",
    url: "https://www.facebook.com/tania.islamtina/posts/pfbid02DdmBs4T6JNn6Boh8oVHtfQWHLL6Q3vdYTTNJETKbHGej3w7n44YFZUKXwY3E9W1bl",
    photo:"/media/review/review-4.jpg"
  },
  {
    id: 5,
    description:
      "আমি আজকে ডেলিভারি পেয়েছি। আপনাদের পণ্য গুণগত মান অনেক ভালো। তাই আমি অনেক খুশি। অনেক ধন্যবাদ আপনাদের।",
    name: "জসিম রায়হান",
    address: "নারায়নগঞ্জ",
    url: "https://www.facebook.com/jasim.rayhan.3/posts/pfbid0SeQVwxD2c7cgMMGu1jJrYNHUKKdRBJ4gNAqvq33v3sAq4vRi2KNAQ1h4g4upD7wZl",
    photo:"/media/review/review-5.jpg"
  },
  {
    id: 6,
    description:
      "আজ প্রথমবারের মত মাংসের সাথে খেলাম। আলহামদুলিল্লাহ ভালোই লেগেছে। ভাল জিনিস পাঠানোর জন্য ধন্যবাদ ও শুভকামনা।",
    name: "রাশেদুল হাসান শ্রাবন",
    address: "ঢাকা",
    url: "https://www.facebook.com/rashedulhasan.srabon/posts/pfbid02xMXENRWvzBAVYQMFK8D3pKKvUDHMfmdUwTz9bZAKah1gtqnLbTxNPTEs1pswsJ8Tl",
    photo:"/media/review/review-6.jpg"
  },
  {
    id: 7,
    description:
      "ধন্যবাদ আপনাদের নরসিংদী, মাধবদী বসে ফ্রেশ চুই ঝালের স্বাদ উপভোগ করার মতো ব্যবস্থা করে দেয়ার জন্য। লাইফের ফার্স্ট টাইম স্বাদটা নিলাম।",
    name: "সুমন আহমেদ",
    address: "নরসিংদী",
    url: "https://www.facebook.com/somon.ahammad.9634/posts/pfbid02bRS4J8VJTywUojkow4GruQS5bvoYcmdRzAaX7oYMMzQRPTFWX5iRgZAze6eeumLol",
    photo:"/media/review/review-7.jpg"
  },
  {
    id: 8,
    description:
      "চুইগুলো আমার খুব পছন্দ হয়েছে। এটা সত্যিই গরুর মাংসের স্বাদ অনেকগুন বাড়িয়ে দিয়েছে। ইকোইটস সবাইকে রিকমেন্ড করছি। ধন্যবাদ।",
    name: "সৈয়দা সানি",
    address: "ঢাকা",
    url: "https://www.facebook.com/syeda.sani/posts/pfbid02QeKB84PLUbjQaaBL2L9debKtXAqeNvpjPtS1PjnxMzoBDpkKXfRvxiyYcWK5AkRpl",
    photo:"/media/review/review-8.jpg"
  },
  {
    id: 9,
    description:
      "সেরা চুই এর সাথে সেরা পন্য। গতকাল অর্ডার করেছি এবং আজই ডেলিভারী পেয়েছি। সেবা এবং গুণগত মান ১০০ তে ১০০। ইকোইটস এর জন্য শুভকামনা।",
    name: "এস এ শশী",
    address: "ঢাকা",
    url: "https://www.facebook.com/bechara.shoshi/posts/pfbid021CYDpeBTMAHwd3T11LCamQtv49dLViJsct2Kv4BccB7oKt29pK4uDnBvK2FjUGYZl",
    photo:"/media/review/review-9.jpg"
  },
  {
    id: 10,
    description:
      "খুবই ভালো সার্ভিস পেয়েছি। প্রোডাক্টের মান দারুন। এবং পন্যটি অর্গানিক। এই পেজের প্রতি কৃতজ্ঞতা জানাচ্ছি। ধন্যবাদ আপনাদের।",
    name: "সাগর হোসেন",
    address: "ঢাকা",
    url: "https://www.facebook.com/howlader.sagor.520/posts/pfbid038Pq63p89DMNQVwGGnrwibhMNGi6tbGouyzwLui54jviPgcgjiwf4yB5aUuntFRaSl",
    photo:"/media/review/review-10.jpg"
  },
  {
    id: 11,
    description:
      "দুই বার অর্ডার করেছি দুই বারই বেস্ট কোয়ালিটির চুইঝাল পেয়েছি, অন্য জায়গা থেকেও অর্ডার করেছিলাম। তবে উনাদের মত বেস্ট কেউ দিতে পারে নাই।",
    name: "আলম আহমেদ হৃদয়",
    address: "ঢাকা",
    url: "https://www.facebook.com/TofayelAlamBD/posts/pfbid02u6a6iQEoKofFpEwwrxLMDiVYofy1c64sb71uQyX1zZEEGkfh8MUWVUAqizBukoLXl",
    photo:"/media/review/review-11.jpg"
  },
  {
    id: 12,
    description:
      "আমি তাদের বিশ্বাস করে টাকা পাঠাই প্রোডাক্ট রিসিভ করার আগেই এবং তারা আমার বিশ্বাস রক্ষা করে। প্রোডাক্ট ঠিকমত বুঝে পেয়েছি এবং রিকমেন্ড করছি।",
    name: "সাজ্জাদ হোসেইন",
    address: "ঢাকা",
    url: "https://www.facebook.com/shazzad.hossain1/posts/pfbid0wP9rufPMoDzTDkCLJGvXz2HBRZMCSDwVZwJBAxnMKxFHHWLh2UY9doH8zrVnHdT3l",
    photo:"/media/review/review-12.jpg"
  },
  {
    id: 13,
    description:
      "ইকোইটসকে অনেক ধন্যবাদ আমাকে একদম ফ্রেশ চুইঝাল দেওয়ার জন্য ও কিভাবে ব্যবহার করতে হয় সেটা শেখানোর জন্য। দাম খুবই রিজনেবল প্রোডাক্ট অনুযায়ী।",
    name: "সৈকত ব্যাপাই",
    address: "চট্টগ্রাম",
    url: "https://www.facebook.com/saikot.bapai01/posts/pfbid02E7GSMxhNWL6FfXc6FQQhhWfgX2PKarFLjc8PVX9XDVX34g5aDVNTnhT5ZAMamTQMl",
    photo:"/media/review/review-13.jpg"
  },
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div id="review" className="">
      {/* chevron-right */}
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-1 top-32 z-50 bg-slate-200 hover:bg-green-500 active:bg-green-600 ease-in duration-75 rounded-full p-1 "
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
        className="absolute right-1 top-32 z-50 bg-slate-200 hover:bg-green-500 active:bg-green-600 ease-in duration-75 rounded-full p-1 ml-2"
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
    <div id="review" className="my-28">
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
                delay: 4000,
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
                  <div className="group cursor-pointer">
                    <a href={review.url} target="_blank">
                      <div className="h-72 w-full bg-slate-50 rounded-lg p-9 group-hover:bg-slate-100 ease-in duration-75">
                        <div className="flex gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((item) => (
                            
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-star-filled text-amber-400"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                                stroke-width="0"
                                fill="currentColor"
                              />
                            </svg>
                          ))}
                        </div>
                        <p className="text-slate-400 mb-8 line-clamp-3 font-light">
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
                              <h1 className="text-slate-600 group-hover:text-green-500 font-semibold line-clamp-1">
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
                    </a>
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
