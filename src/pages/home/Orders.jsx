
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCart, updateQuantity } from "../../Redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = () => {
  const cart = useSelector(selectCart);
  let foodDatas = cart.items;
  let orderedFood = foodDatas.filter((food) => food.checked === true);
  
  const [deliveryType, setdeliveryType] = useState("ঢাকার ভেতরে");
  const [deliveryCharge, setdeliveryCharge] = useState("৮০");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  

  const handledeliveryType = (e) => {
    setdeliveryType(e.target.value);
    event.target.value === "ঢাকার ভেতরে"
      ? setdeliveryCharge("৮০")
      : setdeliveryCharge("১০০");
  };
  

  const orderedData = {
    name,
    address,
    phone,
    deliveryType,

    Food: orderedFood,
    totalPrice:
      orderedFood.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      ) ,
    deliveryCharge : (deliveryCharge === "৮০" ? 80 : 100),
  };
  console.log(orderedData)

  const onOrderSubmit = async () => {
    setLoading(true)
    if ((name === "") | (address === "") | (phone === "")) {

      return toast.error("আপনার নাম, ঠিকানা এবং মোবাইল নাম্বার সঠিকভাবে দিন।", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
    } else {
      try {
        const response = await fetch(
          // "http://localhost:5000/send-email",
          "https://chui-jhal-server.vercel.app/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(orderedData),
          }
        );

        if (response.ok) {
          
          toast.success("অর্ডার সম্পন্ন হয়েছে। শীঘ্রই আপনার সাথে যোগাযোগ করা হবে। ধন্যবাদ!", {
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
    }
  };

  //   use of redux
  const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(1);
  const handleAddToCart = (id) => {
    dispatch(addItem(id));
    const cart = useSelector(selectCart);
    setFoodDatas(cart.items);
  };
  // const handleUpdateQuantity = (e) => {
  //   const quantity = e.target.value;
  //   console.log(quantity)
  //   // dispatch(updateQuantity( {id, quantity} ));
  // };

  return (
    <div id="order" className="pb-4 mt-28">
      <h1 className="text-3xl font-bold text-center text-green-500 mb-12">
        অর্ডার করুন এখনই
      </h1>
      <div>
        <div>
          <div>
            <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto">
              <div className="w-full lg:w-1/2">
                <h2 className="text-xl font-bold text-slate-600">
                  প্রোডাক্ট নির্বাচন করুন
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mx-auto mt-4">
                  {foodDatas.map((food) => (
                    <div
                      onClick={() => handleAddToCart(food.id)}
                      key={food.id}
                      className={` w-full cursor-pointer relative bg-slate-100 border-0 border-inset border-slate-300  focus:border-green-500 focus:outline-none ring-inset focus:ring-inset flex items-center p-2 rounded-xl ${
                        food.checked
                          ? "ring-green-500 ring-2"
                          : "ring-slate-200 ring-1"
                      }`}
                    >
                      <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                          <img
                            src={food.photo}
                            className="h-20 w-20 aspect-square object-cover rounded-lg image-full"
                            alt=""
                          />
                          <div>
                            <h1
                              className={`font-semibold mb-6 line-clamp-1 ${
                                food.checked
                                  ? "text-green-500"
                                  : "text-slate-600"
                              }`}
                            >
                              {food.title}
                            </h1>
                            <p className="flex items-center font-light text-slate-600">
                              &#x9F3; {food.priceInBd}
                            </p>
                          </div>
                        </div>
                        <div className="mt-12">
                          <p className="mr-1 text-slate-400 font-light line-clamp-1">{food.weight}</p>
                        </div>
                      </div>
                      <div
                        className={`text-green-500 absolute top-2 right-2 ${
                          food.checked
                            ? "block"
                            : "hidden"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-circle-check-filled"
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
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-slate-600 mt-16">
                  ডেলিভারী এড্রেস
                </h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-slate-400"
                    >
                      আপনার নাম
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        autoComplete="name"
                        className="block w-full rounded-lg border-0 py-1.5 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium leading-6 text-slate-400"
                    >
                      আপনার ঠিকানা
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                        id="address"
                        autoComplete="street-address"
                        className="block w-full rounded-lg border-0 py-1.5 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-slate-400"
                    >
                      ডেলিভারী এরিয়া
                    </label>
                    <div className="mt-1">
                      <select
                        name="city"
                        onChange={handledeliveryType}
                        id="city"
                        autoComplete="city"
                        className="block w-full rounded-lg border-0 py-1.5 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                      >
                        <option
                          className="hover:bg-green-500 font-light"
                          value={"ঢাকার ভেতরে"}
                        >
                          Inside Dhaka - ঢাকার ভেতরে - ৳ ৮০{" "}
                        </option>
                        <option
                          className="hover:bg-green-500 font-light"
                          value={"ঢাকার বাইরে"}
                        >
                          Outside Dhaka - ঢাকার বাইরে - ৳ ১০০{" "}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-slate-400"
                    >
                      মোবাইল নাম্বার
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        id="phone"
                        autoComplete="phone"
                        className="block w-full rounded-lg border-0 py-1.5 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <h2 className="text-xl font-bold text-slate-600">
                  অর্ডার সামারি
                </h2>
                <div className="w-full mt-3">
                  {/* order summury */}
                  <div className="mt-4 border-dashed border-t-2 border-slate-200 bg-white">
                    <h3 className="sr-only">কার্টের প্রোডাক্ট</h3>
                    <ul
                      role="list"
                      className="divide-y-2 divide-dashed divide-slate-200"
                    >
                      {orderedFood.map((food) => (
                        <div
                          // onClick={handleAddToCart}
                          key={food.id}
                          className="w-full pt-6 pb-5 relative"
                        >
                          <div className="flex justify-between w-full">
                            <div className="flex">
                              {/* <img
                                src={food.photo}
                                className="h-20 w-20 aspect-square rounded-md image-full"
                                alt=""
                              /> */}
                              <div>
                                <h1 className="font-semibold text-green-500 mb-4">
                                  {" "}
                                  {food.title}{" "}
                                  <span className="font-light text-slate-400 text-base">
                                    {food.weight}
                                  </span>
                                </h1>
                                <p className="flex items-center font-bold text-slate-600">
                                  <span className="mt-1.5">
                                    &#x9F3; {food.priceInBd}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="mt-8">
                              <button
                                onClick={() => handleAddToCart(food.id)}
                                className="hover:text-green-500 absolute top-6 right-6"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-trash"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path d="M4 7l16 0" />
                                  <path d="M10 11l0 6" />
                                  <path d="M14 11l0 6" />
                                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                              </button>
                              <div className="">
                                <label htmlFor="quantity" className="sr-only">
                                  পরিমাণ
                                </label>
                                <select
                                  onChange={(e) =>
                                    dispatch(
                                      updateQuantity({
                                        id: food.id,
                                        quantity: e.target.value,
                                      })
                                    )
                                  }
                                  id="quantity"
                                  defaultValue={food.quantity}
                                  name="quantity"
                                  className="block w-full rounded-lg py-1.5 border-0 border-slate-300 text-left text-md font-medium text-slate-600 ring-1 ring-inset ring-slate-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                >
                                  <option
                                    className="hover:bg-green-100"
                                    value={1}
                                  >
                                    1
                                  </option>
                                  <option
                                    className="hover:bg-green-100"
                                    value={2}
                                  >
                                    2
                                  </option>
                                  <option
                                    className="hover:bg-green-100"
                                    value={3}
                                  >
                                    3
                                  </option>
                                  <option
                                    className="hover:bg-green-100"
                                    value={4}
                                  >
                                    4
                                  </option>
                                  <option
                                    className="hover:bg-green-100"
                                    value={5}
                                  >
                                    5
                                  </option>
                                  <option
                                    className="hover:bg-green-100"
                                    value={6}
                                  >
                                    6
                                  </option>
                                  <option
                                    className="hover:bg-green-100"
                                    value={7}
                                  >
                                    7
                                  </option>
                                  <option
                                    className="hover:bg-green-100"
                                    value={8}
                                  >
                                    8
                                  </option>
                                  <option
                                    className="hover:bg-green-100"
                                    value={9}
                                  >
                                    9
                                  </option>
                                  <option
                                    className="hover:bg-green-100"
                                    value={10}
                                  >
                                    10
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                  {/* order summary finised */}
                  <div
                    className={`flex justify-between items-center pt-6 ${
                      orderedFood.length === 0
                        ? ""
                        : "border-dashed border-t-2 border-slate-200 "
                    }`}
                  >
                    <h1 className="font-semibold">মোট</h1>
                    <h1 className="font-semibold text-green-500">
                      &#x9F3;{" "}
                      {orderedFood.reduce(
                        (total, item) => total + item.quantity * item.price,
                        0
                      )}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center py-6">
                    <h1 className="font-semibold">ডেলিভারী চার্জ</h1>
                    <h1 className="font-semibold text-green-500">
                      &#x9F3; {deliveryCharge === "৮০" ? 80 : 100}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center border-dashed border-t-2 border-slate-200 pt-6">
                    <h1 className="font-semibold">সর্বমোট</h1>
                    <h1 className="font-semibold text-green-500">
                      &#x9F3;{" "}
                      {orderedFood.reduce(
                        (total, item) => total + item.quantity * item.price,
                        0
                      ) + (deliveryCharge === "৮০" ? 80 : 100)}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center py-6">
                    <h1 className="font-semibold">ডেলিভারী মেথড</h1>
                    <h1 className="font-semibold text-green-500">
                      ক্যাশ অন ডেলিভারী
                    </h1>
                  </div>
                  <button
                    // onClick={onOrderSubmit2}
                    onClick={onOrderSubmit}
                    // onClick={notify}
                    disabled={orderedFood.length === 0 ? true : false}
                    className="rounded-lg disabled:bg-slate-400 disabled:cursor-not-allowed bg-green-500 px-5 py-3 text-md font-semibold text-white hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 items-center w-full"
                  >
                    <div className="flex gap-2 justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-circle-check"
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
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                        অর্ডার প্লেস করুন
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <Toaster /> */}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Orders;
