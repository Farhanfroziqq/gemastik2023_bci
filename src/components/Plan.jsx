import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid md:grid-cols-2 gap 4 mb-20'>
        {/* left side */}
        <div className='grid grid-cols-2 gip-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://source.unsplash.com/640x480?salad" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://source.unsplash.com/640x480?mixed-fruit" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://source.unsplash.com/640x480?vegetables" alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://source.unsplash.com/640x480?plate-of-fruit" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://source.unsplash.com/640x480?food" alt="/" />
        </div>
        {/* right side */}
        <div className="flex flex-col h-full justify-center">
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Diet</h3>
            <p className='text-2xl py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, atque!</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sapiente? Totam, sapiente laboriosam! Dolorem ex et ea nesciunt sequi odio tenetur voluptatum, iure optio? Exercitationem repellat obcaecati aperiam quaerat mollitia.</p>
            <div className="">
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan