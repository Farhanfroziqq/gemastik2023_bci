import PersonalContact from "./inputLogin/PersonalContact";

const Input = () => {
	return (
		<div className='flex flex-col relative w-full border justify-center max-w-[1200px] rounded-md px-16'>
			<div className='top-0 left-0 absolute bg-blue-500 w-4 h-full '></div>
			<div class='pt-8'>
				<h1 className='font-bold text-4xl px-8 mb-2'>Required Information</h1>
				<p className='mb-8 px-8'>Fill the account registration form.</p>
				<p className=' absolute text-red-500 left-[50%] -translate-x-[50%] top-16 text-sm'></p>
				<PersonalContact />
			</div>
		</div>
	);
};

export default Input;
