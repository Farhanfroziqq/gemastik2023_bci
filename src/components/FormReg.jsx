import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FormReg = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		user_password: "",
		user_status: "incomplete",
		confirmPassword: "",
	});

	const [errors, setErrors] = useState({});

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (formData.user_password !== formData.confirmPassword) {
			setErrors({ msg: "Passwords do not match" });
		} else {
			try {
				const { confirmPassword, ...dataToPost } = formData;
				const response = await axios.post(
					"http://localhost:8000/api/user",
					dataToPost,
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				console.log(response.data);
				setErrors({});
				setFormData({
					user_name: "",
					user_email: "",
					user_password: "",
					user_status: "incomplete",
					confirmPassword: "",
				});

				navigate("/login");
			} catch (error) {
				if (
					error.response &&
					error.response.data &&
					error.response.data.errors
				) {
					const { user_name, user_email } = error.response.data.errors;
					if (user_name && user_name.length > 0) {
						setErrors({ msg: user_name[0] });
					} else if (user_email && user_email.length > 0) {
						setErrors({ msg: user_email[0] });
					} else {
						console.error(error.response.data);
						console.error(error);
					}
				}
			}
		}
	};

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
			user_status: "incomplete",
		});
	};

	return (
		<div className='flex flex-col w-full lg:w-2/4 border-2 justify-center max-w-[700px] relative'>
			<h1 className='font-bold px-8 my-8'>Register Form</h1>
			<p className=' absolute text-red-500 left-[50%] -translate-x-[50%] top-16 text-sm'>
				{errors.msg}
			</p>
			<form className='px-8' onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label
						htmlFor='user_name'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5"
					>
						User Name
					</label>
					<input
						type='text'
						className='w-full px-3 py-2 border shadow-sm rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='user_name'
						placeholder='your username'
						name='user_name'
						value={formData.user_name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='user_email'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500   after:ml-0.5"
					>
						Email
					</label>
					<input
						type='email'
						className='w-full px-3 py-2 border shadow-sm  rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='user_email'
						placeholder='example@gmail.com'
						value={formData.user_email}
						onChange={handleChange}
						name='user_email'
						required
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='user_password'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500    after:ml-0.5"
					>
						Password
					</label>
					<input
						type='password'
						className='w-full px-3 py-2 border shadow-sm rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='user_password'
						placeholder='Password'
						value={formData.user_password}
						onChange={handleChange}
						name='user_password'
						required
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='confirmPassword'
						className="block font-semibold mb-1 after:content-['*'] after:text-red-500  after:ml-0.5"
					>
						Password Confirmation
					</label>
					<input
						type='password'
						className='w-full px-3 py-2 border shadow-sm rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='confirmPassword'
						placeholder='Password confirmation'
						value={formData.confirmPassword}
						onChange={handleChange}
						name='confirmPassword'
						required
					/>
				</div>
				<button
					type='submit'
					className=' px-2 py-2 w-full bg-white text-primary1 rounded-lg hover:bg-slate-100 my-4 button shadow-sm'
				>
					Sign Up
				</button>
			</form>

			<div className='flex justify-center my-4 text-blue-500'>
				<Link to='/login'>Already Have Acount?</Link>
			</div>
		</div>
	);
};

export default FormReg;
