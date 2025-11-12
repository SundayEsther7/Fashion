import { memo } from "react";

const Statistics = memo(function Statistics() {
  return (
    <section
      className="relative w-full flex justify-center -mt-[70px] z-20 py-1 m-1"
      aria-label="UrbanGlide impact statistics"
    >
      <h2 className="sr-only">UrbanGlide Impact Statistics</h2>

      <div
        className="
          w-[90%] max-w-[1100px]
          bg-primary/80 backdrop-blur-md border border-white/30
          rounded-2xl text-white 
          grid grid-cols-2 sm:grid-cols-4 items-center text-center gap-y-6
          relative py-6 px-6 shadow-lg
        "
      >
        {/* Stat 1 */}
        <div
          className="flex flex-col items-center text-center"
          aria-label="Over 5 years in the skating scene"
        >
          <span className="text-accent text-4xl md:text-5xl font-extrabold leading-tight">5+</span>
          <p className="text-sm md:text-lg opacity-90">Years in the scene</p>
        </div>

        {/* Divider 1 */}
        <div
          className="hidden sm:block absolute left-[25%] top-[32%] w-[4px] h-[40%] bg-white/50 rounded-full"
          aria-hidden="true"
        ></div>

        {/* Stat 2 */}
        <div
          className="flex flex-col items-center text-center"
          aria-label="Three active skate hubs in Nairobi"
        >
          <span className="text-accent text-4xl md:text-5xl font-extrabold leading-tight">3</span>
          <p className="text-sm md:text-lg opacity-90">Skate hubs in Nairobi</p>
        </div>

        {/* Divider 2 */}
        <div
          className="hidden sm:block absolute left-[50%] top-[32%] w-[4px] h-[40%] bg-white/50 rounded-full"
          aria-hidden="true"
        ></div>

        {/* Stat 3 */}
        <div
          className="flex flex-col items-center text-center"
          aria-label="Over 12,000 skaters styled by UrbanGlide"
        >
          <span className="text-accent text-4xl md:text-5xl font-extrabold leading-tight">12k+</span>
          <p className="text-sm md:text-lg opacity-90">Skaters styled</p>
        </div>

        {/* Divider 3 */}
        <div
          className="hidden sm:block absolute left-[75%] top-[32%] w-[4px] h-[40%] bg-white/50 rounded-full"
          aria-hidden="true"
        ></div>

        {/* Stat 4 */}
        <div
          className="flex flex-col items-center text-center"
          aria-label="Over 200 skate gear items available"
        >
          <span className="text-accent text-4xl md:text-5xl font-extrabold leading-tight">200+</span>
          <p className="text-sm md:text-lg opacity-90">Skate gear items</p>
        </div>
      </div>

      {/* Space below to prevent overlap */}
      <div className="h-[100px]"></div>
    </section>
  );
});

export default Statistics;
