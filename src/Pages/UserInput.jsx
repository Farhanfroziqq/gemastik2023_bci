import BackButton from "../components/BackButton";
import Input from "../components/Input";

const UserInput = () => {
	return (
		<div className='flex flex-col px-4  lg:h-screen justify-center'>
			<div className='my-4 lg:mx-40 xl:mx-56'>
				<BackButton />
			</div>
			<div className='flex justify-center md:items-center'>
				<Input />
			</div>
		</div>
	);
};

export default UserInput;
