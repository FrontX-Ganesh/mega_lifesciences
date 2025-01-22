import React from "react";
import { programs } from "./programs.constants";
import Image from "next/image";

const ProgramInfo = () => {
  return (
    <>
      <section className="bg-white">
        <div className="px-5 py-24 max-w-7xl mx-auto">
          <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-[24px] mb-4">
            Our <span className="text-[#1AABE3]">Programs</span>
          </h3>
          <p className="md:text-lg sm:text-base text-sm font-light text-[3F3F46] mb-10">
            Discover the perfect harmony of body, mind, and spirit through our
            transformative wellness program.
          </p>
          <div className="flex gap-4 mb-5 flex-wrap">
            {programs.map((ele) => (
              <div className="flex-col">
                <Image
                  alt="Header Logo"
                  src={ele.image}
                  className="h-50 w-auto mb-2"
                />
                <div className="p-3 border border-grey rounded-bl-md rounded-br-md">
                    <div className="text-white bg-[#1AABE3] w-max px-2 py-1 mb-2">
                    {ele.online ? "Online" : "Offline"}
                    </div>
                    <div className="text-lg mb-2">{ele.title}</div>
                    <p className="text-sm md:text-base text-[#707070] mb-3">{ele.package}</p>
                    <div className="text-[#1AABE3] underline" style={{ textUnderlinePosition: 'under' }}>{ele.learnMore ? "LEARN MORE" : ""}</div>
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
