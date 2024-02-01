import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const SuccessPage = () => {
  const { id } = useParams();
  // console.log(id);
  const [order, setOrder] = useState();

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response1 = await fetch(
        //   `http://localhost:5000/singleorder/${id}`
          `https://chui-jhal-server.vercel.app/singleorder/${id}`
        );
        const result1 = await response1.json();

        //   setSelectCelender(false);
        setOrder(result1[0]);
        //   setFilterData(result1);
        //   setDataUpdated(false);
      } catch (error) {
        console.error("Error fetching data1:", error);
      }
    };
    fetchData1();
  }, []);

  console.log(order);

  return (
    <div className="px-4">
      <div className="mx-auto max-w-3xl my-4">
        <div className="-mx-4 px-4 py-8 ring-0 ring-slate-100 sm:ring-1 sm:ring-inset sm:mx-0 sm:rounded-lg sm:p-8 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:p-16">
          <div className="w-full">
            <div className="flex">
              <Link
                to={'/'}
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
              </Link>
            </div>
            <h1 className="text-sm font-medium tracking-wide text-slate-600 mt-16">
              অসংখ্য ধন্যবাদ!
            </h1>
            <p className="mt-2 text-3xl font-bold text-green-500 sm:text-4xl">
              অর্ডার সাকসেসফুল
            </p>
            <p className="mt-2 text-base text-slate-400">
              আপনার অর্ডারের জন্য কৃতজ্ঞতা জানাচ্ছি, কিছুক্ষনের মধ্যে অর্ডারটি প্রসেস করা হবে। শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব, সাথেই থাকুন।
            </p>

            <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm">
              <div>
                  <span className="inline text-base font-semibold text-slate-600">Invoice # </span>
                  <span className="inline text-sm font-semibold text-slate-400">{order?.invoice}</span>
              </div>
              <div>
                  <span className="inline text-base font-semibold text-slate-600">Date: </span>
                  <span className="inline text-sm font-semibold text-slate-400">{order?.date}; {order?.time && " " + order?.time}</span>
              </div>
            </dl>


            <ul
              role="list"
              className="mt-6 border-t border-slate-100 divide-y divide-slate-100 text-sm"
            >
              {order?.food.map((product) => (
                <li key={product.id} className="flex space-x-4 py-4">
                  <img
                    src={product.photo}
                    className="h-24 w-24 flex-none rounded-lg bg-slate-100 object-cover object-center"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="font-medium text-slate-600">
                      <p>{product.title}</p>
                    </h3>
                    <div className="text-slate-400 font-light">{product.weight}</div>
                    <div className="pt-6 text-slate-400 font-light">x {product.quantity}</div>
                  </div>
                  <p className="flex-none text-slate-600">
                    {product.price} tk
                  </p>
                </li>
              ))}
            </ul>

            <dl className="space-y-6 border-t border-slate-100 pt-6 text-sm text-slate-400">
              <div className="flex justify-between">
                <dt className="text-xs font-semibold uppercase">Subtotal</dt>
                <dd className="text-slate-600">{order?.totalPrice} tk</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-xs font-semibold uppercase">Delivery</dt>
                <dd className="text-slate-600">{order?.deliveryCharge} tk</dd>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-6 text-slate-600">
                <dt className="text-xs font-semibold uppercase">Total</dt>
                <dd className="font-semibold">
                  {order?.totalPrice + order?.deliveryCharge} tk
                </dd>
              </div>
            </dl>

            <dl className="mt-16 grid sm:grid-cols-2 grid-cols-1 gap-x-4 text-sm">
              <div>
                <dt className="font-semibold text-slate-400">
                  Address
                </dt>
                <dd className="mt-2">
                  <address className="not-italic">
                    <span className="block font-medium text-slate-600">{order?.name}</span>
                    <span className="block font-light text-slate-400">{order?.address}</span>
                    <span className="block font-light text-slate-400">{order?.phone}</span>
                  </address>
                </dd>
              </div>
              <div className="mt-8 sm:mt-0">
                <dt className="font-semibold text-slate-400">
                  Delivery
                </dt>
                <dd className="mt-2">
                  <span className="block font-medium text-slate-600">ক্যাশ অন ডেলিভারী</span>
                  <span className="block font-light text-slate-400">প্রোডাক্ট হাতে পেয়ে ডেলিভারী ম্যানকে দাম পরিশোধ করবেন। ইকোইটস এর সাথে থাকার জন্য ধন্যবাদ।</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;