import React, {useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    if(!nav){
      document.body.style.overflow ='hidden'
    }else {
      document.body.style.overflow='scroll'
    }
  };

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
        <h1 className='text-white font-bold text-2xl z-10'>Experiences</h1>
        <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
        <div className={nav ? 'ease-in duration-500 fixed text-gray-300 left-0 top-0 w-full lg:w-2/4 h-screen bg-black/90 px-4 py-7 flex-col z-20' : 'absolute top-0 left-[-100%] h-screen ease-in duration-500 z-0'}>
            <ul className='flex flex-col fixed w-full lg:w-2/4 lg:items-start m-auto h-full items-center'>
                <li className='font-bold text-xl p-2 mt-4'>Home</li>
                <li className='font-bold text-xl p-2 '>Destinations</li>
                <li className='font-bold text-xl p-2 '>Reservations</li>
                <li className='font-bold text-xl p-2 '>Amenities</li>
                <li className='font-bold text-xl p-2 '>Rooms</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar