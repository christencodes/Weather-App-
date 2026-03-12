import { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Search from "./Search";
import WeatherMain from "./WeatherMain";
import WeatherDailyContainer from "./WeatherDailyContainer";
import WeatherDaily from "./WeatherDaily";
import WeatherHourlyContainer from "./WeatherHourlyContainer";
import WeatherHourly from "./WeatherHourly";
import SearchDrawer from "./SearchDrawer";
import SearchItem from "./SearchItem";

import { resources } from "./resources";

// We left off at showing search results - LocationResult.jsx
function App() {
  const [currentDate] = useState(() => new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [dayOrder, setDayOrder] = useState([]);
  const [weatherData, setWeatherdata] = useState({
    current: {},
    daily: { time: [] },
  });
  const [currentLocation, setCurrentLocation] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [userInput, setInput] = useState();

  const [param, setParam] = useState({
    latitude: 0,
    longitude: 0,
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    hourly: ["temperature_2m", "weather_code"],
    current: [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "wind_speed_10m",
      "precipitation",
    ],
    timezone: "",
    temperature_unit: "fahrenheit",
  });

  const locationURL = "https://geocoding-api.open-meteo.com/v1/search";

  function setLocation(locationInfo) {
    setCurrentLocation(locationInfo);

    setParam({
      latitude: locationInfo.latitude,
      longitude: locationInfo.longitude,
      daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
      hourly: ["temperature_2m", "weather_code"],
      current: [
        "temperature_2m",
        "apparent_temperature",
        "relative_humidity_2m",
        "wind_speed_10m",
        "precipitation",
      ],
      timezone: locationInfo.timezone,
      temperature_unit: "fahrenheit",
    });

    setSearchItems([]);
  }

  // https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

  function typing(val) {
    setInput(`${val}`);
  }

  //* HOOKS

  useEffect(() => {
    fetch(`${locationURL}?name=${userInput}&count=03&language=en&format=json`)
      .then((res) => res.json())
      .then((data) => setSearchItems(data.results ?? []));
  }, [userInput]);

  useEffect(() => {
    async function getLocation(param) {
      const url = new URL("https://api.open-meteo.com/v1/forecast");

      // appending tings
      url.searchParams.append("latitude", param.latitude);
      url.searchParams.append("longitude", param.longitude);
      url.searchParams.append("current", param.current);
      url.searchParams.append("daily", param.daily);
      url.searchParams.append("hourly", param.hourly);
      url.searchParams.append("timezone", param.timezone);
      url.searchParams.append("temperature_unit", param.temperature_unit);

      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      setWeatherdata(data);
    }

    getLocation(param);
  }, [param]);

  useEffect(() => {
    const days = weatherData.daily.time
      .map((time) => {
        const container = new Date(time);
        return container.getDay();
      })
      .map((day) => {
        return weekDays[day].slice(0, 3);
      });
    setDayOrder(days);
  }, [weatherData]);

  useEffect(() => {
    console.log(dayOrder);
  }, [dayOrder]);

  //* --------------------

  return (
    <div className="mx-auto max-w-274.25 w-full min-w-85.75 p-3.5 flex flex-col gap-8 ">
      <Header></Header>
      <Hero></Hero>
      <Search typing={typing}>
        {searchItems.length !== 0 ? (
          <SearchDrawer>
            {searchItems.length !== 0
              ? searchItems.map((item) => (
                  <SearchItem
                    key={item.id}
                    name={item.name}
                    country={item.country}
                    locationData={item}
                    setCurrentLocation={setLocation}
                  />
                ))
              : console.log("nothing")}
          </SearchDrawer>
        ) : null}
      </Search>
      <div className="flex flex-col gap-8 lg:flex-row border-2 ">
        <div className="flex flex-col gap-8 justify-between">
          <WeatherMain
            temperature={weatherData.current.temperature_2m}
            apparent={weatherData.current.apparent_temperature}
            humidity={weatherData.current.relative_humidity_2m}
            wind={weatherData.current.wind_speed_10m}
            precipitation={weatherData.current.precipitation}
            name={currentLocation.name}
            country={currentLocation.country}
            month={months[currentDate.getMonth()]}
            day={weekDays[currentDate.getDay()]}
            date={currentDate.getDate()}
            year={currentDate.getFullYear()}
          ></WeatherMain>
          <WeatherDailyContainer weather={weatherData} weekDays={weekDays}>
            <WeatherDaily day={"Mon"}></WeatherDaily>
            <WeatherDaily day={"Tue"}></WeatherDaily>
            <WeatherDaily day={"Wed"}></WeatherDaily>
            <WeatherDaily day={"Thu"}></WeatherDaily>
            <WeatherDaily day={"Fri"}></WeatherDaily>
            <WeatherDaily day={"Sat"}></WeatherDaily>
            <WeatherDaily day={"Sun"}></WeatherDaily>
          </WeatherDailyContainer>
        </div>
        <div className="basis-1/3 shrink-0">
          <WeatherHourlyContainer>
            <WeatherHourly></WeatherHourly>
            <WeatherHourly></WeatherHourly>
            <WeatherHourly></WeatherHourly>
            <WeatherHourly></WeatherHourly>
            <WeatherHourly></WeatherHourly>
            <WeatherHourly></WeatherHourly>
            <WeatherHourly></WeatherHourly>
            <WeatherHourly></WeatherHourly>
          </WeatherHourlyContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
