export default function Statistics() {
  return (
    <section className="relative w-full flex justify-center -mt-[70px] z-20 py-1 m-1">
      <div
        className="
          w-[90%] max-w-[1100px] h-[130px]
          bg-primary/80 backdrop-blur-md border border-white/30
          rounded-xl text-white 
          grid grid-cols-2 sm:grid-cols-4 place-items-center
          relative
          px-4
        "
      >
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-accent text-3xl font-extrabold">5+</span>
          <p className="text-sm md:text-base opacity-90">years in the scene</p>
        </div>

        {/* Divider 1 */}
        <div className="hidden sm:block absolute left-[25%] top-[30%] w-[3px] h-[45%] bg-white/40 rounded-full"></div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-accent text-3xl font-extrabold">3</span>
          <p className="text-sm md:text-base opacity-90">skate hubs in Nairobi</p>
        </div>

        {/* Divider 2 */}
        <div className="hidden sm:block absolute left-[50%] top-[30%] w-[3px] h-[45%] bg-white/40 rounded-full"></div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-accent text-3xl font-extrabold">12k+</span>
          <p className="text-sm md:text-base opacity-90">skaters styled</p>
        </div>

        {/* Divider 3 */}
        <div className="hidden sm:block absolute left-[75%] top-[30%] w-[3px] h-[45%] bg-white/40 rounded-full"></div>

        {/* Item 4 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-accent text-3xl font-extrabold">200+</span>
          <p className="text-sm md:text-base opacity-90">skate gear items</p>
        </div>
      </div>

      {/* Space below so next section does not overlap */}
      <div className="h-[100px]"></div>
    </section>
  );
}
