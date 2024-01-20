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
    { name: "Total Orders", stat: allData.length },
    { name: "Today", stat: filterData.length },
    {
      name: "Total Pending",
      stat: allData.filter((d) => d.status === "Pending").length,
    },
    {
      name: "Ordered Complete",
      stat: allData.filter((d) => d.status === "Delivered").length,
    },
    {
      name: "Sales",
      stat: `${allData.reduce((acc, item) => acc + item.totalPrice, 0)} tk`,
    },
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
        toast.success("আপনার অর্ডার Status Updae করা হয়েছে, ধন্যবাদ!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
      } else {
        console.error("Failed to updade status:", await response.text());
      }
    } catch (error) {
      console.error("Error update status:", error);
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
      <div className="px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Total Orders
          </h3>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
              >
                <dt className="truncate text-sm font-medium text-gray-500">
                  {item.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-1 py-8 flex items-center gap-4 w-full">
          Filter By:{" "}
          <input
            className="bg-gray-50 border w-48 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="date"
            value={date}
            onChange={handleDate}
            name=""
            id=""
          />
          <button
            onClick={handleFilterPending}
            className="bg-green-400 py-1.5 px-3 rounded"
          >
            Pending Order
          </button>
        </div>

        <div className="mt-8 flow-root my-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                    >
                      Invoice
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Total Amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Actions
                    </th>
                    {/* <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                    >
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {filterData.map((person, personIdx) => (
                    <tr
                      key={person._id}
                      className={personIdx % 2 === 0 ? undefined : "bg-gray-50"}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        {person._id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.phone}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.totalPrice + person.deliveryCharge}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.status}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        <div className="flex justify-center gap-2">
                          {person.status === "Pending" && (
                            <button
                              onClick={() => handleStatus(person._id)}
                              className="bg-green-400 py-1.5 px-3 rounded"
                            >
                              Delivered
                            </button>
                          )}
                          <button
                            onClick={() =>
                              document
                                .getElementById(`${person._id}`)
                                .showModal()
                            }
                            className="bg-amber-400 py-1.5 px-3 rounded"
                          >
                            Show items
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
      </div>
    </Container>
  );
};

export default AllOrders;
