import WeatherHourlyDDitem from "./WeatherHourlyDDItem";

export default function WeatherHourlyDropdown({ children, visibility }) {
  return (
    <div
      className={`absolute h-fit max-w-53.5 w-full bg-neutral800 border border-neutral600 flex flex-col gap-3 p-2 ${visibility ? "opacity-100" : "opacity-0 pointer-events-none"} transition duration-300`}
    >
      {children}
    </div>
  );
}
