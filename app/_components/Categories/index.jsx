import React from "react";
import { categories } from "./categories.constants";
import Image from "next/image";

const Categories = () => {
  return (
    <section className="bg-gradient-to-b from-[#6CC9ED] to-[#158DBB]">
      <div className="px-5 py-24 max-w-7xl mx-auto">
        <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-[24px] text-center text-white mb-10">
          Resource Categories
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-full sm:w-[48%] md:w-[22%] border border-white bg-transparent rounded-lg shadow-lg mb-6 box-border flex justify-center gap-4 items-center"
            >
              <div className="w-10 h-10 bg-tertiary rounded-lg">
                <Image
                  src={category.icon}
                  alt="icon"
                  className="h-10 w-10 text-secondary group-hover:text-white"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl my-8 max-sm:my-3 text-white">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-white text-black rounded-md px-4 py-3 font-bold">
            View all resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
