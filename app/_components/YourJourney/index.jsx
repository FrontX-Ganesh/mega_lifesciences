import React from "react";
import { journeys } from "./journey.constants";
import Image from "next/image";

const YourJourney = () => {
  return (
    <>
      <section className="bg-white">
        <div className="px-5 py-24 max-w-7xl mx-auto">
          <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-[24px] font-bold mb-3">
            Start Your Journey to Better Health
          </h3>
          <p className="md:text-lg sm:text-base text-sm font-light text-[3F3F46] mb-10">
            Choose an option that brings you here
          </p>
          <div className="flex flex-wrap gap-3">
            {journeys.map((journey) => (
              <div
                key={journey.id}
                className="w-full sm:w-[48%] md:w-[22%] border border-grey bg-transparent rounded-lg shadow-lg p-4 mb-6 box-border flex flex-col"
              >
                <div className="w-15 h-15 bg-tertiary rounded-lg">
                  <Image
                    src={journey.icon}
                    alt="icon"
                    className="h-15 w-15 text-secondary group-hover:text-white"
                  />
                </div>
                  <h3 className="text-lg md:text-2xl p-3">
                    {journey.title}
                  </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default YourJourney;
