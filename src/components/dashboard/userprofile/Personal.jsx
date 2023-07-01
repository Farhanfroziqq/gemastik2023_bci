import React, { useState } from "react";

const Personal = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value);
  };

  return (
    <div>
      <form>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-2 px-8 mb-8">
          <div className="">
            <label
              htmlFor="user_full_name"
              className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5">
              Full name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border shadow-sm rounded h-12 block text-small text-center placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              id="user_full_name"
              placeholder="your name"
              name="user_full_name"
              required
            />
          </div>
          <div className="">
            <label
              for="user_birth_date"
              className="block font-semibold mb-1 after:content-['*'] after:text-red-500 after:ml-0.5">
              Date Of Birth
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border shadow-sm rounded h-12 block text-small text-center placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              id="user_birth_date"
              placeholder="0"
              name="user_birth_date"
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
              name="user_height"
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

export default Personal;
