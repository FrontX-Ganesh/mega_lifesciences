import React from "react";
import { aboutUsInfo, knowlegeInfo, resources } from "./footer.constants";

const Footer = () => {
  return (
    <section className="bg-white">
      <div className="px-5 py-24 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4">
          <div className="md:w-1/4 w-4/5">
            <p className="mb-4 text-xs md:text-sm text-[#1AABE3]">Knowledge</p>
            {knowlegeInfo.map((knowlege) => (
              <p key={knowlege} className="text-sm md:text-base my-4">
                {knowlege}
              </p>
            ))}
          </div>
          <div className="md:w-[40%] flex gap-2">
            <div className="w-[48%]">
              <p className="mb-4 w-[480%] text-xs md:text-sm text-[#1AABE3]">
                Resources
              </p>
              {resources.map((resource) => (
                <p key={resource} className="text-sm md:text-base my-4">
                  {resource}
                </p>
              ))}
            </div>
            <div className="md:w-[48%] w-full">
              <p className="mb-4 text-xs md:text-sm text-[#1AABE3]">
                Knowledge
              </p>
              {aboutUsInfo.map((about) => (
                <p key={about} className="text-sm md:text-base my-4">
                  {about}
                </p>
              ))}
            </div>
          </div>
          <div className="w-auto">
            <p className="mb-4 text-xs md:text-sm text-[#1AABE3]">Contact Us</p>
            <p className="mb-4 text-xs md:text-sm font-bold">063-6394003</p>
            <p className="mb-4 text-xs md:text-sm">Contact Us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
