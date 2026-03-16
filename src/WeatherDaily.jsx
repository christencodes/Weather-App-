export default function WeatherDaily({ day, icon, min = 0, max = 0 }) {
  return (
    <div className="flex flex-col items-center justify-center px-2.5 py-4  bg-neutral800 rounded-xl border-neutral600 border max-h-fit h-full md:max-h[165px]">
      <div className="Day h-fit text-preset-6 text-white">{day}</div>
      <div className="WeatherImage ">
        <img src={icon} alt="" />
      </div>
      <div className="HighLow w-full text-preset-7 text-white items-center justify-around flex gap-2 ">
        <div className="High">{max.toFixed(0)}°</div>
        <div className="Low">{min.toFixed(0)}°</div>
      </div>
    </div>
  );
}
