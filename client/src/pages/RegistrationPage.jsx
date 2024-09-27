import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const RegistrationPage = () => {
  return (
    <div className="w-full bg-slate-100  overflow-x-hidden">
      <div className="py-6 px-2 md:px-4 bg-slate-200">
        <h1 className="text-xl font-bold">Coderina</h1>
      </div>
      <div className=" lg:px-20 py-4">
        {" "}
        <div className="flex flex-col items-start justify-start px-2 md:px-16 py-6 md:py-16 w-full shadow-md bg-white">
          <div className="w-full pt-5 md:pt-1 text-2xl lg:text-3xl font-bold md:font-semibold pb-6 lg:pb-8 border-b-[1px] border-slate-300">
            <h1 className="text-[#39f]">UNIVERSITY CHALLENGE REGISTRATION</h1>
          </div>
          <form action="form" className="w-full  lg:w-3/4">
            <div className="pt-6 space-y-2">
              <label htmlFor="">Team challenge name*</label>
              <input
                type="text"
                className="w-full md:px-2 py-1 border-[1px] border-slate-300"
              />
            </div>

            <div className="w-full">
              <div className="py-14 lg:py-16 space-y-6">
                <h2 className="text-xl font-medium">
                  Team memeber 1 (Captain)
                </h2>

                <div className="w-full flex flex-col md:flex-row items-start justify-start md:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">First name*</label>
                      <input
                        type="text"
                        className="w-full pl-2 border-[1px] border-slate-300 rounded-md md:w-80 py-1"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Email*</label>
                      <input
                        type="Email"
                        placeholder="only university/college emails accepted"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md  md:w-80 py-1 placeholder:text-sm placeholder:pl-4"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Country*</label>
                      <input
                        type="text"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md md:w-80 py-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Last name*</label>
                      <input
                        type="text"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md md:w-80 py-1"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Institution name*</label>
                      <input
                        type="text"
                        placeholder="only university/college institutions accepted"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md md:w-80 py-1 placeholder:text-sm placeholder:pl-4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-4 space-y-6">
                <h2 className="text-xl font-medium">
                  Team memeber 2 (optional)
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-start md:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">First name*</label>
                      <input
                        type="text"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md md:w-80 py-1"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Email*</label>
                      <input
                        type="Email"
                        placeholder="only university/college emails accepted"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md md:w-80 py-1 placeholder:text-sm placeholder:pl-4"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Last name*</label>
                      <input
                        type="text"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md md:w-80 py-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-6 lg:py-10 space-y-6">
                <h2 className="text-xl font-medium">
                  Team memeber 3 (optional)
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-start md:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">First name*</label>
                      <input
                        type="text"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md md:w-80 py-1"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Email*</label>
                      <input
                        type="Email"
                        placeholder="only university/college emails accepted"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md md:w-80 py-1 placeholder:text-sm placeholder:pl-4"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Last name*</label>
                      <input
                        type="text"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md md:w-80 py-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-[14px]">
              <h3 className="">
                Coderina will use, process and store your personal data at all
                times in compliance with our Privacy Policy.
              </h3>
              <p>
                Yes, I accept the Coderina University Challenge Terms and
                Conditions.
              </p>

              <button className="px-8 py-3 text-sm cursor-pointer bg-[#39f] text-white rounded-md ">
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
