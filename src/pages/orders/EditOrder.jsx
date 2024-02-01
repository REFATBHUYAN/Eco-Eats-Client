import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Container from "../../components/Container";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrder,
  setOrder,
  updateOrderField,
  updateWeight,
} from "../../Redux/orderSlice";
import { ToastContainer, toast } from "react-toastify";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const EditOrder = () => {
  const { id } = useParams();
  // const [singleItem, setSingleItem] = useState({});
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);

  // const [selected, setSelected] = useState(moods[5]);

  useEffect(() => {
    fetch(`https://chui-jhal-server.vercel.app/singleorder/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setOrder(data[0]));
      });
  }, []);
  // console.log(singleItem);
  console.log("redux store", order);
  console.log("redux store food", order);

  // const originalObject = {
  //   name: "Product",
  //   quantity: 2,
  //   price: 25,
  //   category: "Electronics",
  // };

  // Create a new object excluding the "price" field
  const newObject = (({ _id, ...rest }) => rest)(order);

  // console.log("new order object without id ", newObject);

  const subTotalPrice = order?.food?.reduce((sum, item) => {
    const productPrice = item?.extraWeight
      ? (item.price / (item.weight === "১ কেজি" ? 1000 : 500)) *
          item?.extraWeight +
        item.price * item.quantity
      : item.price * item.quantity;
    return sum + productPrice;
  }, 0);

  const handleUpdateOrder = async (_id) => {
    try {
      const response = await fetch(
        // `http://localhost:5000/updateorder/${_id}`,
        `https://chui-jhal-server.vercel.app/updateorder/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newObject),
        }
      );

      if (response.ok) {
        toast.success("অর্ডার আপডেট সম্পন্ন হয়েছে। ধন্যবাদ!", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
        });
      } else {
        console.error("Failed to send email:", await response.text());
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  // const handlePrint = () => {
  //   window.print();
  // };
  return (
    <div className="w-full bg-white">
      <Container>
        <>
          <Helmet>
            <title>Invoice # {`${order?.invoice || order?._id}`}</title>
          </Helmet>

          <div className="bg-white mx-auto max-w-3xl my-4">
            <div>
              <div className="-mx-4 px-4 py-8 ring-0 ring-slate-100 sm:ring-1 sm:ring-inset sm:mx-0 sm:rounded-lg sm:p-8 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:p-16">
                <nav
                  className={`mx-auto flex items-center justify-between gap-x-6 `}
                  aria-label="Global"
                >
                  <div className="flex">
                    <a
                      href="/orders"
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
                  <div className="flex flex-1 lg:flex items-center justify-end gap-2">
                    <button
                      onClick={() => handleUpdateOrder(order?._id)}
                      className={`float-right py-2 px-2 rounded-lg bg-green-500 hover:bg-green-600 active:bg-green-700 ease-in duration-75 text-sm font-semibold text-white hover:text-white flex items-center gap-2`}
                    >
                      Update Order
                    </button>
                    {/* <button
                      onClick={handlePrint}
                      className={`float-right py-2 px-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 ease-in duration-75 text-sm font-semibold text-white hover:text-white flex items-center printButton gap-2`}
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
                    </button> */}
                  </div>
                </nav>

                <div className="flex justify-between">
                  <div className="mt-8 flex-1">
                    <dt className="inline text-base font-semibold text-slate-600">
                      Invoice #
                    </dt>{" "}
                    <dd className="inline text-sm font-semibold text-slate-400">
                      <time dateTime="2023-31-01">
                        {order?.invoice || order?._id}
                      </time>
                    </dd>
                  </div>
                  <div className="mt-8 flex-1 ml-8">
                    <dt className="inline text-base font-semibold text-slate-600">
                      Date:
                    </dt>{" "}
                    <dd className="inline text-sm font-semibold text-slate-400">
                      <time dateTime="2023-31-01">
                        {order?.date}; {order?.time && " " + order?.time}
                      </time>
                    </dd>
                  </div>
                </div>
                <dl className="grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
                  {/* <div className="sm:pr-4">
                  <dt className="inline text-slate-600">
                    {" "}
                    {singleItem?.invoice || singleItem?._id}
                  </dt>{" "}
                </div> */}

                  <div className="mt-6 border-t border-slate-200 pt-6 sm:pr-4">
                    <dt className="font-semibold text-slate-400">From</dt>
                    <dd className="mt-2">
                      <span className="font-medium text-slate-600">
                        EcoEats
                      </span>
                      <br />
                      <span className="font-light text-slate-600">
                        Sonadanga, Khulna 9100
                      </span>
                      <br />
                      <span className="font-light text-slate-600">
                        +8801753492987
                      </span>
                    </dd>
                  </div>
                  <div className="mt-8 sm:mt-6 sm:border-t sm:border-slate-200 sm:pl-4 sm:pt-6">
                    <dt className="font-semibold text-slate-400">To</dt>
                    <dd className="mt-1">
                      <span className="font-medium text-slate-600">
                        <input
                          type="text"
                          name="name"
                          defaultValue={order?.name}
                          onChange={(e) =>
                            dispatch(
                              updateOrderField({
                                field: e.target.name,
                                value: e.target.value,
                              })
                            )
                          }
                          id="name"
                          autoComplete="street-name"
                          className="block w-full rounded-lg border-0 py-1 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                        />
                      </span>
                      <br />
                      <span className="font-light text-slate-600">
                        <input
                          type="text"
                          name="address"
                          defaultValue={order?.address}
                          onChange={(e) =>
                            dispatch(
                              updateOrderField({
                                field: e.target.name,
                                value: e.target.value,
                              })
                            )
                          }
                          id="address"
                          autoComplete="street-address"
                          className="block w-full rounded-lg border-0 py-1 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                        />
                      </span>
                      <br />
                      <span className="font-light text-slate-600">
                        <input
                          type="text"
                          name="phone"
                          defaultValue={order?.phone}
                          onChange={(e) =>
                            dispatch(
                              updateOrderField({
                                field: e.target.name,
                                value: e.target.value,
                              })
                            )
                          }
                          id="phone"
                          autoComplete="street-phone"
                          className="block w-full rounded-lg border-0 py-1 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                        />
                      </span>
                    </dd>
                  </div>
                  {/* <div className="mt-8 sm:mt-6 sm:border-t sm:border-slate-200 sm:pl-4 sm:pt-6">
                    <dt className="font-semibold text-slate-400">To</dt>
                    <dd className="mt-2">
                      <span className="font-medium text-slate-600">
                        {singleItem?.name}
                      </span>
                      <br />
                      <span className="font-light text-slate-600">
                        {singleItem?.address}
                      </span>
                      <br />
                      <span className="font-light text-slate-600">
                        {singleItem?.phone}
                      </span>
                    </dd>
                  </div> */}
                </dl>
                <table className="mt-10 w-full whitespace-nowrap text-left text-sm text-slate-600">
                  <colgroup className="w-full">
                    <col />
                    <col className="w-full" />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead className="text-slate-400 border-b w-full border-slate-200 uppercase tracking-wide">
                    <tr>
                      <th
                        scope="col"
                        className="px-0 py-3 font-semibold text-xs"
                      >
                        SL
                      </th>
                      <th
                        scope="col"
                        className="px-0 py-3 font-semibold text-xs"
                      >
                        Ordered Items
                      </th>

                      <th
                        scope="col"
                        className="py-3 pl-8 pr-0 text-right font-semibold text-xs table-cell"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-8 pr-0 text-right font-semibold text-xs table-cell"
                      >
                        Qty
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-8 pr-0 text-right font-semibold text-xs"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.food?.map((item, i) => (
                      <tr key={item.id} className="border-y border-slate-100">
                        <td className="max-w-0 pr-8 py-5 align-top">{i + 1}</td>
                        <td className="max-w-0 px-0 py-5 align-top">
                          <div className="truncate font-medium text-slate-600">
                            {item.title}
                          </div>
                          <div className="truncate text-slate-400 font-light flex gap-2 items-center">
                            {item.weight}
                            {" +"}
                            <span className="flex items-center gap-1">
                              <input
                                type="number"
                                name="address"
                                defaultValue={item?.extraWeight}
                                // onChange={(e) => setAddress(e.target.value)}
                                onChange={(e) =>
                                  dispatch(
                                    updateWeight({
                                      id: item.id,
                                      quantity: e.target.value,
                                    })
                                  )
                                }
                                id="address"
                                autoComplete="street-address"
                                className="block w-16 rounded-lg border-0 py-1 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                              />{" "}
                              গ্রাম
                            </span>
                          </div>
                        </td>
                        <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-slate-600 table-cell">
                          {item.price} tk
                        </td>
                        <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-slate-600 table-cell">
                          {item.quantity}
                        </td>
                        <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-slate-600">
                          {item?.extraWeight
                            ? (item.price /
                                (item.weight === "১ কেজি" ? 1000 : 500)) *
                                item?.extraWeight +
                              item.price * item.quantity
                            : item.price * item.quantity}{" "}
                          tk
                        </td>
                        {/* <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-slate-600">
                            {item?.extraWeight ?( (item.price / item.weight === '১ কেজি' ? 1000 : 500) * item?.extraWeight) + (item.price * item.quantity) : item.price * item.quantity} tk
                          </td> */}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="px-0">
                    <h1 className="mt-4 font-semibold text-slate-600  text-xs uppercase">
                      ADJUSTMENTS
                    </h1>
                    <tr>
                      <th
                        scope="row"
                        colSpan={4}
                        className="px-0 pb-0 pt-6 text-slate-400  text-xs font-semibold uppercase"
                      >
                        Delivery Charge{" "}
                        <span>
                          <input
                            onChange={(e) =>
                              dispatch(
                                updateOrderField({
                                  field: e.target.name,
                                  value: parseInt(e.target.value),
                                })
                              )
                            }
                            className="ml-1 w-32 rounded-lg border-0 py-1 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm inline"
                            type="number"
                            name="extraDelCharge"
                            defaultValue={order?.extraDelCharge}
                            id="extraDelCharge"
                          />{" "}
                          tk
                        </span>
                      </th>

                      <th
                        scope="row"
                        colSpan={4}
                        className=" px-0 pb-0 pt-6 text-right font-semibold text-slate-400 table-cell text-xs uppercase"
                      >
                        Subtotal
                      </th>
                      <td className="pb-0 pl-8 pr-0 pt-6 text-right tabular-nums text-slate-600">
                        {subTotalPrice} tk
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan={4}
                        className="pt-4 font-semibold text-slate-400  text-xs "
                      >
                        Discount{" "}
                        <span>
                          <input
                            className="ml-1 w-32 rounded-lg border-0 py-1 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm inline"
                            onChange={(e) =>
                              dispatch(
                                updateOrderField({
                                  field: e.target.name,
                                  value: parseInt(e.target.value),
                                })
                              )
                            }
                            type="number"
                            name="discount"
                            defaultValue={order?.discount}
                            id="discount"
                          />{" "}
                          tk
                        </span>
                      </th>
                      <th
                        scope="row"
                        colSpan={4}
                        className=" pt-4 text-right font-semibold text-slate-400 table-cell text-xs uppercase"
                      >
                        DELIVERY
                      </th>
                      <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-slate-600">
                        {order?.deliveryCharge} tk
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan={4}
                        className="pt-4 font-semibold text-slate-400  text-xs"
                      >
                        Advance{" "}
                        <span>
                          <input
                            className="ml-1 w-32 rounded-lg border-0 py-1 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm inline"
                            type="number"
                            onChange={(e) =>
                              dispatch(
                                updateOrderField({
                                  field: e.target.name,
                                  value: parseInt(e.target.value),
                                })
                              )
                            }
                            name="advance"
                            defaultValue={order?.advance}
                            id="advance"
                          />{" "}
                          tk
                        </span>
                      </th>
                      <th
                        scope="row"
                        colSpan={4}
                        className=" pt-4 text-right font-semibold text-slate-600 table-cell text-xs uppercase"
                      >
                        Total
                      </th>
                      <td className="pb-0 pl-8 pr-0 pt-4 text-right font-semibold tabular-nums text-slate-600">
                        {order?.deliveryCharge + subTotalPrice + order?.extraDelCharge - order?.discount - order?.advance } tk
                      </td>
                      {/* <td className="pb-0 pl-8 pr-0 pt-4 text-right font-semibold tabular-nums text-slate-600">
                        {order?.deliveryCharge + subTotalPrice} tk
                      </td> */}
                    </tr>
                  </tfoot>
                </table>
                <div className="font-light text-slate-300 text-xs italic mt-8 text-center">
                  Thank you for shopping with us. Please contact our helpline or
                  chat with us for any issues. Have a nice day.
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </>
      </Container>
    </div>
  );
};

export default EditOrder;