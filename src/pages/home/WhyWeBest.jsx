import React from "react";
import Container from "../../components/Container";

const WhyWeBest = () => {
  return (
    <div id="features" className="my-28 w-full">
      <Container>
        <h1 className="text-3xl font-bold text-center text-green-600 mb-12">
          কেন আমরাই সেরা
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">
            <div>
              <img
                className="h-20 w-20 rounded-xl bg-slate-100  p-6 text-green-600 group-hover:bg-green-600 group-hover:text-white"
                src="/ecoeats/features/authentic.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-600">
              অথেন্টিক প্রোডাক্ট
            </h1>

            <p className="text-center text-slate-600">
              আমাদের কাছেই পাচ্ছেন সেরা স্বাদ যুক্ত খুলনার দেশীয় চুইঝাল
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">
            <div>
              <img
                className="h-20 w-20 rounded-xl bg-slate-100  p-6 text-green-600 group-hover:bg-green-600 group-hover:text-white"
                src="/ecoeats/features/premium.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-600">
              প্রিমিয়াম কোয়ালিটি
            </h1>

            <p className="text-center text-slate-600">
              রেগুলার বা অপরিপক্ক নয়, আমরাই দিচ্ছি বাছাইকৃত প্রিমিয়াম
              কোয়ালিটির চুইঝাল
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">
            <div>
              <img
                className="h-20 w-20 rounded-xl bg-slate-100  p-6 text-green-600 group-hover:bg-green-600 group-hover:text-white"
                src="/ecoeats/features/refund.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-600">
              রিফান্ড পলিসি
            </h1>

            <p className="text-center text-slate-600">
              যেকোন ত্রুটিপূর্ণ পণ্যের ক্ষেত্রে থাকছে পণ্য অথবা টাকা রিফান্ডের
              সুবিধা
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">
            <div>
              <img
                className="h-20 w-20 rounded-xl bg-slate-100  p-6 text-green-600 group-hover:bg-green-600 group-hover:text-white"
                src="/ecoeats/features/delivery.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-600">
              ক্যাশ অন ডেলিভারী
            </h1>

            <p className="text-center text-slate-600">
              আমাদের রয়েছে পন্য হাতে পেয়ে তারপর টাকা পরিশোধ করার সুব্যবস্থা
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyWeBest;
