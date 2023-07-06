import BackButton from "../components/BackButton";
import FormReg from "../components/FormReg";

const Register = () => {
	return (
		<div className='flex flex-col px-4 h-screen justify-center'>
			<div className='my-4 lg:mx-40 xl:mx-56'>
				<BackButton />
			</div>
			<div className='flex justify-center md:items-center'>
				<FormReg />
			</div>
		</div>
	);
};

export default Register;
