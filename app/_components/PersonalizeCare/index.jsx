import React from "react";
import { cares } from "./personalizeCare.constants";
import Image from "next/image";

const PersonalizeCare = () => {
  return (
    <>
      <section className="bg-white">
        <div className="px-5 py-24 max-w-7xl mx-auto">
          <div className="flex sm:flex-row flex-col mb-5">
            <div className="w-full sm:w-[48%]">
              <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-[24px] mb-4">
                Leading the Way in
                <br />
                <span className="text-[#1AABE3]">Personalized Care</span>
              </h3>
            </div>
            <div className="w-full sm:w-[48%]">
              <p className="md:text-lg sm:text-base text-sm font-light text-[3F3F46] mb-2">
                Lorem ipsum dolor sit amet consectetur. Odio arcu in urna id
                diam risus ullamcorper auctor.
              </p>
              <button className="bg-[#1AABE3] font-bold text-white rounded-md px-4 py-3">
                More about us
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {cares.map((care) => (
              <div className="w-full sm:w-[48%] md:w-[30%] p-4" key={care.id}>
                <div className="flex gap-3 items-start">
                  <Image
                    alt="Personalize care image"
                    src={care.image}
                    className="w-16 h-16 rounded-t-md object-cover"
                  />
                  <div className="flex items-center text-lg font-semibold">
                    {care.title}
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg font-light text-[#3F3F46] mb-10">
                  {care.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalizeCare;
