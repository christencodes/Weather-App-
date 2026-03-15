import StormIcon from "/src/images/icon-storm.webp";
import { resources } from "./resources";

export default function WeatherHourly({ time, temp, weatherCode = 1 }) {
  console.log("weatherCode");
  console.log(weatherCode);
  return (
    <div className=" bg-neutral700 border-neutral600 border w-full flex items-center justify-between py-2 px-4 rounded-lg  ">
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10"
          src={
            resources.find((weather) => weather.codes.includes(weatherCode))
              .icon
          }
          alt=""
        />
        {/* Time */}
        <p className="text-preset-5-medium text-white">{time} PM</p>
      </div>
      <div>
        {/* Temp */}
        <p className="text-preset-7 text-white">{temp.toFixed(0)}°</p>
      </div>
    </div>
  );
}
