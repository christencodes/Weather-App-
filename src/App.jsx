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

//* NOTES
// https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

function App() {
  //?------------------------ STATES
  const [currentDay, setCurrentDay] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const [currentDate] = useState(() => new Date());

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

  const [dailyObjects, setDailyObjects] = useState(null);

  //?--------------------- VARIABLES
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

  const locationURL = "https://geocoding-api.open-meteo.com/v1/search";

  //?-----------------------FUNCTIONS

  // ! here
  function setLocation(locationInfo) {
    setCurrentLocation(locationInfo);
    console.log(locationInfo);

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

  //! THIS IS WHERE I FORMATTED THE DAYS OF THE WEEK
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
    setHourlyData(weatherData.hourly);
  }, [weatherData]);

  // useEffect(() => {

  // },[dayOrder])

  function populateDailyInfo() {
    /*
     * Day - dayOrder[]
     * Icon - function to find weather icon through code
     * Max - weatherData.daily.temperature_2m_max
     * Min - weatherData.daily.temperature_2m_min
     */

    const dailyObjects = dayOrder.map((day, index) => {
      const weatherCode = weatherData.daily.weather_code[index];

      const iconContainer = resources.find((weather) =>
        weather.codes.includes(weatherCode),
      );

      return {
        day: day,
        icon: iconContainer.icon,
        min: weatherData.daily.temperature_2m_min[index],
        max: weatherData.daily.temperature_2m_max[index],
      };
    });
    setCurrentDay(dailyObjects[0]);
    setDailyObjects(dailyObjects);
  }

  //Populate Daily goes here
  useEffect(() => {
    populateDailyInfo();
  }, [dayOrder]);

  //* --------------------

  //!APP
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
      <div className="flex flex-col gap-8 lg:flex-row  ">
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
            day={weekDays[currentDate.getDay() - 1]}
            date={currentDate.getDate()}
            year={currentDate.getFullYear()}
            icon={currentDay ?? resources[0].icon}
          ></WeatherMain>
          <WeatherDailyContainer weather={weatherData} weekDays={weekDays}>
            {dailyObjects != null
              ? dailyObjects.map((daily, i) => (
                  <WeatherDaily {...daily} key={i} />
                ))
              : ""}
          </WeatherDailyContainer>
        </div>
        <div className="basis-1/3 shrink-0">
          <WeatherHourlyContainer
            hourlyData={hourlyData}
            weatherData={weatherData}
            weekDays={weekDays}
          ></WeatherHourlyContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
