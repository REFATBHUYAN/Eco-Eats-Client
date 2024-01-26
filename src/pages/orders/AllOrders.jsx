import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import jsPDF from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";

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

  console.log("time stamp", timestamp);

  console.log(date);

  useEffect(() => {
    fetch(`https://chui-jhal-server.vercel.app/orders/${date}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setFilterData(data);
      });
  }, [date,dataUpdated]);

  const stats = [
    // { name: "Total Orders", stat: allData.length },
    { name: "Orders Today", stat: filterData.length },
    {
      name: "Completed Orders",
      stat: allData.filter((d) => d.status === "Shipped").length,
    },
    {
      name: "Pending Orders",
      stat: allData.filter((d) => d.status === "Pending").length,
    },
    // {
    //   name: "Total Sales",
    //   stat: `${allData.reduce((acc, item) => acc + item.totalPrice, 0)} tk`,
    // },
    {
      name: "Sales Today",
      stat: `${allData
        .filter((d) => d.date === date)
        .reduce((acc, item) => acc + item.totalPrice, 0)} tk`,
    },
  ];

  // console.log(filterData)
  console.log(allData);
  const handleStatus = async (_id) => {
    try {
      const response = await fetch(
        // `http://localhost:5000/update/${_id}`,
        `https://chui-jhal-server.vercel.app/update/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setDataUpdated(true);
        toast.success("অর্ডার স্ট্যাটাস আপডেট করা হয়েছে!", {
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
    // console.log("date inpur", e.target.value.toLocaleDateString);
    // const times = moment(e.target.value).format();
    setDate(e.target.value);
    const todaysData = allData.filter((d) => d.date === e.target.value);
    setFilterData(todaysData);
  };

  const handleFilterPending = () => {
    const pendingData = allData.filter((d) => d.status === "Pending");
    setFilterData(pendingData);
  };

  return (
    <Container>
        <div className="mt-20 md:mt-28">
          <h3 className="text-xl font-bold text-slate-400">
            Today's Summary
          </h3>
          <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden px-4 py-5 sm:p-6 rounded-lg bg-slate-50 ring-inset ring-slate-200 ring-1"
              >
                <dt className="truncate text-sm font-medium text-slate-400">
                  {item.name}
                </dt>
                <dd className="text-3xl font-semibold tracking-tight text-slate-600">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-1 py-8 flex items-center gap-4 w-full">
          <input
            className="bg-slate-50 border  border-slate-300 text-slate-600 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            type="date"
            value={date}
            onChange={handleDate}
            name=""
            id=""
          />
          <button
            onClick={handleFilterPending}
            className="bg-green-500 py-1.5 px-3 rounded-lg text-white"
          >
            Pending
          </button>
        </div>

        <div className="mt-8 flow-root my-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
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
                      className={personIdx % 2 === 0 ? undefined : "bg-slate-50"}
                    >
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-slate-700 sm:pl-3">
                        
                        {person._id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          {person.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-500">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-500">
                        {person.phone}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-500">
                        {person.totalPrice + person.deliveryCharge} tk
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-500">
                        {person.date}
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 h-10">
                        <div className="flex gap-2">
                          {person.status === "Pending" && (
                            <button
                              onClick={() => handleStatus(person._id)}
                              className="py-1.5 px-1.5 rounded-md bg-green-400 hover:bg-green-500 active:bg-green-600 ease-in duration-75 font-semibold text-white hover:text-white"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>
                            </button>
                          )}
                          <button
                            onClick={() =>
                              document
                                .getElementById(`${person._id}`)
                                .showModal()
                            }
                            className="py-1.5 px-1.5 rounded-md bg-amber-400 hover:bg-amber-500 active:bg-amber-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                          </button>
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
            </div>
          </div>
        </div>
        <ToastContainer />

    </Container>
  );
};

export default AllOrders;
