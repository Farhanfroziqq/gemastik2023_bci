import BackButton from "../components/BackButton";
import Input from "../components/Input";

const User_Input = () => {
	return (
		<div className='flex flex-col px-4  justify-center'>
			<div className='absolute top-16 left-20 lg:mx-40 xl:mx-56'>
				<BackButton />
			</div>
			<div className='flex justify-center md:items-center'>
				<Input />
			</div>
		</div>
	);
};

export default User_Input;
