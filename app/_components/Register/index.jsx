import React from "react";

const Register = () => {
  return (
    <>
      <section className="bg-white">
        <div className="px-5 py-24 max-w-7xl mx-auto">
          <div className="flex flex-wrap">
            <div className="p-4  w-full sm:w-1/2">
              <div>Sign Up for Health Care Benefits Now</div>
              <div>Get health care benefits and put your health first.</div>
            </div>
            <div className="flex w-full sm:w-1/2 flex-col sm:flex-row gap-5 flex-wrap">
              <input
                type="email"
                className="flex-1 h-fit px-4 py-3 border border-[#BFE8F7] outline-none focus:ring-2 focus:ring-[#1AABE3] rounded-lg"
                placeholder="Enter your email address"
              />
              <button className="bg-[#1AABE3] h-fit font-bold text-white rounded-lg px-4 py-3 w-fit">
                Register now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
