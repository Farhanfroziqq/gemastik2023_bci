import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <div className='inline-block'>
      <Link to='/'>
      <BiArrowBack classname='top-0 left-0' size={25} />
      </Link>
    </div>
  )
}

export default BackButton