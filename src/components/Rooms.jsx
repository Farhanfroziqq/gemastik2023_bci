import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-slate-400 mx-auto my-40 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 '>
        <div className="lg:top-20 relative lg:col-span-1 col-span-2">
            <h3 className='text-2xl font-bold'>Get Your Ideal Body</h3>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem nisi, architecto quae impedit ab velit praesentium aspernatur iure! Quis, voluptatibus voluptatem. Aperiam, repudiandae assumenda?</p>
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-2">
            <img className='object-cover w-full h-full' src="https://source.unsplash.com/1920x1280?body-muscle" alt="" />
            <img className='row-span-2 object-cover w-full h-full' src="https://source.unsplash.com/1920x1280?heavyweight" alt="" />
            <img className='object-cover w-full h-full' src="https://source.unsplash.com/1920x1280?ideal-body" alt="" />
        </div>
    </div>
  )
}

export default Rooms