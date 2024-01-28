import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Bars3Icon,
  CalendarDaysIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";

import Container from "../../components/Container";

const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: FireIcon,
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: FaceSmileIcon,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: FaceFrownIcon,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: HandThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: XMarkIconMini,
    iconColor: "text-slate-400",
    bgColor: "bg-transparent",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SingleOrders = () => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(moods[5]);

  console.log(singleItem);

  useEffect(() => {
    fetch(`https://chui-jhal-server.vercel.app/singleitem/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleItem(data);
      });
  }, []);

  const handlePrint = () => {
    window.print();
  };
  return (
    <Container>
      <main>
        <div className="mx-auto max-w-7xl my-4">
          <div>
            <div className="-mx-4 px-4 py-8 ring-0 ring-slate-100 sm:ring-1 sm:ring-inset sm:mx-0 sm:rounded-lg sm:p-8 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:p-16">
              <div className="flex">
                <Link
                  to="/orders"
                  className="normal-case text-xl flex items-center gap-2"
                >
                  <img
                    className="block h-8 w-auto"
                    src="/ecoeats/site-icon/ecoeats-icon.svg"
                  />
                  <span className="text-2xl font-bold text-green-500">
                    ইকো<span className="text-green-400">ইটস</span>
                  </span>
                </Link>

                <button
                  onClick={handlePrint}
                  className="float-right py-2 px-4 rounded-lg bg-green-400 hover:bg-green-500 active:bg-green-600 ease-in duration-75 text-sm font-semibold text-white hover:text-white flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-printer"
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
                    <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                    <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                    <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
                  </svg>
                  Print
                </button>


              </div>
              <div className="mt-8">
                <dt className="inline text-base font-semibold text-slate-600">
                  Invoice #
                </dt>{" "}
                <dd className="inline text-sm font-semibold text-slate-400">
                  <time dateTime="2023-31-01">
                    {singleItem?.invoice || singleItem?._id}
                  </time>
                </dd>
              </div>
              <dl className="grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
                {/* <div className="sm:pr-4">
                  <dt className="inline text-slate-600">
                    {" "}
                    {singleItem?.invoice || singleItem?._id}
                  </dt>{" "}
                </div> */}

                <div className="mt-6 border-t border-slate-100 pt-6 sm:pr-4">
                  <dt className="font-semibold text-slate-400">From</dt>
                  <dd className="mt-2">
                    <span className="font-medium text-slate-600">EcoEats</span>
                    <br />
                    <span className="font-light text-slate-600">Sonadanga, Khulna 9100</span>
                    <br />
                    <span className="font-light text-slate-600">+8801753492987</span>
                  </dd>
                </div>
                <div className="mt-8 sm:mt-6 sm:border-t sm:border-slate-100 sm:pl-4 sm:pt-6">
                  <dt className="font-semibold text-slate-400">To</dt>
                  <dd className="mt-2">
                    <span className="font-medium text-slate-600">
                      {singleItem?.name}
                    </span>
                    <br />
                    <span className="font-light text-slate-600">{singleItem?.address}</span>
                    <br />
                    <span className="font-light text-slate-600">{singleItem?.phone}</span>
                  </dd>
                </div>
              </dl>
              <table className="mt-10 w-full whitespace-nowrap text-left text-sm uppercase text-slate-600">
                <colgroup>
                  <col className="w-full" />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="text-slate-400">
                  <tr>
                    <th scope="col" className="px-0 py-3 font-semibold text-xs">
                      Ordered Items
                    </th>
                    <th scope="col" className="py-3 pl-8 pr-0 text-right font-semibold text-xs table-cell">
                      Price
                    </th>
                    <th scope="col" className="py-3 pl-8 pr-0 text-right font-semibold text-xs table-cell">
                      Qty
                    </th>
                    <th scope="col" className="py-3 pl-8 pr-0 text-right font-semibold text-xs">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {singleItem &&
                    singleItem?.food.map((item) => (
                      <tr key={item.id} className="border-y border-slate-100">
                        <td className="max-w-0 px-0 py-5 align-top">
                          <div className="truncate font-medium text-slate-600">
                            {item.title}
                          </div>
                          <div className="truncate text-slate-400 font-light">
                            {item.weight}
                          </div>
                        </td>
                        <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-slate-600 table-cell">
                          {item.price}
                        </td>
                        <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-slate-600 table-cell">
                          {item.quantity}
                        </td>
                        <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-slate-600">
                          {item.price * item.quantity}
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      scope="row"
                      colSpan={3}
                      className="px-0 pb-0 pt-6 font-semibold text-slate-400 sm:hidden text-xs font-semibold uppercase"
                    >
                      Subtotal
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden px-0 pb-0 pt-6 text-right font-semibold text-slate-400 sm:table-cell text-xs uppercase"
                    >
                      Subtotal
                    </th>
                    <td className="pb-0 pl-8 pr-0 pt-6 text-right tabular-nums text-slate-600">
                      {singleItem?.totalPrice}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      colSpan={3}
                      className="pt-4 font-semibold text-slate-400 sm:hidden text-xs uppercase"
                    >
                      Delivery
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-semibold text-slate-400 sm:table-cell text-xs uppercase"
                    >
                      Delivery
                    </th>
                    <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-slate-600">
                      {singleItem?.deliveryCharge}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      colSpan={3}
                      className="pt-4 font-semibold text-slate-600 sm:hidden text-xs uppercase"
                    >
                      Total
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-semibold text-slate-600 sm:table-cell text-xs uppercase"
                    >
                      Total
                    </th>
                    <td className="pb-0 pl-8 pr-0 pt-4 text-right font-semibold tabular-nums text-slate-600">
                      {singleItem?.deliveryCharge + singleItem?.totalPrice}
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className="font-light text-slate-300 text-xs italic mt-8 text-center">Thank you for shopping with us. Please contact our helpline or chat with us for any issues. Have a nice day.</div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default SingleOrders;
