"use client";

import { useMemo, useState } from "react";

export const QuoteForm = function QuoteForm() {
  const [service, setService] = useState<"frontend" | "backend" | "fullstack">(
    "frontend",
  );
  const [pages, setPages] = useState(1);
  const [timeframe, setTimeframe] = useState(7);

  const price = useMemo(() => {
    let price = 0;

    if (service === "frontend") {
      price = 75;
    } else if (service === "backend") {
      price = 30;
    } else if (service === "fullstack") {
      price = 90;
    }

    let totalPrice = price * pages;

    let timeMultiplier = 2;
    let estimatedTime = pages * timeMultiplier;

    if (timeframe > estimatedTime) {
      totalPrice -= 10;
    } else if (timeframe < estimatedTime) {
      totalPrice += 20;
    }

    return totalPrice;
  }, [service, pages, timeframe]);

  return (
    <div className="flex flex-col md:flex-row justify-between mt-10 2xl:w-3/5 gap-4 h-full">
      <div className="flex w-full md:w-1/2 h-full flex-col gap-4">
        <div className="custom-card w-full p-6 items-center justify-between">
          <p className="text-gray-400 uppercase">Select a service</p>
          <select
            onChange={(e) => setService(e.target.value as any)}
            value={service}
            className="bg-[#313a4e] select p-2 w-1/2"
          >
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>
        <div className="custom-card w-full p-6 items-center justify-between">
          <p className="text-gray-400 uppercase">Number of pages</p>
          <input
            className="input bg-[#313a4e] appearance-none w-1/2"
            type="number"
            placeholder="Pages"
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
          />
        </div>
        <div className="custom-card p-6 items-center justify-between">
          <div>
            <p className="text-gray-400 uppercase">Timeframe</p>
            <p className="text-gray-400">{timeframe / 7} Weeks</p>
          </div>
          <div className="w-1/2">
            <input
              type="range"
              min={7}
              max="28"
              className="range range-primary w-full"
              value={timeframe}
              onChange={(e) => setTimeframe(Number(e.target.value))}
              step={7}
            />
            <div className="flex justify-between">
              <p className="text-gray-400">1</p>
              <p className="text-gray-400">2</p>
              <p className="text-gray-400">3</p>
              <p className="text-gray-400">4</p>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-card flex-col h-full p-4 w-full md:w-1/3">
        <h1 className="text-2xl text-primary uppercase text-center">
          Your quote
        </h1>
        <p className="text-gray-500 text-center text-sm">
          This is a rough quote. Please get in touch for a more accurate quote.
        </p>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col justify-between">
            <p className="text-gray-500 uppercase">Service</p>
            <p className="text-gray-400">
              {service === "frontend"
                ? "Frontend Development"
                : service === "backend"
                ? "Backend Development"
                : "Fullstack Development"}
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-gray-500 uppercase">Pages</p>
            <p className="text-gray-400">{pages}</p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-gray-500 uppercase">Timeframe</p>
            <p className="text-gray-400">{timeframe / 7} WEEKS</p>
          </div>
          <h1 className="text-primary text-4xl text-center font-light">
            €{price}
          </h1>
          <button className="custom-button">GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
};
