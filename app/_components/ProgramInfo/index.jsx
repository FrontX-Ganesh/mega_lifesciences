import React from "react";
import { programs } from "./programs.constants";
import Image from "next/image";

const ProgramInfo = () => {
  return (
    <>
      <section className="bg-white">
        <div className="px-5 max-w-7xl mx-auto">
          <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-[24px] mb-4">
            Our <span className="text-[#1AABE3]">Programs</span>
          </h3>
          <p className="md:text-lg sm:text-base text-sm font-light text-[3F3F46] mb-10">
            Discover the perfect harmony of body, mind, and spirit through our
            transformative wellness program.
          </p>
          <div className="flex flex-wrap gap-4 mb-5 justify-center">
            {programs.map((ele, index) => (
              <div
                key={index}
                className="flex flex-col w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%] border border-gray-200 rounded-md shadow-sm"
              >
                <Image
                  alt="Program Logo"
                  src={ele.image}
                  className="w-full h-auto rounded-t-md object-cover"
                />
                <div className="p-3 bg-white">
                  <div className="text-white bg-[#1AABE3] w-max px-2 py-1 mb-2 rounded">
                    {ele.online ? "Online" : "Offline"}
                  </div>
                  <div className="text-lg font-semibold mb-2">{ele.title}</div>
                  <p className="text-sm md:text-base text-[#707070] mb-3">
                    {ele.package}
                  </p>
                  {ele.learnMore && (
                    <div
                      className="text-[#1AABE3] underline cursor-pointer"
                      style={{ textUnderlinePosition: "under" }}
                    >
                      LEARN MORE
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-[#1AABE3] font-bold text-white rounded-md px-4 py-3">
              View all resources
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramInfo;
