import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const BackButton = () => {
	return (
		<div className='inline-block'>
			<Link to='/' className='w-fit flex items-center font-semibold'>
				<AiFillCaretLeft className='top-0 left-0' size={20} /> Back
			</Link>
		</div>
	);
};

export default BackButton;
