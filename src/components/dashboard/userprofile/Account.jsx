import React from "react";

const Account = () => {
  return (
    <div className="grid grid-cols-3 gap-x-8 px-4">
      <div className="flex flex-col items-center ">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-black hover:bg-slate-900 cursor-pointer"></div>
        <div className="flex items-center flex-col w-full my-4">
          <button className="button w-full rounded-md mb-2">
            Select Picture
          </button>
          <button className="button w-full rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold">
            Logout
          </button>
        </div>
      </div>
      <div className="col-span-2">
        <form>
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5">
              Username
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border shadow-sm rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              id="user_name"
              placeholder="your username"
              name="user_name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5">
              Email
            </label>
            <input
              type="Email"
              className="w-full px-3 py-2 border shadow-sm rounded h-12 block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              id="user_email"
              placeholder="your name"
              name="user_email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_password"
              className="block font-semibold mb-1 after:content-['*'] after:text-red-500    after:ml-0.5">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border shadow-sm rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              id="user_password"
              placeholder="Password"
              name="user_password"
              required
            />
          </div>
          <button
            to="/dashboard"
            type="submit"
            className="col-span-3 w-full font-semibold bg-blue-500 text-center rounded-lg hover:bg-blue-600 my-4 button shadow-sm text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Account;
