import React from 'react'

const FormReg = () => {
  return (
    <div  className='flex flex-col w-full lg:w-2/4 border-2 justify-center max-w-[700px]'>
        <h1 className='font-bold px-8 my-4'>Register Form</h1>
        <form className='px-8'>
                <div>
                    <label for="nama"
                        class="block font-semibold mb-1 after:content-['*'] after:text-primary2 after:ml-0.5">User Name
                        </label>
                    <input type="text"
                        class="w-full px-3 py-2 border shadow rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                        id="name" placeholder="username" name="nama" required/>
                </div>
                <div>
                    <label for="email"
                        class="block font-semibold mb-1 after:content-['*'] after:text-primary2 after:ml-0.5">Email
                    </label>
                    <input type="email"
                        class="w-full px-3 py-2 border shadow rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                        id="email" placeholder="Email" name="email" required/>
                </div>
                <div>
                    <label for="Password"
                        class="block font-semibold mb-1 after:content-['*'] after:text-primary2 after:ml-0.5">Password
                    </label>
                    <input type="password"
                        class="w-full px-3 py-2 border shadow rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                        id="Password" placeholder="Password" name="Password" required/>
                </div>
                <div>
                    <label for="Pass-confirm"
                        class="block font-semibold mb-1 after:content-['*'] after:text-primary2 after:ml-0.5">Password Confirmation
                    </label>
                    <input type="password"
                        class="w-full px-3 py-2 border shadow rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                        id="Password" placeholder="Password confirmation" name="Password" required/>
                </div>
                <button type="submit"
                    class=" px-2 py-2 w-full bg-white text-primary1 rounded-lg hover:bg-slate-400 my-4 button">Sign Up</button>
        </form>
        <p className='text-center'> or </p>

    </div>
  )
}

export default FormReg