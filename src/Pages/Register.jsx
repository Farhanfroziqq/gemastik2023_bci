import BackButton from "../components/BackButton"
import FormReg from "../components/FormReg"

const Login = () => {
  return (
    <div className="flex flex-col px-4 h-screen justify-center ]">
        <div className="my-4 lg:mx-40">
        <BackButton/>
        </div>
        <div className="flex justify-center md:items-center">
        <FormReg/>
        </div>
    </div>
  )
}

export default Login