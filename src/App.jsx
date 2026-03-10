import { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Search from "./Search";
import WeatherMain from "./WeatherMain";
import WeatherDailyContainer from "./WeatherDailyContainer";
import WeatherDaily from "./WeatherDaily";
import WeatherHourlyContainer from "./WeatherHourlyContainer";
import WeatherHourly from "./WeatherHourly";

// We left off at showing search results - LocationResult.jsx
function App() {
  // This is for the weather data object
  // const [weatherData, setWeatherdata] = useState({});
  //const
  const [locationData, setLocationData] = useState(null);
  const [userInput, setInput] = useState(null);

  const locationURL = "https://geocoding-api.open-meteo.com/v1/search";

  // https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

  function typing(val) {
    setInput(`${val}`);
    console.log(userInput);
  }

  useEffect(() => {
    fetch(`${locationURL}?name=${userInput}&count=03&language=en&format=json`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [userInput]);

  // function getLocations(name, count) {
  //   const newName = "?" + name;
  //   const newCount = "&" + count;
  // }

  return (
    <div className="mx-auto max-w-274.25 w-full min-w-85.75 p-3.5 flex flex-col gap-8 ">
      <Header></Header>
      <Hero></Hero>
      <Search typing={typing}></Search>
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
