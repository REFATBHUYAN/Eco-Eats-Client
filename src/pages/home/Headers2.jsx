import React from "react";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/20/solid";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css"; // import css

import ReactPlayer from "react-player";

const benefits = [
  "গরুর মাংস",
  "হাঁসের মাংস",
  "মাছ",
  "নিহারী",
  "খাসির মাংস",
  "মুড়ো ঘণ্ট",
  "সবজি",
  "হালিম",
  "মুরগির মাংস",
  "সবজি",
  "খিচুড়ি",
  "চটপটি",
];

const Headers2 = () => {
  return (
    <>
      <div id="about" className="mx-auto max-w-7xl">
        <div className="mx-auto flex w-full flex-col gap-16 bg-white/5  pt-6 ring-1 ring-white/10 sm:rounded-3xl lg:flex-row lg:items-center">
          <div className="w-full mx-auto flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
              খুলনার বিখ্যাত চুইঝাল!
            </h2>
            <p className="mt-6 text-xl leading-8 text-slate-500 text-justify">
              দৈনিক একঘেয়েমি রান্না খেতে খেতে বিরক্ত? রান্নায় এমন কিছু ব্যবহার
              করতে চান যেন রান্নার স্বাদ হয় আরো স্পেশাল? প্রতিদিনের রান্নায়
              টুইস্ট আনতে রান্নায় ব্যবহার করুন “চুইঝাল”। ঝাঁঝালো ঝাঁঝ যুক্ত এই
              মসলা রান্নায় মিশে দারুন স্বাদ তৈরি করে। যেকোন রান্নায় যোগ করে এক
              অতুলনীয় ফ্লেভার। বিভিন্ন মুখরোচক খাবারকে আরো বেশি মুখরোচক করে
              তোলে এই চুইঝাল। যেসব রান্নায় ব্যবহার করা যায়...
            </p>
            <ul
              role="list"
              className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-3"
            >
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-x-3 text-xl text-slate-400"
                >
                  <CheckCircleIcon
                    className="h-7 w-5 flex-none  "
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4">
              <div className="">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <StarIcon className="text-amber-500 h-6 w-6"></StarIcon>
                  ))}
                </div>
                <p className="w-56 h-11 text-amber-500 text-sm font-medium leading-normal">
                  ৩০,০০০ হাজারেরও অধিক গ্রাহকের কাছে আমরা চুই ঝাল পৌঁছে দিয়েছি!
                </p>
              </div>
              <a
                href="#"
                className="rounded-[10px] bg-green-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 items-center w-52 "
              >
                <div className="flex gap-2 justify-center items-center">
                  
                  <img className="h-5 w-5 -pt-2" src="/icons/orders.svg" alt="" />
                  <span className="pt-[4px] text-base">
                  অর্ডার করুন এখনই
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="h-full  w-full  mx-auto flex-none rounded-[10px] object-cover shadow-xl lg:max-w-sm">
            
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.facebook.com/ecoeatsbangladesh/videos/1998056963903868"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers2;
