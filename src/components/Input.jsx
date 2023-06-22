import { Link } from "react-router-dom";

const Input = () => {
	return (
		<div className='flex flex-col w-full lg:w-2/4 border-2 justify-center max-w-[700px] relative'>
			<h1 className='font-bold px-8 my-8'>Register Form</h1>
			<p className=' absolute text-red-500 left-[50%] -translate-x-[50%] top-16 text-sm'></p>
			<form className='px-8'>
				<div className='mb-4'>
					<label
						htmlFor='user_called'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5"
					>
						Nama
					</label>
					<input
						type='text'
						className='w-full px-3 py-2 border shadow-sm rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='user_called'
						placeholder='your name'
						name='user_called'
						required
					/>
				</div>
				<div className='flex justify-between mb-4'>
					<div className=''>
						<label
							for='user_weight'
							className="block font-semibold mb-1 after:content-['*'] after:text-red-500 after:ml-0.5 text-center"
						>
							Weight (kg)
						</label>
						<input
							type='number'
							className='w-24 px-3 py-2 border shadow-sm rounded block text-small text-center placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
							id='user_weight'
							placeholder='0'
							name='user_weight'
							required
						/>
					</div>
					<div className=''>
						<label
							for='user_gender'
							className="block font-semibold after:content-['*'] after:text-red-500 after:ml-0.5 text-center"
						>
							Gender
						</label>
						<select
							id='user_gender'
							name='user_gender'
							className='bg-white border border-gray-300 text-slate-500/60 font-semibold text-small text-center rounded focus:ring-slate-700 focus:border-primary1 block w-24 p-2.5'
							required
						>
							<option
								selected
								disabled
								className='hidden text-center'
								value='m/f'
							>
								{" "}
								M/F{" "}
							</option>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
						</select>
					</div>
					<div className=''>
						<label
							for='user_height'
							className="block font-semibold mb-1 after:content-['*'] after:text-red-500 after:ml-0.5 text-center"
						>
							Height (cm)
						</label>
						<input
							type='number'
							className='w-24 px-3 py-2 border shadow-sm rounded block text-small text-center placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
							id='user_height'
							placeholder='0'
							name='user_weight'
							required
						/>
					</div>
				</div>
				<Link
					to='/dashboard'
					type='submit'
					className=' px-2 py-2 w-full bg-white text-center rounded-lg hover:bg-slate-100 my-4 button shadow-sm'
				>
					Submit
				</Link>
			</form>

			<div className='flex justify-center my-4 text-blue-500'></div>
		</div>
	);
};

export default Input;
