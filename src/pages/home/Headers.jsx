import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css"; // import css

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

const Headers = () => {
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
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-[10px] bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 items-center"
              >
                <div className="flex gap-2 justify-center items-center">
                  {/* <img className="h-5 w-5 stroke-white" src="/icons/star.svg" alt="" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-star"
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
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                  <span className="pt-[4px] text-base">
                    কাস্টমার রিভিউ দেখুন
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="h-full  w-80 md:w-full mx-auto flex-none rounded-[10px] object-cover shadow-xl lg:max-w-sm">
            <Player
              src="/icons/video.mp4"
              // fluid={false}
              // height={547}
              // width={320}
              poster="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411196028_863897912410175_7176641708716339469_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=S2KLsdyEx4wAX8-6E9q&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAlgruH4D3W65FjFKKJlwZOTQjN_wLilSbQrtvnkSOKlg&oe=6587E571"
            >
              <BigPlayButton position="center" />
            </Player>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;
