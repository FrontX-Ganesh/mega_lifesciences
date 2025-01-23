import Image from "next/image";
import { storiesInfo } from "./stories.constants";

const Stories = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#6CC9ED] to-[#158DBB] text-white">
        <div className="px-5 py-24 max-w-7xl mx-auto">
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
              <button className="bg-white text-black rounded-md px-4 py-3">
                View more
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[120%]">
            <div className="flex flex-wrap gap-5 ">
              {storiesInfo.map((story) =>
                story.id === 1 ? (
                  <div
                    className="bg-gradient-to-b from-white to-[#BFE8F7] p-4 py-8 w-[28%] h-[380px] rounded-lg bg-white text-black flex flex-col justify-between"
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
                    className="bg-gradient-to-b from-white to-[#BFE8F7] p-4 w-[22%] h-[280px] rounded-lg bg-white text-black relative"
                    key={story.id}
                  >
                    <div
                      className="absolute right-0 top-0 bottom-0 left-0"
                      style={{
                        backgroundImage: "linear-gradient(to right, transparent 30%, #ffffffe6 50%, white 100%)",
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
                ) : (
                    <div
                      className="bg-gradient-to-b from-white to-[#BFE8F7] p-4 w-[22%] h-[280px] rounded-lg bg-white text-black"
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
