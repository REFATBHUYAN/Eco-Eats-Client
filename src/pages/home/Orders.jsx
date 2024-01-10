import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCart, updateQuantity } from "../../Redux/cartSlice";

const foodItems = [
  {
    id: 1,
    checked: true,
    title: "গাছ চুইঝাল",
    weight: "৫০০ গ্রাম",
    price: 360,
    priceInBd: "৩৬০",
    quantity: 1,
    photo:
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411071827_864466802353286_1798985628233004209_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=_-K7JzHYGjwAX_CqnKT&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCGyJqvQFORraW4L-ffAcW_1vBUpJMEdPpF3R6Y1A4UVA&oe=65878ABC",
  },
  {
    id: 2,
    checked: false,
    title: "গাছ চুইঝাল",
    weight: "১ কেজি",
    price: 700,
    priceInBd: "৭০০",
    quantity: 1,
    photo:
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411437365_863795805753719_8755839441510138374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xtKXX4OArnsAX-0edYW&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA85Dzd2fen73UUo7RYtSsDUsqx35ulrZAyqNcOtA1gmg&oe=6587D7FC",
  },
  {
    id: 3,
    checked: false,
    title: "এটো চুইঝাল",
    weight: "৫০০ গ্রাম",
    price: 360,
    priceInBd: "৩৬০",
    quantity: 1,
    photo:
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411131277_862384709228162_7122716054042689418_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=fmJ3Tnb0OxcAX_-wxAy&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAxQK-bUlQjxzzGriaDxYXa3Zq9QJ6mz6svJi2VIQP5Vw&oe=658846F7",
  },
  {
    id: 4,
    checked: false,
    title: "এটো চুইঝাল",
    weight: "১ কেজি",
    price: 700,
    priceInBd: "৭০০",
    quantity: 1,
    photo:
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/409009017_858145352985431_383209555235447952_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=F6KUTcIA6ZoAX8fspDM&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA_mfQ0HCEUFaiGXJ2wlnEanCo97b6vaHQW5uouTMp9MA&oe=6587B32D",
  },
];
const products = [
  {
    id: 1,
    title: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Black",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];

const Orders = () => {
  const cart = useSelector(selectCart);
  let foodDatas = cart.items;
  let orderdFood = foodDatas.filter((food) => food.checked === true);
  // const [foodDatas, setFoodDatas] = useState(cart.items);
  const [chackedItem, setChackedItem] = useState(1);
  const [totalItem, setTotalItem] = useState(1);
  const [selectQuantity, setSelectQuantity] = useState(null);
  // const [setQuantity, setQuantityof] = useState(1);
  const [quantity1, setQuantityof1] = useState(1);
  const [quantity2, setQuantityof2] = useState(1);
  const [quantity3, setQuantityof3] = useState(1);
  const [quantity4, setQuantityof4] = useState(1);
  const [delivaryType, setDelivaryType] = useState("ঢাকার ভেতরে");
  const [delivaryCharge, setDelivaryCharge] = useState("৮০");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const deliveryMethods = [
    {
      id: 1,
      title: "Standard",
      turnaround: "4–10 business days",
      price: "$5.00",
    },
    {
      id: 2,
      title: "Express",
      turnaround: "2–5 business days",
      price: "$16.00",
    },
    {
      id: 3,
      title: "Express",
      turnaround: "2–5 business days",
      price: "$16.00",
    },
  ];
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );

  console.log(foodDatas);

  const selectedFood = foodDatas.find((food) => food.id === chackedItem);

  const handleDelivaryType = (e) => {
    setDelivaryType(e.target.value);
    event.target.value === "ঢাকার ভেতরে"
      ? setDelivaryCharge("৮০")
      : setDelivaryCharge("১০০");
  };
  console.log(delivaryType);

  // const notify = () => toast.success('Congratulations! আপনার অর্ডার সম্পন্ন হয়েছে',{duration: 4000,
  //   position: 'top-right', style: {
  //     borderRadius: '10px',
  //     background: '#333',
  //     color: '#fff',
  //   },});

  const orderedData = {
    name,
    address,
    phone,
    delivaryType,
    quantity:
      chackedItem === 1
        ? quantity1
        : chackedItem === 2
        ? quantity2
        : chackedItem === 3
        ? quantity3
        : quantity4,
    Food: selectedFood.title,
    foodPrice: selectedFood.price,
    TotalAmount:
      selectedFood.price *
        (chackedItem === 1
          ? quantity1
          : chackedItem === 2
          ? quantity2
          : chackedItem === 3
          ? quantity3
          : quantity4) +
      (delivaryCharge === "৮০" ? 80 : 100),
  };
  console.log(orderedData);

  const onOrderSubmit = async () => {
    try {
      const response = await fetch(
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
        toast.success("Congratulations! আপনার অর্ডার সম্পন্ন হয়েছে", {
          duration: 4000,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        console.error("Failed to send email:", await response.text());
      }
    } catch (error) {
      console.error("Error sending email:", error);
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
      <h1 className="text-3xl font-bold text-center text-green-600 mb-3">
        অর্ডার করুন এখনই
      </h1>
      <p className="text-center text-green-600 mb-12">
        আপনার পছন্দের চুইঝাল ও তার পরিমান সিলেক্ট করুন
      </p>
      <div>
        <div>
          <div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 w-full mx-auto">
              <div className="  w-full md:w-1/2">
                <h2 className="text-xl font-bold text-gray-900">
                  প্রোডাক্ট নির্বাচন করুন
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 w-full mx-auto my-4">
                  {foodDatas.map((food) => (
                    <div
                      onClick={() => handleAddToCart(food.id)}
                      key={food.id}
                      className={`w-full cursor-pointer  relative md:w-72  bg-slate-100 flex items-center p-2 border-[1px]  rounded-md dark:border-gray-700 ${
                        food.checked ? "border-green-500" : "border-gray-200"
                      }`}
                    >
                      <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                          <img
                            src={food.photo}
                            className="h-20 w-20 aspect-square object-cover rounded-md image-full"
                            alt=""
                          />
                          <div>
                            <h1 className={`font-semibold mb-4  ${
                        food.checked ? "text-green-500" : ""
                      }`}>{food.title}</h1>
                            <p className="flex items-center font-semibold text-green-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-currency-taka text-green-600"
                                width="20"
                                height="20"
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
                                <path d="M16.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5" />
                                <path d="M8 11h6" />
                              </svg>
                              <span className="mt-1.5">{food.priceInBd}</span>
                            </p>
                          </div>
                        </div>
                        <div className="mt-12">
                          <p className="mr-3">{food.weight}</p>
                        </div>
                      </div>
                      <div
                        className={`text-green-600 absolute top-2 right-2 ${
                          food.checked ? "block" : "hidden"
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
                <h2 className="text-xl font-bold text-gray-900 mt-8">
                  ডেলিভারী এড্রেস
                </h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      আপনার নাম
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        onChange={(e) => setName(e.target.value)}
                        id="company"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
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
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ডেলিভারী এরিয়া
                    </label>
                    <div className="mt-1">
                      <select
                        id="country"
                        name="country"
                        onChange={handleDelivaryType}
                        autoComplete="country-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      >
                        <option value={"ঢাকার ভেতরে"}>Inside Dhaka</option>
                        <option value={"ঢাকার বাহিরে"}>Outside Dhaka</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      মোবাইল নাম্বার
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="  w-full md:w-1/2 ">
                <h2 className="text-xl font-bold text-gray-900">
                  অর্ডার সামারি
                </h2>
                <div className="w-full mt-3">
                  {/* order summury */}
                  <div className="mt-4 border-dashed border-t-2 border-gray-200 bg-white shadow-sm">
                    <h3 className="sr-only">Items in your cart</h3>
                    <ul
                      role="list"
                      className="divide-y-2 divide-dashed divide-gray-200"
                    >
                      {orderdFood.map((food) => (
                        <div
                          // onClick={handleAddToCart}
                          key={food.id}
                          className="w-full py-6  relative"
                        >
                          <div className="flex justify-between w-full">
                            <div className="flex">
                              {/* <img
                                src={food.photo}
                                className="h-20 w-20 aspect-square rounded-md image-full"
                                alt=""
                              /> */}
                              <div>
                                <h1 className="font-semibold text-green-600 mb-4">
                                  {" "}
                                  {food.title}{" "}
                                  <span className="font-normal text-slate-300 text-base">
                                    {food.weight}
                                  </span>
                                </h1>
                                <p className="flex items-center font-semibold">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-currency-taka"
                                    width="20"
                                    height="20"
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
                                    <path d="M16.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5" />
                                    <path d="M8 11h6" />
                                  </svg>
                                  <span className="mt-1.5">
                                    {food.priceInBd}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="mt-12">
                              <button
                                onClick={() => handleAddToCart(food.id)}
                                className="hover:text-green-600 absolute top-6 right-6"
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
                              <div className="ml-4">
                                <label htmlFor="quantity" className="sr-only">
                                  Quantity
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
                                  className="rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm "
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
                    className={`flex justify-between items-center pt-2 ${
                      orderdFood.length === 0
                        ? ""
                        : "border-dashed border-t-2 border-slate-300 "
                    }`}
                  >
                    <h1 className="font-semibold">মোট</h1>
                    <h1 className="font-semibold text-green-600">
                      ট{" "}
                      {orderdFood.reduce(
                        (total, item) => total + item.quantity * item.price,
                        0
                      )}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center mt-6 py-2">
                    <h1 className="font-semibold">ডেলিভারী চার্জ</h1>
                    <h1 className="font-semibold text-green-600">
                      ট {delivaryCharge === "৮০" ? 80 : 100}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center border-dashed border-t-2 border-slate-300 pt-2">
                    <h1 className="font-semibold">সর্বমোট</h1>
                    <h1 className="font-semibold text-green-600">
                      ট{" "}
                      {orderdFood.reduce(
                        (total, item) => total + item.quantity * item.price,
                        0
                      ) + (delivaryCharge === "৮০" ? 80 : 100)}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center  mt-8">
                    <h1 className="font-semibold">ডেলিভারী মেথড</h1>
                    <h1 className="font-semibold text-green-600">
                      ক্যাশ অন ডেলিভারী
                    </h1>
                  </div>
                  <button
                    onClick={onOrderSubmit}
                    // onClick={notify}
                    disabled={name === "" || phone == "" ? true : false}
                    className="rounded-[10px] bg-green-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 items-center w-full mt-4"
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
                      <span className="pt-[2px] text-xl">
                        অর্ডার প্লেস করুন
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Orders;
