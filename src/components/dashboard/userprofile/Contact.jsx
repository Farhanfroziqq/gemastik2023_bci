import React, { useState } from "react";

const Contact = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-2 px-8 mb-8">
          <div className="">
            <label
              htmlFor="user_email"
              className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5">
              Email
            </label>
            <input
              type="Email"
              className="w-full px-3 py-2 border shadow-sm rounded h-12 block text-small text-center placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              id="user_email"
              placeholder="your name"
              name="user_email"
              required
            />
          </div>
          <div className="">
            <label
              for="user_phone"
              className="block font-semibold mb-1 after:content-['*'] after:text-red-500 after:ml-0.5">
              Phone number
            </label>
            <input
              type="tel"
              className="w-full px-3 py-2 border shadow-sm rounded h-12 block text-small text-center placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              id="user_phone"
              pattern="[0-9]{4}-{0-9}{4}-{0-9}{4}"
              placeholder="your number"
              name="user_phone"
              required
            />
          </div>
          <div className="">
            <label
              for="user_province"
              className="block font-semibold after:content-['*'] after:text-red-500 after:ml-0.5 mb-1">
              Province
            </label>
            <select
              id="user_province"
              name="user_province"
              className={`text-${
                selectedProvince ? "black" : "slate-500/60"
              } bg-white border border-gray-300 font-semibold text-small text-center rounded h-12 focus:ring-slate-700 focus:border-primary1 block w-full py-2`}
              onChange={handleProvinceChange}
              required>
              <option
                selected
                disabled
                className="hidden text-center"
                value="Your Province">
                {" "}
                Your Province{" "}
              </option>
              <option value="Kalimantan Barat">Kalimantan Barat</option>
              <option value="Daerah Istimewa Yogyakarta">
                Daerah Istimewa Yogyakarta
              </option>
              <option value="Bali">Bali</option>
              <option value="Brisbane">Brisbane</option>
            </select>
          </div>
          <div className="">
            <label
              for="user_city"
              className="block font-semibold after:content-['*'] after:text-red-500 after:ml-0.5 mb-1">
              City
            </label>
            <select
              id="user_city"
              name="user_city"
              className={`text-${
                selectedCity ? "black" : "slate-500/60"
              } bg-white border border-gray-300 font-semibold text-small text-center rounded h-12 focus:ring-slate-700 focus:border-primary1 block w-full py-2`}
              onChange={handleCityChange}
              required>
              <option
                selected
                disabled
                className="hidden text-center"
                value="Your City">
                {" "}
                Your City{" "}
              </option>
              <option value="Kota Pontianak">Kota Pontianak</option>
              <option value="Kabupaten Sleman">Kabupaten Sleman</option>
              <option value="Bali">Bali</option>
              <option value="Sydeny">Sydeney</option>
            </select>
          </div>
          <div className="">
            <label
              for="user_district"
              className="block font-semibold after:content-['*'] after:text-red-500 after:ml-0.5 mb-1">
              District
            </label>
            <select
              id="user_district"
              name="user_district"
              className={`text-${
                selectedDistrict ? "black" : "slate-500/60"
              } bg-white border border-gray-300 font-semibold text-small text-center rounded h-12 focus:ring-slate-700 focus:border-primary1 block w-full py-2`}
              onChange={handleDistrictChange}
              required>
              <option
                selected
                disabled
                className="hidden text-center"
                value="Your District">
                {" "}
                Your District{" "}
              </option>
              <option value="Kalimantan Barat">Kalimantan Barat</option>
              <option value="Daerah Istimewa Yogyakarta">
                Daerah Istimewa Yogyakarta
              </option>
              <option value="Bali">Bali</option>
              <option value="Brisbane">Brisbane</option>
            </select>
          </div>
          <div className="">
            <label
              htmlFor="user_address"
              className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5">
              Address
            </label>
            <textarea
              className="w-full px-3 py-2 border shadow-sm rounded h-12 block text-small text-center placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              id="user_address"
              placeholder="your address"
              name="user_address"
              required
            />
          </div>
          <button
            to="/dashboard"
            type="submit"
            className="col-span-2 w-full mt-12 bg-blue-500 text-center text-white font-semibold rounded-xl hover:bg-blue-600 my-4 button shadow-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
