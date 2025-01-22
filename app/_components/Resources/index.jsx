import Image from "next/image";
import React from "react";
import yoga from "@/public/images/yoga.png";
import { resources } from "./resources.constants";

const Resources = () => {
  return (
    <>
      <section className="bg-white">
        <div className="px-5 py-24 max-w-7xl mx-auto">
          <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-[24px] font-bold mb-4">
            Resources
          </h3>

          <div className="flex gap-4 flex-wrap mb-6">
            {resources.map((reso) => (
              <div className="flex sm:w-[48%] w-full" key={reso.id}>
                <div className="border border-[#BEE0EF] p-3 rounded-tl-md rounded-bl-md w-[70%]">
                  <div className="mb-2">{reso.title}</div>
                  <div className="flex">
                    {reso.subMenus.map((menu) => (
                      <div
                        key={menu}
                        className="p-1 text-xs mr-1 border border-blue-400 rounded text-[#158FC6]"
                      >
                        {menu}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[30%]">
                  <Image src={reso.image} className="h-full w-auto rounded-tr-md rounded-br-md" />
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

export default Resources;
