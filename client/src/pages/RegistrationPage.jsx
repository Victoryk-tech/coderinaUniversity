import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const RegistrationPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen inset-0 overflow-hidden">
      <div className="lg:grid grid-cols-1 sm:grid-cols-2 h-screen fixed inset-0">
        {/* picture */}
        <div className="text-black min-h-full relative hidden lg:flex justify-center flex-col items-center  gap-4">
          <span className="absolute inset-0 bg-blue1/70 -z-10" />
          <span className="flex justify-center absolute inset-0 -z-20">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
        </div>

        {/* left register */}
        <div className="bg-white min-h-full flex justify-center flex-col items-center relative p-5">
          <div></div>
          <form action="form" className="space-y-4">
            <div className="flex items-start justify-start space-x-3">
              <input
                type="text"
                name="first Name"
                placeholder="First Name"
                className="border-2 border-[#39f] py-2 pl-1 rounded-lg text-[15px] placeholder:text-[15px] font-semibold placeholder:text-[#000]"
              />
              <input
                type="text"
                name="Middle Name"
                placeholder="Middle Name"
                className="border-2 border-[#39f] py-2 pl-1 rounded-lg text-[15px] placeholder:text-[15px] font-semibold placeholder:text-[#000]"
              />
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                className="border-2 border-[#39f] py-2 pl-1 rounded-lg text-[15px] placeholder:text-[15px] font-semibold placeholder:text-[#000]"
              />
            </div>

            <div className="flex flex-col items-start justify-start space-y-4">
              <input
                type="text"
                name="Name of Institution"
                placeholder="Name of Institution"
                className="w-full border-2 border-[#39f] py-3 pl-1 rounded-lg text-[15px] placeholder:text-[15px] font-semibold placeholder:text-[#000]"
              />

              <input
                type="text"
                name="Department"
                placeholder="Department"
                className="w-full border-2 border-[#39f] py-3 pl-1 rounded-lg text-[15px] placeholder:text-[15px] font-semibold placeholder:text-[#000]"
              />
              <input
                type="text"
                name="Faculty"
                placeholder="Faculty"
                className="w-full border-2 border-[#39f] py-3 pl-1 rounded-lg text-[15px] placeholder:text-[15px] font-semibold placeholder:text-[#000]"
              />
            </div>
            <div className="flex items-start justify-start space-x-3">
              <input
                type="Number"
                name="Level"
                placeholder="Level"
                className=" border-2 border-[#39f] py-2 pl-1 rounded-lg text-[15px] placeholder:text-[15px] font-semibold placeholder:text-[#000]"
              />
              <input
                type="Number"
                name="phone"
                placeholder="Phone"
                className=" border-2 border-[#39f] py-2 pl-1 rounded-lg text-[15px] placeholder:text-[15px] font-semibold placeholder:text-[#000]"
              />
              <input
                type="text"
                name="Gender"
                placeholder="Gender"
                className=" border-2 border-[#39f] py-2 pl-1 rounded-lg text-[15px] placeholder:text-[15px] font-semibold placeholder:text-[#000]"
              />
            </div>

            <button className=" md:w-full flex items-center justify-center space-x-2 hover:bg-transparent hover:border-[#39f] hover:border-[0.3px] px-16 py-3 rounded-xl hover:text-[#39f] hover:shadow-[0_0_20px_#39f] bg-[#39f] text-white transition-all ease-out shadow-sm cursor-pointer">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
