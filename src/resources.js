import sunny from "/images/icon-sunny.webp";
import partlyCloudy from "/images/icon-partly-cloudy.webp";
import overcast from "/images/icon-overcast.webp";
import fog from "/images/icon-fog.webp";
import drizzle from "/images/icon-drizzle.webp";
import rain from "/images/icon-rain.webp";
import snow from "/images/icon-snow.webp";
import storm from "/images/icon-storm.webp";

export const resources = [
  { icon: sunny, codes: [0, 1], weather: "sunny" },

  {
    icon: partlyCloudy,
    codes: [2],
    weather: "partlyCloudy",
  },

  {
    icon: overcast,
    codes: [3],
    weather: "overcast",
  },

  { icon: fog, codes: [45, 48], weather: "fog" },

  {
    icon: drizzle,
    codes: [51, 53, 55, 56, 57],
    weather: "drizzle",
  },

  {
    icon: rain,
    codes: [61, 63, 65, 66, 67, 80, 81, 82],
    weather: "rain",
  },

  {
    icon: snow,
    codes: [71, 73, 75, 77, 85, 86],
    weather: "snow",
  },

  {
    icon: storm,
    codes: [95, 96, 99],
    weather: "snow",
  },
];
