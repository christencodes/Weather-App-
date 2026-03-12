export const resources = {
  weather: {
    sunny: { icon: "/src/images/icon-sunny.webp", codes: [0] },

    partlyCloudy: { icon: "/src/images/icon-partly-cloudy.webp", codes: [2] },

    overcast: { icon: "/src/images/icon-overcast.webp", codes: [2] },

    fog: { icon: "/src/images/icon-fog.webp", codes: [45, 48] },

    drizzle: {
      icon: "/src/images/icon-drizzle.webp",
      codes: [51, 53, 55, 56, 57],
    },

    rain: {
      icon: "/src/images/icon-rain.webp",
      codes: [61, 63, 65, 66, 67, 80, 81, 82],
    },

    snow: {
      icon: "/src/images/icon-snow.webp",
      codes: [71, 73, 75, 77, 85, 86],
    },

    storm: { icon: "/src/images/icon-storm.webp", codes: [95, 96, 99] },
  },
};
