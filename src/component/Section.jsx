import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dashboard from "./Dashboard";
import { people } from "../assets";

const Section = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <section>
        <div className="w-full flex">
          <Dashboard />
          <div className="w-full">
            <div className="w-full flex justify-between p-10">
              <div>
                <h1 className="text-4xl font-bold">Welcome Praveen</h1>
                <p className="text-lg">
                  All services are running smoothly! You have{" "}
                  <span className="text-blue-500">3 unread alerts!</span>{" "}
                </p>
              </div>
              <div className="relative">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select date"
                  className="border rounded-full px-4 py-2 w-48"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 absolute top-2.5 right-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-20 p-10">
                <div>
                    <img src={people} alt="" className="w-full rounded-3xl"/>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-10">
                    <div className="bg-sky-400 rounded-3xl text-white flex flex-col justify-center pl-4 font-semibold">
                        <span className="mb-3">Today's Booking</span>
                        <span className="text-3xl">4006</span>
                        <span>10.00%(30days)</span>
                    </div>
                    <div className="bg-indigo-800 rounded-3xl text-white flex flex-col justify-center pl-4 font-semibold">
                        <span className="mb-3">Total Booking</span>
                        <span className="text-3xl">61344</span>
                        <span>22.00%(30days)</span>
                    </div>
                    <div className="bg-blue-400 rounded-3xl text-white flex flex-col justify-center pl-4 font-semibold">
                        <span className="mb-3">Number of Meetings</span>
                        <span className="text-3xl">34040</span>
                        <span>2.00%(30days)</span>
                    </div>
                    <div className="bg-red-400 rounded-3xl text-white flex flex-col justify-center pl-4 font-semibold">
                        <span className="mb-3">Number of Clients</span>
                        <span className="text-3xl">47033</span>
                        <span>0.22%(30days)</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
