import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className='w-full h-screen'>
			<img
				className='top-0 left-0 w-full h-screen object-cover'
				src='/img/1.jpg'
				alt='salad'
			/>
			<div className='bg-black/30 absolute top-0 left-0 w-full h-screen ' />
			<div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
				<div className='md:left-[10%] max-w-[1100px] m-auto absoulte p-4'>
					<p>Personalized calculation</p>
					<h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
						Get Your Body Nutrition Now
					</h1>
					<p className='max-w-[600px] drop-shadow-2xl py-2 text-lg mb-8'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
						aliquid distinctio reprehenderit dolorum voluptates qui, quisquam
						consequatur obcaecati veniam nisi, delectus aliquam molestiae magni
						est voluptatum quae doloremque ab. Iure!
					</p>
					<Link
						to='/login'
						className='bg-white text-black font-semibold px-16 rounded-full py-3 '
					>
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
