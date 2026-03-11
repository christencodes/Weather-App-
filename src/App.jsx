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

import { fetchWeatherApi } from "openmeteo";

// We left off at showing search results - LocationResult.jsx
function App() {
  // This is for the weather data object
  // const [weatherData, setWeatherdata] = useState({});
  //const
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
    timezone: "America/Anchorage",
  });

  const [currentLocationData, setCurrentLocationData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({});
  const [searchItems, setSearchItems] = useState([]);
  const [userInput, setInput] = useState();

  const locationURL = "https://geocoding-api.open-meteo.com/v1/search";

  function setLocation(locationInfo) {
    console.log(locationInfo);
    setCurrentLocation(locationInfo);
    setSearchItems([]);
    setParam((prevParam) => ({
      ...prevParam,
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      timezone: currentLocation.timezone,
    }));
    console.log(param);

    // getLocationData(param);
  }

  function getLocationData(currentParams) {
    const url = "https://api.open-meteo.com/v1/forecast";
    const res = fetchWeatherApi(url, currentParams);
    console.log(res);
  }

  // https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

  function typing(val) {
    setInput(`${val}`);
  }

  useEffect(() => {
    fetch(`${locationURL}?name=${userInput}&count=03&language=en&format=json`)
      .then((res) => res.json())
      .then((data) => setSearchItems(data.results ?? []));
  }, [userInput]);

  // function getLocations(name, count) {
  //   const newName = "?" + name;
  //   const newCount = "&" + count;
  // }

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
          <WeatherMain></WeatherMain>
          <WeatherDailyContainer>
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
