// import smallBG from "/src/images/bg-today-small.svg";
// import bigBG from "/src/images/bg-today-large.svg";

export default function WeatherMain() {
  return (
    <section className="flex flex-col gap-5 ">
      {/* Weather Main */}
      <div className="w-full h-71.5 bg-slate-500 overflow-hidden rounded-[20px] px-6 py-10 flex flex-col items-center justify-center ">
        <div className="locationDate text-center">
          <h3 className="location text-preset-4 text-white">Berlin, Germany</h3>
          <p className="date text-preset-6 text-white/60">
            Tuesday, Aug 5, 2026
          </p>
        </div>
        <div className="tempInfo">
          <img src="" alt="" />
          <p className="temp"></p>
        </div>
      </div>
      {/* Weather Squares */}
      <div className="grid grid-cols-2 gap-4 items-center md:flex md:flex-row md:justify-between md:gap-5 lg:gap-6  ">
        <div className="w-full  min-w-29.5 h-29.5  rounded-xl p-5 flex flex-col gap-6 bg-neutral800 border-neutral600 border">
          <h3 className="text-preset-6 text-white">Feels Like</h3>
          <p className="text-preset-3 text-white">64</p>
        </div>
        <div className=" w-full min-w-29.5 h-29.5  rounded-xl p-5 flex flex-col gap-6 bg-neutral800 border-neutral600 border">
          <h3 className="text-preset-6 text-white">Humidity</h3>
          <p className="text-preset-3 text-white">46%</p>
        </div>
        <div className="w-full  min-w-29.5 h-29.5  rounded-xl p-5 flex flex-col gap-6 bg-neutral800 border-neutral600 border">
          <h3 className="text-preset-6 text-white">Wind</h3>
          <p className="text-preset-3 text-white">9 mph</p>
        </div>
        <div className="w-full  min-w-29.5 h-29.5  rounded-xl p-5 flex flex-col gap-6 bg-neutral800 border-neutral600 border">
          <h3 className="text-preset-6 text-white">Precipitation</h3>
          <p className="text-preset-3 text-white">0 in</p>
        </div>
      </div>
    </section>
  );
}
