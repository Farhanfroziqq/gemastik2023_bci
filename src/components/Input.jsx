import PersonalContact from "./inputLogin/PersonalContact";

const Input = () => {
  return (
    <div className="flex flex-col w-full lg:w-2/4 border-2 justify-center max-w-[700px] relative rounded h-12-md overflow-hidden">
      <div class="border-l-4 border-blue-500 h-full">
        <h1 className="font-bold text-4xl px-8 mt-8">Required Information</h1>
        <p className="font-light mb-8 px-8">
          Fill the account registration form.
        </p>
        <p className=" absolute text-red-500 left-[50%] -translate-x-[50%] top-16 text-sm"></p>
        <PersonalContact/>

        <div className="flex justify-center my-4 text-blue-500"></div>
      </div>
    </div>
  );
};

export default Input;
