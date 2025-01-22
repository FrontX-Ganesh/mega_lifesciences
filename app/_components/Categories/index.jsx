import React from "react";
import { categories } from "./categories.constants";
import Image from "next/image";

const Categories = () => {
  return (
    <section className="bg-gradient-to-b from-[#6CC9ED] to-[#158DBB]">
      <div className="px-5 py-24 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-full sm:w-[48%] md:w-[22%] border border-white bg-transparent rounded-lg shadow-lg p-4 mb-6 box-border flex justify-center gap-4 items-center"
            >
              <div className="w-10 h-10 bg-tertiary rounded-lg">
                <Image
                  src={category.icon}
                  alt="icon"
                  className="h-10 w-10 text-secondary group-hover:text-white"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold my-8 max-sm:my-3">
                  {category.title}
                </h3>
                <p className="text-sm md:text-base text-[#707070]">
                  {category.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
