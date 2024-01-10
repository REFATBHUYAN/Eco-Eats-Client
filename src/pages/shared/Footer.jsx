import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full mx-auto pb-10 bg-slate-900 dark:bg-slate-950 relative">
      <Container>
        <footer className="footer py-16 text-slate-400  rounded-md">
          <aside>
            <Link
              to="/"
              className="normal-case text-xl flex items-center gap-2"
            >
              <img
                className="block h-10 w-10"
                src="/favicon.ico"
                alt="Your Company"
              />
              <span className="text-green-600 hidden md:block text-4xl">
                ইকোইটস
              </span>
            </Link>
            <p className="w-[350px] md:w-96 leading-6">
              ২০২০ সাল থেকে ইকোইটস সর্বপ্রথম এটো এবং গাছ চুইঝাল এর নাম প্রচলন
              করে অনলাইন দুনিয়ায় বিক্রি শুরু করে। এখন এটাকে কপি করে অনেকে অনেক
              ভাবে ব্যবহার করছে। পাশাপাশি খুলনার দেশি চুইঝালের কথা বলে বিক্রি
              হচ্ছে পাহাড়ি এবং উত্তরাঞ্চলের চুইঝাল। কিন্তু জিনিস যেটা ভালো দাম
              তার একটু বেশিই, কারণ এর পিছনে শ্রমও যায় বেশি।
            </p>
          </aside>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
            <nav className="space-y-5 flex flex-col">
              <header className="font-bold text-slate-300 ">
                আমাদের ঠিকানা
              </header>
              <div className="link no-underline hover:text-green-600 flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-map-pin"
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
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                সোনাডাংগা, খুলনা ৯১০০
              </div>
              <div className="link no-underline hover:text-green-600 flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail"
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
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
                ecoeats.bd@gmail.com
              </div>
              <div className="link no-underline hover:text-green-600 flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-headset"
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
                  <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                  <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                  <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                  <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                </svg>
                +8801753 492987
              </div>
            </nav>
            <nav className="space-y-5 flex flex-col">
              <header className="font-bold text-slate-300">
                সোশ্যাল মিডিয়া
              </header>
              <div className="flex gap-2 items-center">
                <a
                  href="https://www.facebook.com/groups/ecoeats"
                  target="_blank"
                  className="h-10 cursor-pointer w-10 flex items-center justify-center rounded-[10px] bg-slate-700 hover:bg-green-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-users rounded-md"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/ecoeatsbangladesh"
                  target="_blank"
                  className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-[10px] bg-slate-700 hover:bg-green-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-facebook"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                  </svg>
                </a>
                <a
                  href="https://m.me/ecoeatsbangladesh"
                  target="_blank"
                  className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-[10px] bg-slate-700 hover:bg-green-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-messenger"
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
                    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                    <path d="M8 13l3 -2l2 2l3 -2" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/+8801753492987"
                  target="_blank"
                  className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-[10px] bg-slate-700 hover:bg-green-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-whatsapp"
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
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                </a>
                <a
                  href="mailto:ecoeats.bd@gmail.com"
                  target="_blank"
                  className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-[10px] bg-slate-700 hover:bg-green-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-mail"
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
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </a>
                <a href="tel:+8801753 492987" target="_blank" className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-[10px] bg-slate-700 hover:bg-green-600 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-headset"
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
                    <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                    <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                    <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                    <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </footer>
        <div className="divider bg-[#334155] h-[1px] my-0"></div>
        <footer className="footer w-full flex justify-between  text-slate-400">
          <aside className="flex gap-1 mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-copyright"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173"></path>
            </svg>
            <p>2017-2023 CyberSpace. All rights reserved.</p>
          </aside>
          <div className="mt-8">
            <h1>Fueled By CyberSpace Digital</h1>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
