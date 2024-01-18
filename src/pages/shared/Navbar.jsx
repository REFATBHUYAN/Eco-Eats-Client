import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const navigation = [
  { name: "পরিচিতি", href: "about" },
  { name: "পার্থক্য", href: "difference" },
  { name: "ফিচারস", href: "features" },
  { name: "রিভিউ", href: "review" },
  { name: "জিজ্ঞাসা", href: "faq" },
  { name: "গ্যালারী", href: "gallery" },
  { name: "যোগাযোগ", href: "contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showBorder, setShowBorder] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBorder(true);
        // console.log("yes scrolled");
      } else {
        setShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const borderClasses = showBorder
    ? "border-slate-200 shadow-md"
    : "border-transparent";

  return (
    <>
      <header className={`bg-white ${borderClasses}`}>
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-x-6 pt-4 pb-4 px-4 `}
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
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
          <div className="flex flex-1 items-center justify-end gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                activeClass="active"
                smooth={true}
                offset={-100}
                spy={true}
                className="hidden hover:text-green-500 cursor-pointer lg:block text-base font-semibold leading-6 text-slate-600"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to={"order"}
              smooth={true}
              offset={-100}
              activeClass="text-white"
              spy={true}
              className="rounded-xl cursor-pointer bg-green-500 px-5 py-2 text-sm font-semibold text-white hover:bg-green-600 items-center"
            >
              <div className="flex gap-2 justify-center items-center">
                <img className="h-5 w-5 -pt-2" src="/icons/orders.svg" alt="" />
                <span className="pt-[4px]">অর্ডার করুন</span>
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open Main Menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
            <div className="flex items-center gap-x-6">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">ইকোইটস</span>
                <img
                  className="h-8 w-auto"
                  src=""
                  alt=""
                />
              </a>
              <a
                href="#"
                className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close Menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                    key={item.name}
                    activeClass="active"
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    smooth={true}
                    offset={-100}
                    spy={true}
                      className="-mx-3 hover:text-green-500 block cursor-pointer rounded-xl px-3 py-2 text-base font-semibold leading-7 text-slate-600 hover:bg-slate-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold leading-7 text-slate-600 hover:bg-slate-50"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;
