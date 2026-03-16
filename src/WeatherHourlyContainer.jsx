import DownArrow from "/images/icon-dropdown.svg";
import WeatherHourly from "./WeatherHourly";
import WeatherHourlyDropdown from "./WeatherHourlyDropdown";
import WeatherHourlyDDitem from "./WeatherHourlyDDItem";
import { useEffect, useState } from "react";

export default function WeatherHourlyContainer({ weatherData, weekDays }) {
  const [dropDownDay, setDropDownDay] = useState("Monday");
  const [visibility, setVisibility] = useState(false);
  const [currentHours, setCurrentHours] = useState(null);
  const nums = [15, 16, 17, 18, 19, 20, 21, 22];

  function setHours(day) {
    const currentDay = weekDays[new Date(day).getDay()];
    const hourData = nums
      .map((time) => {
        return weatherData.hourly.time.indexOf(`${day}T${time}:00`);
      })
      .map((index) => {
        return {
          temp: weatherData.hourly.temperature_2m[index],
          weatherCode: weatherData.hourly.weather_code[index],
        };
      })
      .map((info, index) => {
        return {
          time: nums[index] - 12,
          temp: info.temp,
          weatherCode: info.weatherCode,
        };
      });

    setDropDownDay(currentDay);
    setCurrentHours(hourData);
  }
  function setVis() {
    setVisibility(!visibility);
  }

  useEffect(() => {}, [currentHours]);

  // const hourly = hourlyData ? hourlyData.temperature_2m : undefined;

  return (
    <div className="relative w-full flex flex-col gap-4 bg-neutral800 h-fit px-4 py-5 rounded-[20px] ">
      <WeatherHourlyDropdown visibility={visibility}>
        {weatherData.daily.time.map((date, i) => {
          const newDate = new Date(date);
          return (
            <WeatherHourlyDDitem
              date={date}
              key={i}
              day={weekDays[newDate.getDay()]}
              setHours={setHours}
              setVis={setVis}
            ></WeatherHourlyDDitem>
          );
        })}
      </WeatherHourlyDropdown>
      <section className="flex items-center justify-between">
        <h3 className="text-preset-5 text-white">Hourly forecast</h3>
        <button
          onClick={() => setVisibility(!visibility)}
          className="bg-neutral600 px-4 py-2 text-preset-7 rounded-lg text-white flex items-center justify-between gap-3 cursor-pointer"
        >
          <h3>{dropDownDay}</h3>
          <img src={DownArrow} alt="" />
        </button>
      </section>
      {currentHours ? (
        currentHours.map((hour, i) => <WeatherHourly {...hour} key={i} />)
      ) : (
        <>
          <WeatherHourly time={3} temp={0} />
          <WeatherHourly time={4} temp={0} />
          <WeatherHourly time={5} temp={0} />
          <WeatherHourly time={6} temp={0} />
          <WeatherHourly time={7} temp={0} />
          <WeatherHourly time={8} temp={0} />
          <WeatherHourly time={9} temp={0} />
          <WeatherHourly time={10} temp={0} />
        </>
      )}
    </div>
  );
}
