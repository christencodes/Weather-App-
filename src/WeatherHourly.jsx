import StormIcon from "/src/images/icon-storm.webp";

export default function WeatherHourly({ time, temp }) {
  return (
    <div className=" bg-neutral700 border-neutral600 border w-full flex items-center justify-between py-2 px-4 rounded-lg  ">
      <div className="flex items-center gap-2">
        <img className="w-10 h-10" src={StormIcon} alt="" />
        {/* Time */}
        <p className="text-preset-5-medium text-white">{time} PM</p>
      </div>
      <div>
        {/* Temp */}
        <p className="text-preset-7 text-white">{temp}</p>
      </div>
    </div>
  );
}
