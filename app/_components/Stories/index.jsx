import Image from "next/image";
import { storiesInfo } from "./stories.constants";
import { IoChevronBack, IoChevronForwardOutline } from "react-icons/io5";

const Stories = () => {
  return (
    <>
      <section className="text-white">
        <div className="max-w-[1200px] mx-auto overflow-x-hidden h-[800px] relative">
          <div className="px-5 py-24 max-w-[1200px] h-[449px] relative w-full overflow-hidden mx-auto bg-gradient-to-b from-[#6CC9ED] to-[#158DBB] rounded-2xl">
            <div className="flex flex-wrap justify-between">
              <div>
                <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-[24px] font-bold mb-4">
                  Customer Stories
                </h3>
                <p className="md:text-lg sm:text-base text-sm font-light text-[3F3F46] mb-10">
                  Lorem ipsum dolor sit amet consectetur. Odio arcu in urna id
                  diam risus ullamcorper auctor.
                </p>
              </div>
              <div>
                <button className="bg-white text-black rounded-md px-4 py-3 mb-3">
                  View all
                </button>
              </div>
            </div>
          </div>
          <div className="w-full relative top-[-75px] left-5">
            <div className="flex gap-5 items-start">
              {storiesInfo.map((story) =>
                story.id === 1 ? (
                  <div
                    className="bg-gradient-to-b shrink-0 from-white to-[#BFE8F7] h-[400px] p-4 py-8 max-w-[300px] md:max-w-[425px] w-full rounded-lg bg-white text-black flex flex-col justify-between"
                    key={story.id}
                  >
                    <div>
                      <Image
                        alt="Story Logo"
                        src={story.image}
                        className="w-20 h-20 rounded-t-md object-cover mb-4"
                      />
                      <p className="md:text-lg sm:text-base text-sm font-light text-[3F3F46] mb-10">
                        {story.title}
                      </p>
                    </div>
                    <div>
                      <p className="mb-4 text-xs md:text-sm">{story.writer}</p>
                      <p className="text-sm md:text-base text-[#707070]">
                        {story.jobTitle}
                      </p>
                    </div>
                  </div>
                ) : story.id === 4 ? (
                  <div
                    className="bg-gradient-to-b shrink-0 from-white h-[300px] to-[#BFE8F7] p-4 max-w-[276px] w-full rounded-lg bg-white text-black relative"
                    key={story.id}
                  >
                    <div
                      className="absolute right-0 top-0 bottom-0 left-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, transparent 30%, #ffffffe6 50%, white 100%)",
                      }}
                    ></div>
                    <Image
                      alt="Story Logo"
                      src={story.image}
                      className="w-20 h-20 rounded-t-md object-cover"
                    />
                    <p className="md:text-lg sm:text-base text-sm font-light text-[3F3F46] mb-10">
                      {story.title}
                    </p>
                    <p className="mb-4 text-xs md:text-sm">{story.writer}</p>
                    <p className="text-sm md:text-base text-[#707070]">
                      {story.jobTitle}
                    </p>
                  </div>
                ) : story.id === 2 ? (
                  <Image
                    alt="Story Logo"
                    src={story.image}
                    className="h-[300px] max-w-[276px] rounded-md object-cover"
                  />
                ) : (
                  <div
                    className="bg-gradient-to-b from-white h-[300px] shrink-0 to-[#BFE8F7] p-4 max-w-[276px] w-full rounded-lg bg-white text-black"
                    key={story.id}
                  >
                    <Image
                      alt="Story Logo"
                      src={story.image}
                      className="w-20 h-20 rounded-t-md object-cover"
                    />
                    <p className="md:text-lg sm:text-base text-sm font-light text-[3F3F46] mb-10">
                      {story.title}
                    </p>
                    <p className="mb-4 text-xs md:text-sm">{story.writer}</p>
                    <p className="text-sm md:text-base text-[#707070]">
                      {story.jobTitle}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stories;
