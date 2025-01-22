import Image from "next/image";
import { experts } from "./experts.constants";

const Experts = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#6CC9ED] to-[#158DBB] text-white">
        <div className="px-5 py-24 max-w-7xl mx-auto">
          <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-[24px] font-bold mb-4">
            Meet Our Experts
          </h3>
          <p className="md:text-lg sm:text-base text-sm font-light text-[3F3F46] mb-10">
            Lorem ipsum dolor sit amet consectetur. Odio arcu in urna id diam
            risus ullamcorper auctor.
          </p>

          <div className="flex flex-wrap gap-3">
            {experts.map((expert) => (
              <div
                key={expert.id}
                className="w-full bg-white sm:w-[48%] md:w-[30%] border border-grey bg-transparent rounded-lg shadow-lg p-4 mb-6 box-border flex flex-col"
              >
                <div className="flex">
                  <div className="w-15 h-15 bg-tertiary rounded-lg">
                    <Image
                      src={expert.image}
                      alt="icon"
                      className="h-15 w-15 text-secondary group-hover:text-white"
                    />
                  </div>
                  <div>
                    <p className="px-3 text-black">{expert.name}</p>
                    <p className="px-3 text-sm text-[#1AABE3]">
                      {expert.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-white text-black rounded-md px-4 py-3">
                View more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experts;
