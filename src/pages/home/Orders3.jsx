import React, { useEffect, useState } from "react";
// const toEn = n => n.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));

const foodItems = [
  {
    id: 1,
    title: "গাছ চুইঝাল",
    weight: "৫০০ গ্রাম",
    price: 360,
    priceInBd: "৩৬০",
    quantity: 1,
  },
  {
    id: 2,
    title: "গাছ চুইঝাল",
    weight: "১ কেজি",
    price: 700,
    priceInBd: "৭০০",
    quantity: 1,
  },
  {
    id: 3,
    title: "এটো চুইঝাল",
    weight: "৫০০ গ্রাম",
    price: 360,
    priceInBd: "৩৬০",
    quantity: 1,
  },
  {
    id: 4,
    title: "এটো চুইঝাল",
    weight: "১ কেজি",
    price: 700,
    priceInBd: "৭০০",
    quantity: 1,
  },
];

// const toEn = (n) => n.replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯".indexOf(d));

// const toBn = (n) => n.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);

const Orders3 = () => {
  const [foodDatas, setFoodDatas] = useState(foodItems);
  const [chackedItem, setChackedItem] = useState(1);
  const [totalItem, setTotalItem] = useState(1);
  const [quantity1, setQuantityof1] = useState(1);
  const [quantity2, setQuantityof2] = useState(1);
  const [quantity3, setQuantityof3] = useState(1);
  const [quantity4, setQuantityof4] = useState(1);
  const [delivaryType, setDelivaryType] = useState("ঢাকার ভেতরে");
  const [delivaryCharge, setDelivaryCharge] = useState("৮০");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  console.log(chackedItem);
  const selectedFood = foodDatas.find((food) => food.id === chackedItem);

  const handleDelivaryType = (e) => {
    setDelivaryType(e.target.value);
    event.target.value === "ঢাকার ভেতরে"
      ? setDelivaryCharge("৮০")
      : setDelivaryCharge("১০০");
  };
  console.log(delivaryType);

  const plusQuantity = (id) => {
    if (id === 1) {
      setQuantityof1(quantity1 + 1);
    }
    if (id === 2) {
      setQuantityof2(quantity2 + 1);
    }
    if (id === 3) {
      setQuantityof3(quantity3 + 1);
    }
    if (id === 4) {
      setQuantityof4(quantity4 + 1);
    }
  };
  const minusQuantity = (id) => {
    if (id === 1) {
      setQuantityof1(quantity1 - 1);
    }
    if (id === 2) {
      setQuantityof2(quantity2 - 1);
    }
    if (id === 3) {
      setQuantityof3(quantity3 - 1);
    }
    if (id === 4) {
      setQuantityof4(quantity4 - 1);
    }
  };

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
      const response = await fetch("https://chui-jhal-server.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderedData),
      });

      if (response.ok) {
        alert("Order Food successfull!");

      } else {
        console.error("Failed to send email:", await response.text());
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div id="order" className="pb-4 pt-12">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-3">
        অর্ডার করুন এখনই
      </h1>
      <p className="text-center text-green-600 mb-12">
        আপনার পছন্দের চুইঝাল ও তার পরিমান সিলেক্ট করুন
      </p>
      <div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mx-auto">
            {foodDatas.map((food) => (
              <div
                key={food.id}
                className="w-full md:w-72 h-20 bg-slate-100 flex items-center ps-4 border border-gray-200 rounded-md dark:border-gray-700"
              >
                <input
                  id="bordered-radio-1"
                  type="radio"
                  checked={chackedItem === food.id ? true : false}
                  value={food.id}
                  onChange={() => setChackedItem(food.id)}
                  name="bordered-radio"
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500  "
                />
                <label
                  for="bordered-radio-1"
                  className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="font-semibold">{food.title}</h1>
                      <p>{food.weight}</p>
                    </div>
                    <div className="text-center">
                      <h1 className="font-bold text-green-600">
                        ট{food.priceInBd}
                      </h1>
                      <div className="flex justify-center items-center gap-2">
                        <button
                          onClick={() => minusQuantity(food.id)}
                          className="bg-slate-100 rounded-md p-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-minus"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                          </svg>
                        </button>
                        {food.id === 1 ? (
                          <p>{quantity1}</p>
                        ) : food.id === 2 ? (
                          <p>{quantity2}</p>
                        ) : food.id === 3 ? (
                          <p>{quantity3}</p>
                        ) : (
                          <p>{quantity4}</p>
                        )}
                        <button
                          onClick={() => plusQuantity(food.id)}
                          className="bg-slate-100 rounded-md p-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-plus"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 w-full mx-auto">
              <div className="mt-10 pt-10 w-full md:w-1/2">
                <h2 className="text-xl font-bold text-gray-900">
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
              <div className="mt-10 pt-10 w-full md:w-1/2 relative">
                <h2 className="text-xl font-bold text-gray-900">
                  অর্ডার সামারি
                </h2>
                <div className="w-full mt-3">
                  <div className="flex justify-between items-center border-b border-slate-300 pb-1">
                    <h1>প্রোডাক্ট</h1>
                    <h1>সাবটোটাল</h1>
                  </div>
                  <div className="py-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h1 className="font-semibold text-base">
                          {selectedFood.title}
                        </h1>
                        <>
                          ৫০০ গ্রাম x{" "}
                          {chackedItem === 1
                            ? quantity1
                            : chackedItem === 2
                            ? quantity2
                            : chackedItem === 3
                            ? quantity3
                            : quantity4}
                        </>
                      </div>
                      <div className="text-center">
                        <h1 className="font-bold text-green-600">
                          ট{selectedFood.priceInBd}
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <h1 className="font-semibold text-base">
                          ডেলিভারী চার্জ
                        </h1>
                        <p>{delivaryType}</p>
                      </div>
                      <div className="text-center">
                        <h1 className="font-bold text-green-600">
                          ট{delivaryCharge}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-300 pt-2">
                    <h1 className="font-semibold">সর্বমোট</h1>
                    <h1 className="font-semibold text-green-600">
                      ট{" "}
                      {selectedFood.price *
                        (chackedItem === 1
                          ? quantity1
                          : chackedItem === 2
                          ? quantity2
                          : chackedItem === 3
                          ? quantity3
                          : quantity4) +
                        (delivaryCharge === "৮০" ? 80 : 100)}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center  mt-8">
                    <h1 className="font-semibold">ডেলিভারী মেথড</h1>
                    <h1 className="font-semibold text-green-600">
                      ক্যাশ অন ডেলিভারী
                    </h1>
                  </div>
                  <button onClick={onOrderSubmit} disabled={name === '' || phone == '' ? true : false } className="rounded-[10px] bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 items-center absolute bottom-0 right-0">
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
        </div>
      </div>
    </div>
  );
};

export default Orders3;
