import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [ShowShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowShadow(true);
        // console.log("yes scrolled");
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shadowClasses = ShowShadow ? "shadow-md" : "border-transparent";

  return (
    <>
      <header className={`bg-white ${shadowClasses} fixed z-50 top-0 w-full`}>
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-x-6 pt-4 pb-4 px-4 `}
          aria-label="Global"
        >
          <div className="flex ">
            <a
              href="/"
              className="-m-1.5 p-1.5 flex items-center gap-2 cursor-pointer"
            >
              <img
                className="block h-8 w-auto"
                src="/ecoeats/site-icon/ecoeats-icon.svg"
                alt=""
              />
              <div className="text-2xl font-bold text-green-500">
                ইকো<span className="text-green-400">ইটস</span>
              </div>
            </a>
          </div>

          <div className="cursor-pointer items-center">
            <div className="flex gap-2 justify-center items-center">
              <div className=" text-base font-semibold leading-6 text-slate-600">
                Dashboard
              </div>
              <div className="rounded-full p-1.5 bg-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" /></svg>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DashboardNav;
