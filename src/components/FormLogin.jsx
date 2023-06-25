import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {
  return (
    <div className="w-full max-w-[700px] grid grid-cols-3 rounded-md overflow-hidden border-2">
      <div className="overflow-hidden bg-[url('/img/1.jpg')] h-full bg-center bg-cover">
        <div className="w-full h-full bg-black/30 mix-blend-multiply" />
      </div>
      <div className="col-span-2 w-full">
        <div className="flex flex-col w-full justify-center border-l-2">
          <h1 className="font-bold text-4xl px-8 mt-4">Sign In</h1>
          <p className="px-8 mb-8 font-light ">fill all your credential</p>
          <button className="button w-fit text-sm m-auto">
            Sign In With Google
          </button>
          <div class="flex items-center mx-20">
            <hr class="flex-grow border-gray-300 border-1 mr-4" />
            <span class="text-gray-500">or</span>
            <hr class="flex-grow border-gray-300 border-1 ml-4" />
          </div>
          <form className="px-8">
            <div className="my-4">
              <label
                htmlFor="email"
                className="block font-semibold mb-1 after:content-['*'] after:text-primary2 after:ml-0.5">
                Username/Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border shadow rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                id="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="Password"
                className="block font-semibold mb-1 after:content-['*'] after:text-primary2 after:ml-0.5">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border shadow rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                id="Password"
                placeholder="Password"
                name="Password"
                required
              />
            </div>
            <Link to="/register" className="text-sm text-blue-500 ">Forget Password?</Link>
          </form>
          <div className="flex justify-between mx-8 py-4 mb-2 text-blue-500 text-sm align-middle">
            <Link to="/register">Create new account</Link>
            <button
              type="submit"
              className="px-4 w-fit bg-blue-500 text-white font-semibold hover:bg-blue-600 button shadow-sm text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
