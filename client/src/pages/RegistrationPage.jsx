import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/logo.png";
const RegistrationPage = () => {
  return (
    <div className="w-full ">
      <div className=" md:px-2">
        {/* <h1 className="text-xl font-bold">Coderina</h1> */}
        <div className="w-28 h-20">
          <img src={logo} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className=" lg:px-20 py-4">
        {" "}
        <div className="flex flex-col items-start justify-start px-2 md:px-16 pb-8 md:py-10 lg:py-16 w-full shadow-md bg-white">
          <div className="w-full pt-5 md:pt-1 text-[28px] lg:text-3xl font-bold md:font-semibold pb-6 lg:pb-8 border-b-[1px] border-slate-300">
            <h1 className="text-[#39f] leading-10">
              UNIVERSITY CHALLENGE REGISTRATION
            </h1>
          </div>
          <form action="form" className="w-full md:w-3/4">
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

                <div className="w-full flex flex-col md:flex-row items-start justify-start md:justify-between gap-3">
                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">First name*</label>
                      <input
                        type="text"
                        className="w-[20rem] md:w-80  pl-2 border-[1px] border-slate-300 rounded-md  py-1"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Email*</label>
                      <input
                        type="Email"
                        placeholder="only university/college emails accepted"
                        className="w-[20rem] md:w-80    pl-2 border-[1px] border-slate-300 rounded-md py-1 placeholder:text-sm placeholder:pl-4"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Country*</label>
                      <input
                        type="text"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Last name*</label>
                      <input
                        type="text"
                        className="w-[20rem] md:w-80   pl-2 border-[1px] border-slate-300 rounded-md py-1"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Institution name*</label>
                      <input
                        type="text"
                        placeholder="only university/college institutions accepted"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1 placeholder:text-sm placeholder:pl-4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-4 space-y-6">
                <h2 className="text-xl font-medium">
                  Team memeber 2 (optional)
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-start md:justify-between gap-3">
                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">First name*</label>
                      <input
                        type="text"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Email*</label>
                      <input
                        type="Email"
                        placeholder="only university/college emails accepted"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1 placeholder:text-sm placeholder:pl-4"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Last name*</label>
                      <input
                        type="text"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-6 lg:py-10 space-y-6">
                <h2 className="text-xl font-medium">
                  Team memeber 3 (optional)
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-start md:justify-between gap-3">
                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">First name*</label>
                      <input
                        type="text"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Email*</label>
                      <input
                        type="Email"
                        placeholder="only university/college emails accepted"
                        className=" pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1 placeholder:text-sm placeholder:pl-4"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Last name*</label>
                      <input
                        type="text"
                        className=" pl-1 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80 py-1"
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
