import gunGirl from "../assets/images/webp/girl-with-gun.webp";
import nanoSpace from "../assets/images/webp/nano-space.webp";
import robotHead from "../assets/images/webp/robot-head.webp";
import { EXPLORE_LIST } from "../utils/helper";
const Explore = () => {
  return (
    <div className="bg-low-black">
      <div className="relative z-10 max-w-[1920px] mx-auto overflow-x-clip flex flex-col lg:flex-row items-center  overflow-hidden pb-10 lg:h-[826px]">
        <div className="lg:absolute max-lg:relative left-3 lg:left-10 lg:-bottom-[30%] z-10">
          <div className="relative">
            <img
              className="object-cover relative object-top w-[500px] h-[500px] md:w-[500px] md:h-[700px] lg:w-[700px] lg:h-[900px] xl:w-[880px] xl:h-[1070px] "
              src={gunGirl}
              alt="Girl"
            />
            <div className="max-w-[438px] max-h-[695px] bg-light-blue -z-10 blur-[80px]  opacity-25 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 lg:-translate-x-[85%] lg:-translate-y-[64%]"></div>
          </div>
        </div>
        <div className="container xl:max-w-[1140px] xl:px-0">
          <div className="flex flex-col justify-end lg:items-end relative z-50 -mt-20 lg:mt-20">
            <div className="p-4 md:p-8 backdrop-blur-[4px] relative lg:p-[50px] lg:pr-20 rounded-[10px] bg-white bg-opacity-[4%]">
              <img
                className="md:w-[234px] w-[180px] h-14 md:h-[73px]"
                src={nanoSpace}
                alt="nano space"
              />
              <h2 className="font-bold text-start font-orbitron text-2xl md:text-custom-4xl text-white mb-4 mt-6 !leading-120">
                Explore NANOSPACE
              </h2>
              <p className="font-normal text-start  font-saira text-lg md:text-xl text-white !leading-150">
                Find best in class heart-pounding idle RPG experience
              </p>
              <p className="mt-2.5 font-saira text-start font-semibold text-lg md:text-xl text-gray-lose !leading-150 mb-4">
                Adorable, Collectible Anime-Inspired Character
              </p>
              {EXPLORE_LIST.map((obj, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 items-start mb-4 ${
                    i === EXPLORE_LIST.length - 1 && "mb-0"
                  }`}
                >
                  <div className="md:min-w-4 md:min-h-4 min-w-3 min-h-3 mt-1 relative block bg-gray-lose bg-opacity-20 rounded-full">
                    <span className="bg-gray-lose absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 md:size-[11px] rounded-full block"></span>
                  </div>
                  <p className="text-base font-saira max-w-[480px] font-normal text-gray-lose !leading-150">
                    {obj}
                  </p>
                </div>
              ))}

              <div className="w-[156px] h-[54px] bg-gray-lose blur-[64px] pointer-events-none absolute top-[68px] left-[89px] rounded-full -z-10" />
              <img
                src={robotHead}
                alt="robotHead"
                className="xl:size-[256px] size-28 sm:size-40 pointer-events-none object-cover absolute -top-16 xl:-top-[115px] -right-5 xl:-right-[75px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
