import WeatherDaily from "./WeatherDaily";

export default function WeatherDailyContainer({ children }) {
  // May need to accept some of the json data
  //might need to make a weatherdaily smaller component

  return (
    <div className="flex flex-col lg:justify-end gap-4 h-full lg:pb-0">
      <div>
        <h3 className="text-preset-5 text-white">Daily forecast</h3>
      </div>
      <div className="grid grid-cols-3 gap-4 md:flex">{children}</div>
    </div>
  );
}
