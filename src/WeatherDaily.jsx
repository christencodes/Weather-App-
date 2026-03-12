import Sunny from "/src/images/icon-sunny.webp";

export default function WeatherDaily({ day, min = 0, max = 0 }) {
  return (
    <div className="flex flex-col items-center justify-center px-2.5 py-4  bg-neutral800 rounded-xl border-neutral600 border max-h-fit h-full md:max-h[165px]">
      <div className="Day h-fit text-preset-6 text-white">{day}</div>
      <div className="WeatherImage ">
        <img src={Sunny} alt="" />
      </div>
      <div className="HighLow w-full text-preset-7 text-white flex items-center justify-around ">
        <div className="High">{max}</div>
        <div className="Low">{min}</div>
      </div>
    </div>
  );
}
