import Image from "next/image";
import headingLogo from "@/public/images/Frame 2203.png";

const HomePageHeading = () => {
  return (
    <>
      <section className="bg-cover relative bg-center py-20 p-4 bg-gradient-to-b from-[#158DBB] to-[#1AABE3]">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="flex  sm:gap-4 flex-col lg:flex-row gap-8">
            <div className="md:w-[48%] w-full flex justify-center flex-col items-start">
              <h1 className="text-white text-5xl mb-10">
                Empowering your healthiest potential at every stage of life
              </h1>
              <button className="bg-white text-black rounded-md px-4 py-3">
                About Us
              </button>
            </div>
            <div className="w-full md:w-1/2 static md:absolute top-0 bottom-0 right-0 h-full py-2 pr-2">
              <Image
                alt="Header Logo"
                src={headingLogo}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageHeading;
