import React, { Fragment, useEffect, useState } from "react";
import Container from "../../components/Container";
import jsPDF from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import Footer from "../shared/Footer";
// import { DateRangePicker } from "dates-picker";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { addMonths, isSameMonth } from "date-fns";
// import PickDate from "./PickDate";

const generatePdf = (orderItems) => {
  // Create a new instance of jsPDF
  const pdf = new jsPDF();
  pdf.setFont("SolaimanLipi"); // set custom font (SolaimanLipi)
  pdf.setFontSize(10);

  const item = `
    Customer Name: ${orderItems.name}
    Address: ${orderItems.address} 
    Delivery Type: ${
      orderItems.deliveryType === "ঢাকার ভেতরে"
        ? "Inside Dhaka - 80 tk"
        : "Outside Dhaka - 100 tk"
    }
    Mobile: ${orderItems.phone}
    Ordered Item:
        ${orderItems.food?.map(
          (food, i) => `
                  ${i + 1}. ${food.title} - ${food.weight}
                  Price: ${food.price} tk
                  Quantity: ${food.quantity}
                  Subtotal: ${food.quantity * food.price} tk
        `
        )}
    Total Amount: ${orderItems.totalPrice} + ${orderItems.deliveryCharge} = ${
    orderItems.deliveryCharge + orderItems.totalPrice
  } tk`;

  // Add content to the PDF
  pdf.text("Order Details", 20, 10);

  // orderItems.forEach((item, index) => {
  const yOffset = 20 + 30;
  pdf.text(`Product Name: ${orderItems.name}`, 20, yOffset);
  pdf.text(`Quantity: ${orderItems.totalPrice}`, 20, yOffset + 10);
  pdf.text(`Price per Unit: $${orderItems.phone}`, 20, yOffset + 20);
  pdf.text(`Total: $${orderItems.date}`, 20, yOffset + 30);
  pdf.text(`Total: $${item}`, 20, yOffset + 30);
  // Add more details if needed
  // });

  // Save the PDF
  pdf.save("order_details.pdf");
};

const filtersOptions = [
  { name: "All Orders", href: "#" },
  { name: "Pending", href: "#" },
  { name: "Shipped", href: "#" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AllOrders = () => {
  // const newDate = new Date().toISOString().split("T")[0];
  // const dhakaDate = new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Dhaka' });
  const [date, setDate] = useState(moment().format().split("T")[0]);
  const [allData, setAllData] = useState([]);
  const [dataUpdated, setDataUpdated] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  // const dhakaTime = new Date().toLocaleString( { timeZone: 'Asia/Dhaka' }).split("T")[0];
  const timestamp = new Date().toISOString();
  const [allOrders, setAllOrders] = useState([]);
  const [filterOption, setFilterOption] = useState("All Orders");
  const today = new Date();
  const nextMonth = addMonths(new Date(), 0);
  const [month, setMonth] = useState(nextMonth);
  const [selected, setSelected] = useState(today);
  const formattedDate = format(selected, "yyyy-MM-dd");
  const [selectCalender, setSelectCelender] = useState(false);

  // scroll code
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [ShowButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
        // console.log("yes scrolled");
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonClasses = ShowButton
    ? "shadow-md ease-in duration-75"
    : "border-transparent border-red-200 hidden";
    // scroll code finished

  console.log("time stamp", timestamp);

  console.log(date);

  // useEffect(() => {
  //   fetch(`https://chui-jhal-server.vercel.app/orders/${date}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllData(data);
  //       setFilterData(data);
  //     });
  // }, [date, dataUpdated]);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response1 = await fetch(
          `https://chui-jhal-server.vercel.app/orders/${formattedDate}`
        );
        const result1 = await response1.json();
        setSelectCelender(false);
        setAllData(result1);
        setFilterData(result1);
        setDataUpdated(false);
      } catch (error) {
        console.error("Error fetching data1:", error);
      }
    };

    const fetchData2 = async () => {
      try {
        const response2 = await fetch(
          `https://chui-jhal-server.vercel.app/allorders`
        );
        const result2 = await response2.json();
        setAllOrders(result2);
      } catch (error) {
        console.error("Error fetching data2:", error);
      }
    };

    // Call both fetchData functions
    fetchData1();
    fetchData2();
  }, [selected, dataUpdated]);

  // console.log(filterData)
  console.log(allData);
  const handleStatusDelivered = async (_id) => {
    try {
      const response = await fetch(
        // `http://localhost:5000/update/${_id}`,
        `https://chui-jhal-server.vercel.app/delivered/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setDataUpdated(true);
        toast.success("অর্ডার শিপড হিসেবে মার্ক করা হয়েছে!", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
        });
      } else {
        console.error("Failed to updade status:", await response.text());
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  const handleStatusPending = async (_id) => {
    try {
      const response = await fetch(
        // `http://localhost:5000/update/${_id}`,
        `https://chui-jhal-server.vercel.app/pending/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setDataUpdated(true);
        toast.warn("অর্ডার পেন্ডিং হিসেবে মার্ক করা হয়েছে!", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
        });
      } else {
        console.error("Failed to updade status:", await response.text());
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDate = (e) => {
    setFilterOption("All Orders");
    setDate(e.target.value);
    const todaysData = allData.filter((d) => d.date === e.target.value);
    setFilterData(todaysData);
  };

  const handleFilter = (item) => {
    setFilterOption(item);
    if (item === "All Orders") {
      setFilterData(allData);
    } else {
      setFilterData(allData.filter((d) => d.status === item));
    }
    // const pendingData = allData.filter((d) => d.status === "Pending");
    // setFilterData(pendingData);
  };

  const footer = (
    <button
      className="rounded-lg bg-slate-400 hover:bg-green-600 active:bg-green-700 px-3 py-1.5 text-xs font-semibold text-white items-center gap-1 mt-4"
      
      // disabled={isSameMonth(today, month)}
      onClick={() => {
        setMonth(today);
        setSelected(today);
      }}
    >
      Go to Today
    </button>
  );

  // setDate(formattedDate)
  console.log("selected day", formattedDate);

  return (
    <div className="bg-white">
      <DashboardNav></DashboardNav>
      <Container>
        <div className="pt-28">
          <h3 className="text-xl font-bold text-slate-600">Daily Summary</h3>
          <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-pink-200 ring-1 bg-pink-50/50">
              <div className="absolute rounded-md bg-pink-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-shopping-cart stroke-pink-500"
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
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Orders Today
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {filterData.length}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-green-200 ring-1 bg-green-50/50">
              <div className="absolute rounded-md bg-green-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-check stroke-green-500"
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
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Completed Orders
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {allData.filter((d) => d.status === "Shipped").length}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-amber-200 ring-1 bg-amber-50/50">
              <div className="absolute rounded-md bg-amber-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-alert-triangle stroke-amber-500"
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
                  <path d="M12 9v4" />
                  <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Pending Orders
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {allData.filter((d) => d.status === "Pending").length}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-indigo-200 ring-1 bg-indigo-50/50">
              <div className="absolute rounded-md bg-indigo-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-dollar stroke-indigo-500"
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
                  <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                  <path d="M12 3v3m0 12v3" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Sales Today
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {`${allData
                    .filter((d) => d.date === date)
                    .reduce((acc, item) => acc + item.totalPrice, 0)} tk`}
                </p>
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-8 py-8 flex items-center justify-between gap-4 w-full">
          {/* <input
            className="block rounded-lg py-1.5 border-0 border-slate-300 text-md font-medium text-slate-600 ring-1 ring-inset ring-slate-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
            //  ring-1 ring-inset ring-slate-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6
            type="date"
            value={date}
            onChange={handleDate}
            name=""
            id=""
          /> */}

          <div className="relative">
            <button
              onClick={() => setSelectCelender(!selectCalender)}
              className={`text-slate-600 ring-green-600/20 inline-flex items-center rounded-lg py-2 px-3 border-0 border-slate-300 text-left text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 gap-2`}
            >
              {formattedDate === date ? "Today" : formattedDate}
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar text-slate-400" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M11 15h1" /><path d="M12 15v3" /></svg>
            </button>
            <div
              className={`absolute left-0 z-50 mt-2 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-slate-200 focus:outline-none transform opacity-100 scale-100 ${
                selectCalender ? "block" : "hidden"
              }`}
            >
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
                month={month}
                onMonthChange={setMonth}
                captionLayout="dropdown-buttons"
                fromYear={2023}
                toYear={2034}
              />
            </div>
          </div>

          {/* <PickDate></PickDate> */}

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group inline-flex justify-center w-full rounded-lg py-2 px-3 border-0 border-slate-300 text-left text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-300  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 gap-2">
                {filterOption}
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter-cog text-slate-400" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5" /><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19.001 15.5v1.5" /><path d="M19.001 21v1.5" /><path d="M22.032 17.25l-1.299 .75" /><path d="M17.27 20l-1.3 .75" /><path d="M15.97 17.25l1.3 .75" /><path d="M20.733 20l1.3 .75" /></svg>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-slate-200 focus:outline-none">
                <div className="py-1">
                  {filtersOptions.map((option) => (
                    <Menu.Item key={option}>
                      {({ active }) => (
                        <button
                          onClick={() => handleFilter(option.name)}
                          className={classNames(
                            active ? "bg-slate-100 w-full text-start" : "",
                            "block px-4 py-2 text-sm font-medium text-slate-600"
                          )}
                        >
                          {option.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600 sm:pl-3"
                    >
                      Invoice
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Mobile
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {filterData.map((person, personIdx) => (
                    <tr
                      key={person._id}
                      className={
                        personIdx % 2 === 0 ? undefined : "bg-slate-50"
                      }
                    >
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-slate-400 sm:pl-3">
                          <Link
                            to={`/orders/${person._id}`}
                            target="_blank"
                            className="hover:text-green-500 active:text-green-600 ease-in duration-75"
                          >{person?.invoice || person._id} 
                          </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-500">
                        <span
                          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset  ${
                            person.status === "Pending"
                              ? "text-amber-500 bg-amber-50 ring-amber-600/20"
                              : "text-green-500 bg-green-50 ring-green-600/20"
                          }`}
                        >
                          {person.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        <Link
                          to={`/orders/${person._id}`}
                          target="_blank"
                          className="hover:text-green-500 active:text-green-600 ease-in duration-75"
                        >{person.name}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        {person.phone}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        {person.totalPrice + person.deliveryCharge} tk
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        {person.date}
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 h-10">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleStatusPending(person._id)}
                            className="py-1.5 px-1.5 rounded-md bg-amber-400 hover:bg-amber-500 active:bg-amber-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-alert-triangle"
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
                              <path d="M12 9v4" />
                              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                              <path d="M12 16h.01" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleStatusDelivered(person._id)}
                            className="py-1.5 px-1.5 rounded-md bg-green-400 hover:bg-green-500 active:bg-green-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-circle-check"
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
                              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                              <path d="M9 12l2 2l4 -4" />
                            </svg>
                          </button>

                          {/* <button
                          onClick={() =>
                            document.getElementById(`${person._id}`).showModal()
                          }
                          className="py-1.5 px-1.5 rounded-md bg-amber-400 hover:bg-amber-500 active:bg-amber-600 ease-in duration-75 font-semibold text-white hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-eye"
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
                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                          </svg>
                        </button> */}
                          <Link
                            to={`/orders/${person._id}`}
                            target="_blank"
                            className="py-1.5 px-1.5 rounded-md bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-eye"
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
                              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                            </svg>
                          </Link>
                          <dialog id={`${person._id}`} className="modal">
                            <div className="modal-box w-full text-left">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                  ✕
                                </button>
                              </form>
                              <h3 className="font-bold text-lg">
                                Ordered Item of {person.name}!
                              </h3>
                              <div className="py-4">
                                {person?.food?.map((item, i) => (
                                  <div>
                                    <h1 className="font-semibold text-green-500">
                                      {i + 1}. {item.title} - {item.weight}
                                    </h1>
                                    <p className="pl-4">Price: {item.price}</p>
                                    <p className="pl-4">
                                      Quantity: {item.quantity}
                                    </p>
                                    <p className="pl-4">
                                      Sub-Total: {item.quantity * item.price}
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <button
                                onClick={() => generatePdf(person)}
                                className="bg-green-400 py-1.5 px-3 rounded"
                              >
                                Print Invoice
                              </button>
                            </div>
                          </dialog>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filterData.length === 0 && (
                <div className="font-light text-slate-400 text-sm italic text-center w-full mx-auto">
                  <div className="px-3 py-4 border-t border-slate-200">No orders found for this date!</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="my-16">
          <h3 className="text-xl font-bold text-slate-600">Website Summary</h3>
          <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-purple-200 ring-1 bg-purple-50/50">
              <div className="absolute rounded-md bg-purple-100 p-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-shopping-bag stroke-purple-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                  </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Total Orders
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {allOrders.length}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-teal-200 ring-1 bg-teal-50/50">
              <div className="absolute rounded-md bg-teal-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-star stroke-teal-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Total Completed
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {allOrders.filter((d) => d.status === "Shipped").length}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-orange-200 ring-1 bg-orange-50/50">
              <div className="absolute rounded-md bg-orange-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-reload stroke-orange-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
                  <path d="M20 4v5h-5" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Total Pending
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {allOrders.filter((d) => d.status === "Pending").length}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-sky-200 ring-1 bg-sky-50/50">
              <div className="absolute rounded-md bg-sky-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-briefcase stroke-sky-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Total Sales
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {`${allOrders.reduce(
                    (acc, item) => acc + item.totalPrice,
                    0
                  )} tk`}
                </p>
              </dd>
            </div>
          </dl>
        </div>
        <ToastContainer />
      </Container>
      <Footer></Footer>
      <button
          onClick={scrollToTop}
          className={`float-right fixed cursor-pointer z-30 right-7 bottom-14 h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-green-500 active:bg-green-700 active:scale-95 ease-in duration-75 opacity-50 hover:opacity-100 shadow-xl ${buttonClasses}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-up text-white mx-auto"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 15l6 -6l6 6"></path>
          </svg>
        </button>
    </div>
  );
};

export default AllOrders;
