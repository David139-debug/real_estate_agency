"use client";

import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

const FilterMenu = () => {
  const [price, setPrice] = useState([100000, 500000]);

  return (
    <aside className="w-full max-w-[280px] bg-white rounded-3xl border border-[#ECECEC] p-6">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-black">Filters</h2>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-500">Location</label>

          <input
            type="text"
            placeholder="Search location"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-500">
            Listing Status
          </label>

          <select className="rounded-xl border border-gray-200 px-4 py-3 outline-none text-black">
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-500">
            Property Type
          </label>

          <select className="rounded-xl border border-gray-200 px-4 py-3 outline-none text-black">
            <option>All Properties</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
            <option>Office</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium text-gray-500">
            Price Range
          </label>

          <Slider.Root
            className="relative flex items-center h-2 bg-gray-100 rounded-full"
            value={price}
            min={50000}
            max={1000000}
            step={10000}
            onValueChange={setPrice}
          >
            <Slider.Track className="relative h-2 w-full rounded-full">
              <Slider.Range className="absolute h-full bg-blue-500 rounded-full" />
            </Slider.Track>

            <Slider.Thumb className="block w-4 h-4 rounded-full bg-blue-500 border-2 border-white" />
            <Slider.Thumb className="block w-4 h-4 rounded-full bg-blue-500 border-2 border-white" />
          </Slider.Root>

          <div className="flex justify-between text-sm text-gray-500">
            <span>${price[0].toLocaleString()}</span>
            <span>${price[1].toLocaleString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-500">
              Min Size
            </label>

            <input
              type="number"
              placeholder="0"
              className="rounded-xl border border-gray-200 px-3 py-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-500">
              Max Size
            </label>

            <input
              type="number"
              placeholder="1000"
              className="rounded-xl border border-gray-200 px-3 py-3 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-500">Beds</label>

            <select className="rounded-xl border border-gray-200 px-3 py-3 outline-none">
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-500">Baths</label>

            <select className="rounded-xl border border-gray-200 px-3 py-3 outline-none">
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-gray-500">Features</label>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Parking
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Garage
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Balcony
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Pool
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Elevator
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              A/C
            </label>
          </div>
        </div>

        <button className="w-full rounded-xl bg-[#1F4B43] py-3 text-white font-medium hover:opacity-90 transition">
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default FilterMenu;
