import DownArrow from "/src/images/icon-dropdown.svg";

export default function WeatherHourlyContainer({ children }) {
  return (
    <div className="w-full flex flex-col gap-4 bg-neutral800 h-fit px-4 py-5 rounded-[20px] ">
      <section className="flex items-center justify-between">
        <h3 className="text-preset-5 text-white">Hourly forecast</h3>
        <button className="bg-neutral600 px-4 py-2 text-preset-7 rounded-lg text-white flex items-center justify-between gap-3">
          <h3>Tuesday</h3>
          <img src={DownArrow} alt="" />
        </button>
      </section>
      {children}
    </div>
  );
}
