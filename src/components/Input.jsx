import { Link } from "react-router-dom";
import React, { useState } from "react";

const Input = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value);
  };

  return (
    <div className="flex flex-col w-full lg:w-2/4 border-2 justify-center max-w-[700px] relative rounded h-12-md overflow-hidden">
      <div class="border-l-4 border-blue-500 h-full">
        <h1 className="font-bold text-4xl px-8 mt-8">Required Information</h1>
        <p className="font-light mb-8 px-8">
          Fill the account registration form.
        </p>
        <p className=" absolute text-red-500 left-[50%] -translate-x-[50%] top-16 text-sm"></p>
        <h3 className="px-8 font-bold text-xl mb-2">Personal</h3>
        <hr class="flex-grow border-gray-300 border-1 mx-8 mb-8" />
        <form className="px-8">
          <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-2">
            <div className="">
              <label
                htmlFor="user_called"
                className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5">
                Full name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border shadow-sm rounded h-12 block text-small text-center placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                id="user_called"
                placeholder="your name"
                name="user_called"
                required
              />
            </div>
            <div className="">
              <label
                for="user_birth"
                className="block font-semibold mb-1 after:content-['*'] after:text-red-500 after:ml-0.5">
                Date Of Birth
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border shadow-sm rounded h-12 block text-small text-center placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                id="user_birth"
                placeholder="0"
                name="user_birth"
                required
              />
            </div>
            <div className="">
              <label
                for="user_gender"
                className="block font-semibold after:content-['*'] after:text-red-500 after:ml-0.5 mb-1">
                Gender
              </label>
              <select
                id="user_gender"
                name="user_gender"
                className={`text-${
                  selectedGender ? "black" : "slate-500/60"
                } bg-white border border-gray-300 font-semibold text-small text-center rounded h-12 focus:ring-slate-700 focus:border-primary1 block w-full py-2`}
                onChange={handleGenderChange}
                required>
                <option
                  selected
                  disabled
                  className="hidden text-center"
                  value="m/f">
                  {" "}
                  M/F{" "}
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="">
              <label
                for="user_height"
                className="block font-semibold mb-1 after:content-['*'] after:text-red-500 after:ml-0.5">
                Height (cm)
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border shadow-sm rounded h-12 block text-small text-center placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                id="user_height"
                placeholder="0"
                name="user_weight"
                required
              />
            </div>
            <div className="">
              <label
                for="user_weight"
                className="block font-semibold mb-1 after:content-['*'] after:text-red-500 after:ml-0.5">
                Weight (cm)
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border shadow-sm rounded h-12 block text-small text-center placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                id="user_weight"
                placeholder="0"
                name="user_weight"
                required
              />
            </div>
            <div className="">
              <label
                for="user_activity"
                className="block font-semibold after:content-['*'] after:text-red-500 after:ml-0.5 mb-1">
                Activity type
              </label>
              <select
                id="user_activity"
                name="user_activity"
                className={`text-${
                  selectedActivity ? "black" : "slate-500/60"
                } bg-white border border-gray-300 font-semibold text-small text-center rounded h-12 focus:ring-slate-700 focus:border-primary1 block w-full py-2`}
                onChange={handleActivityChange}
                required>
                <option
                  selected
                  disabled
                  className="hidden text-center text-slate-500/60 "
                  value="no">
                  {" "}
                  nothing Activity{" "}
                </option>
                <option value="light">lightly active</option>
                <option value="moderately">moderately active</option>
                <option value="very">very active</option>
                <option value="extremely">extremely active</option>
              </select>
            </div>
          </div>
          <Link
            to="/dashboard"
            type="submit"
            className=" px-2 py-2 w-full bg-white text-center rounded-lg hover:bg-slate-100 my-4 button shadow-sm">
            Submit
          </Link>
        </form>

        <div className="flex justify-center my-4 text-blue-500"></div>
      </div>
    </div>
  );
};

export default Input;
