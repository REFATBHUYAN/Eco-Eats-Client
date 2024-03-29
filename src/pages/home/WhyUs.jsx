import React from "react";
import Container from "../../components/Container";

const WhyUs = () => {
  return (
    <div id="features" className="my-28 w-full">
      <Container>
        <h1 className="text-3xl font-bold text-center text-green-500 mb-12 line-clamp-1">
          কেন আমরাই সেরা
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="group flex cursor-pointer flex-col items-center gap-3 text-slate-400">
            <div>
              <img
                className="h-20 w-20 rounded-lg bg-slate-50 p-6 text-green-500 group-hover:bg-slate-100 group-hover:text-white ease-in duration-75"
                src="/media/features/authentic.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-500 ease-in duration-75 line-clamp-1">
              অথেন্টিক প্রোডাক্ট
            </h1>

            <p className="text-center text-slate-400 line-clamp-2 font-light">
              আমাদের কাছেই পাচ্ছেন সেরা স্বাদ যুক্ত খুলনার অথেন্টিক দেশীয় চুইঝাল
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col items-center gap-3 text-slate-400 ">
            <div>
              <img
                className="h-20 w-20 rounded-lg bg-slate-50 p-6 text-green-500 group-hover:bg-slate-100 group-hover:text-white ease-in duration-75"
                src="/media/features/premium.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-500 ease-in duration-75 line-clamp-1">
              প্রিমিয়াম কোয়ালিটি
            </h1>

            <p className="text-center text-slate-400 line-clamp-2 font-light">
              রেগুলার বা অপরিপক্ক নয়, আমরাই দিচ্ছি বাছাইকৃত প্রিমিয়াম কোয়ালিটির চুইঝাল
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col items-center gap-3 text-slate-400 ">
            <div>
              <img
                className="h-20 w-20 rounded-lg bg-slate-50 p-6 text-green-500 group-hover:bg-slate-100 group-hover:text-white ease-in duration-75"
                src="/media/features/refund.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-500 ease-in duration-75 line-clamp-1">
              রিফান্ড পলিসি
            </h1>

            <p className="text-center text-slate-400 line-clamp-2 font-light">
              যেকোন ত্রুটিপূর্ণ পণ্যের ক্ষেত্রে থাকছে পণ্য অথবা টাকা রিফান্ডের সুবিধা
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col items-center gap-3 text-slate-400 ">
            <div>
              <img
                className="h-20 w-20 rounded-lg bg-slate-50 p-6 text-green-500 group-hover:bg-slate-100 group-hover:text-white ease-in duration-75"
                src="/media/features/delivery.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-500 ease-in duration-75 line-clamp-1">
              ক্যাশ অন ডেলিভারী
            </h1>

            <p className="text-center text-slate-400 line-clamp-2 font-light">
              আমাদের রয়েছে পন্য হাতে পেয়ে তারপর টাকা পরিশোধ করার সুব্যবস্থা
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
