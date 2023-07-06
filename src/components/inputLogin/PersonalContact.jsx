import { Link } from "react-router-dom";
import React, { useState } from "react";

const PersonalContact = () => {
	const [selectedGender, setSelectedGender] = useState("");
	const [selectedActivity, setSelectedActivity] = useState("");
	const [selectedProvince, setSelectedProvince] = useState("");
	const [selectedCity, setSelectedCity] = useState("");
	const [selectedDistrict, setSelectedDistrict] = useState("");
	const handleGenderChange = (event) => {
		setSelectedGender(event.target.value);
	};
	const handleProvinceChange = (event) => {
		setSelectedProvince(event.target.value);
	};
	const handleCityChange = (event) => {
		setSelectedCity(event.target.value);
	};
	const handleActivityChange = (event) => {
		setSelectedActivity(event.target.value);
	};
	const handleDistrictChange = (event) => {
		setSelectedDistrict(event.target.value);
	};
	return (
		<form className=''>
			{/* Section 1 */}
			<h3 className='px-8 font-bold text-xl mb-2'>Personal</h3>
			<hr class='flex-grow border-gray-300 border-1 mx-8 mb-8' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-4 gap-y-2 px-8 mb-8'>
				{/* Full name input */}
				<div className=''>
					<label
						htmlFor='user_full_name'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5"
					>
						Full name
					</label>
					<input
						type='text'
						className='w-full px-3 py-2 border shadow-sm rounded h-12 block focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='user_full_name'
						placeholder='Your full name'
						name='user_full_name'
						required
					/>
				</div>
				{/* Birth of date input */}
				<div className=''>
					<label
						for='user_birth_date'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500 after:ml-0.5"
					>
						Date Of Birth
					</label>
					<input
						type='date'
						className='w-full px-3 py-2 border shadow-sm rounded h-12 block  focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='user_birth_date'
						placeholder='0'
						name='user_birth_date'
						required
					/>
				</div>
				{/* Gender input */}
				<div className=''>
					<label
						for='user_gender'
						className="block font-semibold after:content-['*'] after:text-red-500 after:ml-0.5 mb-1"
					>
						Gender
					</label>
					<select
						id='user_gender'
						name='user_gender'
						className={`text-${
							selectedGender ? "black" : "slate-500/60"
						} bg-white border border-gray-300 px-3 rounded h-12 focus:ring-slate-700 focus:border-primary1 block w-full py-2`}
						onChange={handleGenderChange}
						required
					>
						<option
							selected
							disabled
							className='hidden text-center'
							value='m/f'
						>
							Male / Female
						</option>
						<option value='Male'>Male</option>
						<option value='Female'>Female</option>
					</select>
				</div>
				{/* Height input */}
				<div className=''>
					<label
						for='user_height'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500 after:ml-0.5"
					>
						Height (cm)
					</label>
					<input
						type='number'
						className='w-full px-3 py-2 border shadow-sm rounded h-12 block  focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='user_height'
						placeholder='0'
						name='user_height'
						required
					/>
				</div>
				{/* Weight Input */}
				<div className=''>
					<label
						for='user_weight'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500 after:ml-0.5"
					>
						Weight (cm)
					</label>
					<input
						type='number'
						className='w-full px-3 py-2 border shadow-sm rounded h-12 block focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='user_weight'
						placeholder='0'
						name='user_weight'
						required
					/>
				</div>
				{/* Activity type input */}
				<div className=''>
					<label
						for='user_activity'
						className="block font-semibold after:content-['*'] after:text-red-500 after:ml-0.5 mb-1"
					>
						Activity type
					</label>
					<select
						id='user_activity'
						name='user_activity'
						className={`text-${
							selectedActivity ? "black" : "slate-500/60"
						} bg-white border border-gray-300 px-3 rounded h-12 focus:ring-slate-700 focus:border-primary1 block w-full py-2`}
						onChange={handleActivityChange}
						required
					>
						<option
							selected
							disabled
							className='hidden text-center text-slate-500/60 '
							value='no'
						>
							Your daily activity
						</option>
						<option value='light'>lightly active</option>
						<option value='moderately'>moderately active</option>
						<option value='very'>very active</option>
						<option value='extremely'>extremely active</option>
					</select>
				</div>
			</div>

			{/* Section 2 */}
			<h3 className='px-8 font-bold text-xl mb-2'>Contact</h3>
			<hr class='flex-grow border-gray-300 border-1 mx-8 mb-8' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-4 gap-y-2 px-8'>
				{/* Email input */}
				<div className=''>
					<label
						htmlFor='user_email'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5"
					>
						Email
					</label>
					<input
						type='Email'
						className='w-full px-3 py-2 border shadow-sm rounded h-12 block placeholder:text-black focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='user_email'
						placeholder='fajarshiddiqqq@gmail.com'
						name='user_email'
						required
					/>
				</div>
				{/* Phone Input */}
				<div className=''>
					<label
						for='user_phone'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500 after:ml-0.5"
					>
						Phone number
					</label>
					<input
						type='tel'
						className='w-full px-3 py-2 border shadow-sm rounded h-12 block focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='user_phone'
						pattern='[0-9]{4}-{0-9}{4}-{0-9}{4}'
						placeholder='Your number'
						name='user_phone'
						required
					/>
				</div>
				{/* Province Input */}
				<div className=''>
					<label
						for='user_province'
						className="block font-semibold after:content-['*'] after:text-red-500 after:ml-0.5 mb-1"
					>
						Province
					</label>
					<select
						id='user_province'
						name='user_province'
						className={`text-${
							selectedProvince ? "black" : "slate-500/60"
						} bg-white border border-gray-300 px-3 rounded h-12 focus:ring-slate-700 focus:border-primary1 block w-full py-2`}
						onChange={handleProvinceChange}
						required
					>
						<option
							selected
							disabled
							className='hidden text-center'
							value='Your Province'
						>
							Select Province
						</option>
						<option value='Kalimantan Barat'>Kalimantan Barat</option>
						<option value='Daerah Istimewa Yogyakarta'>
							Daerah Istimewa Yogyakarta
						</option>
						<option value='Bali'>Bali</option>
						<option value='Brisbane'>Brisbane</option>
					</select>
				</div>
				{/* City Input */}
				<div className=''>
					<label
						for='user_city'
						className="block font-semibold after:content-['*'] after:text-red-500 after:ml-0.5 mb-1"
					>
						City
					</label>
					<select
						id='user_city'
						name='user_city'
						className={`text-${
							selectedCity ? "black" : "slate-500/60"
						} bg-white border border-gray-300 px-3 rounded h-12 focus:ring-slate-700 focus:border-primary1 block w-full py-2`}
						onChange={handleCityChange}
						required
					>
						<option
							selected
							disabled
							className='hidden text-center'
							value='Your City'
						>
							{" "}
							Your City{" "}
						</option>
						<option value='Kota Pontianak'>Kota Pontianak</option>
						<option value='Kabupaten Sleman'>Kabupaten Sleman</option>
						<option value='Bali'>Bali</option>
						<option value='Sydeny'>Sydeney</option>
					</select>
				</div>
				{/* District Input */}
				<div className=''>
					<label
						for='user_district'
						className="block font-semibold after:content-['*'] after:text-red-500 after:ml-0.5 mb-1"
					>
						District
					</label>
					<select
						id='user_district'
						name='user_district'
						className={`text-${
							selectedDistrict ? "black" : "slate-500/60"
						} bg-white border border-gray-300 px-3 rounded h-12 focus:ring-slate-700 focus:border-primary1 block w-full py-2`}
						onChange={handleDistrictChange}
						required
					>
						<option
							selected
							disabled
							className='hidden text-center'
							value='Your District'
						>
							{" "}
							Your District{" "}
						</option>
						<option value='Kalimantan Barat'>Kalimantan Barat</option>
						<option value='Daerah Istimewa Yogyakarta'>
							Daerah Istimewa Yogyakarta
						</option>
						<option value='Bali'>Bali</option>
						<option value='Brisbane'>Brisbane</option>
					</select>
				</div>
				{/* Address */}
				<div className=''>
					<label
						htmlFor='user_address'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5"
					>
						Address
					</label>
					<textarea
						className='w-full px-3 py-2 border shadow-sm rounded h-12 block focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer resize-none'
						id='user_address'
						placeholder='Your address'
						name='user_address'
						required
					/>
				</div>
			</div>

			{/* Submit Button */}
			<div className='p-8'>
				<Link
					to='/dashboard'
					type='submit'
					className='col-span-3 w-full font-semibold bg-blue-500 text-center rounded-full hover:bg-blue-600 button shadow-sm text-white'
				>
					Submit
				</Link>
			</div>
		</form>
	);
};

export default PersonalContact;
