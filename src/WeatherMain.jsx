export default function WeatherMain({
  name = "Dallas",
  country = "United States",
  temperature = 0,
  apparent = 0,
  humidity = 0,
  wind = 0,
  windUnit,
  precipitation = 0,
  pUnit,
  month,
  day,
  date,
  year,
  icon,
}) {
  return (
    <section className="flex flex-col gap-5 ">
      {/* Weather Main */}
      <div
        className={`w-full h-71.5 bg-slate-500 overflow-hidden rounded-[20px] px-2 py-10 flex flex-col gap-4 items-center justify-around bg-[url(src/images/bg-today-small.svg)] md:bg-[url(src/images/bg-today-large.svg)]
        lg:bg-[url(src/images/bg-today-large.svg)] bg-no-repeat bg-cover bg-center md:flex-row `}
      >
        <div className="locationDate text-center md:text-left  ">
          <h3 className="location text-preset-4 text-white">{`${name}, ${country}`}</h3>
          <p className="date text-preset-6 text-white/60">
            {`${day}, ${month} ${date}, ${year}`}
          </p>
        </div>
        <div className="tempInfo flex items-center gap-6 md:gap-0  ">
          <img className=" h-30 w-30 " src={icon.icon} alt="" />
          <p className="temp text-preset-1 text-white">
            {`${temperature.toFixed(0)}°`}
          </p>
        </div>
      </div>
      {/* Weather Squares */}
      <div className="grid grid-cols-2 gap-4 items-center md:flex md:flex-row md:justify-between md:gap-5 lg:gap-6 ">
        <div className="w-full  min-w-29.5 h-29.5  rounded-xl p-5 flex flex-col gap-6 bg-neutral800 border-neutral600 border">
          <h3 className="text-preset-6 text-white">Feels Like</h3>
          <p className="text-preset-3 text-white">{apparent}</p>
        </div>
        <div className=" w-full min-w-29.5 h-29.5  rounded-xl p-5 flex flex-col gap-6 bg-neutral800 border-neutral600 border">
          <h3 className="text-preset-6 text-white">Humidity</h3>
          <p className="text-preset-3 text-white">{humidity}</p>
        </div>
        <div className="w-full  min-w-29.5 h-29.5  rounded-xl p-5 flex flex-col gap-6 bg-neutral800 border-neutral600 border">
          <h3 className="text-preset-6 text-white">Wind</h3>
          <div className="flex gap-3 text-white text-preset-5 font-normal!">
            <p className="text-preset-3 text-white">{wind}</p>
            {/* Remember to change this unit */}
            <p className="self-end">{windUnit}</p>
          </div>
        </div>
        <div className="w-full  min-w-29.5 h-29.5  rounded-xl p-5 flex flex-col gap-6 bg-neutral800 border-neutral600 border">
          <h3 className="text-preset-6 text-white">Precipitation</h3>
          <div className="flex items-center gap-4">
            <p className="text-preset-3 text-white">
              {precipitation < 0 ? "0" : precipitation}
            </p>
            <p className="text-preset-3 text-white">{pUnit}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
