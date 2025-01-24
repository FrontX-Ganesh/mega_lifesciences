import React from "react";
import program from "@/public/images/program.png";
import { IoChevronBack, IoChevronForwardOutline } from "react-icons/io5";
import Image from "next/image";

const Program = () => {
  return (
    <section className="bg-white">
      <div className="px-5 py-24 mx-auto">
        <div className="flex flex-wrap gap-3 bg-gradient-to-b from-[#6CC9ED] to-[#158DBB] text-white rounded-xl border-2 border-[#1AABE3]">
          <div className="w-full sm:w-[65%]">
            <p className="bg-white text-[#1AABE3] rounded-tl-xl w-min px-6 py-1 rounded-br-lg mb-10">
              PROGRAM
            </p>
            <div className="pl-14">
              <div className="md:text-lg sm:text-base text-sm text-[3F3F46]">
                Executive Staycation
              </div>
              <h3 className="md:text-4xl sm:text-3xl text-[24px]">
                Restore & Recharge Yourself
              </h3>
              <p className="md:text-lg sm:text-base text-sm text-[3F3F46] mb-10">
                www.wellnesswecare.com
              </p>
            </div>
          </div>
          <div className="w-full sm:w-[33%]">
            <Image
              src={program}
              className="h-full w-full rounded-tr-md rounded-br-md p-5"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="text-[#CCCCCC] mr-2 p-2 border border-grey rounded-full">
            <IoChevronBack />
          </button>
          <button className="text-[#1AABE3] p-2 border border-grey rounded-full">
            <IoChevronForwardOutline />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Program;
