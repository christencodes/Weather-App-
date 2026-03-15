export default function WeatherHourlyDDitem({ day, date, setHours, setVis }) {
  // each item is going to contain the data that populates the Singular Hour Items
  function setBoth() {
    setHours(date);
    setVis();
  }
  return (
    <div
      onClick={() => {
        console.log(date);
        setBoth();
      }}
      className="px-2 py-6 rounded-lg w-full h-9.75 text-left flex items-center justify-start text-preset-7 text-white hover:bg-neutral700 cursor-pointer"
    >
      <p>{day}</p>
    </div>
  );
}
