import React from "react";

const reasons1 = ['চুইঝাল গাছের কাণ্ডকে গাছ চুইঝাল বলে। স্থানীয়দের ভাষায় একে খাড়ি চুই বলা হয়ে থাকে',' গাছ চুইঝাল সাধারণত রান্নায় গলে যায় না, আস্ত  অবস্থায় থাকে','ঝাঁঝালো স্বাদযুক্ত এবং রান্নায় গলে না গিয়ে আস্ত থাকার জন্য যারা চিবিয়ে ঝাল স্বাদ উপভোগ তাদের পছন্দের তালিকার শীর্ষে থাকে গাছ চুইঝাল','সাধারণত একসাথে অধিক পরিমাণে মাংস রান্না, খিচুড়ি, চটপটি, হালিম, ছোলা ভুনা এবং সুস্বাদু আচার তৈরিতে গাছ চুই ঝাল ব্যবহার করা হয়','মাতৃগাছের ধরনভেদে গাছ চুইঝাল মাঝারি থেকে অধিক ঝাল স্বাদের হয়ে থাকে'];

const reasons2 = [
    'চুইঝাল গাছের গোড়া এবং গোড়া সংলগ্ন মোটা অথবা মাঝারি মোটা অংশকে এটো চুইঝাল বলে',
    'এঁটো চুইঝালে ফাইবার কম থাকায় এটি রান্নায় গলে গিয়ে গ্রেভি ফ্লেভার নিয়ে আসে',
    'তুলনামূলক কম-ঝালযুক্ত এবং রান্নায় গলে যাওয়ার জন্য এই চুইঝালও কিন্ত বেশ সুস্বাদু এবং সবার পছন্দের তালিকায় শীর্ষে থাকে',
    'যেকোনো ধরনের মাংস, ঝোলের তরকারি, মাছের ঝোল, মাছ ভুনা সহ যেকোনো ধরনের ভুনা তরকারিতে এঁটো চুইঝাল ব্যবহার করা হয়।',
    'মাঝারি সাইজের এটো চুইঝালে ঝালের তীব্রতা বেশি থাকে'
]



const TypesOfChuijhal = () => {
  return (
    <div className="my-28 w-full">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-12">
      চুইঝালের প্রকারভেদ
      </h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div>
            <h1 className="font-semibold text-lg text-left md:text-right mb-3">গাছ চুইঝাল</h1>
            <div className="flex flex-col md:flex-row gap-12">
                <img className="md:w-64 w-full rounded-md " src="/ecoeats/product/product-gach-chui.jpg" alt="" />
                <div className="md:w-80 w-full">
                    {
                        reasons1.map(reason => (
                            <div className="text-left md:text-right py-3 border-y-[1px] border-gray-200">{reason}</div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div>
            <h1 className="font-semibold text-lg text-left mb-3">এটো চুইঝাল</h1>
            <div className="flex flex-col md:flex-row gap-12">
                
                <div className="md:w-80 w-full">
                    {
                        reasons2.map(reason => (
                            <div className="text-left py-3 border-y-[1px] border-gray-200">{reason}</div>
                        ))
                    }
                </div>
                <img className="md:w-64 w-full rounded-md " src="/ecoeats/product/product-eto-chui.jpg" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOfChuijhal;
