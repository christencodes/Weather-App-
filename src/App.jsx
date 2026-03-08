import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Search from "./Search";
import WeatherMain from "./WeatherMain";

function App() {
  // This is for the weather data object
  const [weatherData, setWeatherdata] = useState({});

  return (
    <div className="mx-auto max-w-274.25 w-full min-w-85.75 p-3.5 flex flex-col gap-8">
      <Header></Header>
      <Hero></Hero>
      <Search></Search>
      <WeatherMain></WeatherMain>
    </div>
  );
}

export default App;
