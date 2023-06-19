import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const BackButton = () => {
<<<<<<< HEAD
  return (
    <div className='inline-block'>
      <Link to='/'>
      <BiArrowBack classname='top-0 left-0' size={25} />
      </Link>
    </div>
  )
}
=======
	return (
		<div className='inline-block'>
			<Link to='/' className='w-fit'>
				<BiArrowBack className='top-0 left-0' size={25} />
			</Link>
		</div>
	);
};
>>>>>>> origin/fajar

export default BackButton;
