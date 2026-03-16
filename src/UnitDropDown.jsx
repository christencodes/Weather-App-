import UnitDropDownItem from "./UnitDropDownItem";

export default function UnitDropDown({ temp, wind, precipitation, show }) {
  return (
    <div
      className={`absolute right-0 top-13 z-99 bg-neutral800 min-w-53 w-full h-fit rounded-xl border border-neutral600 text-left px-2 py-3 ${show ? "opacity-100" : "opacity-0 pointer-events-none"} transition duration-300`}
    >
      <header className="mb-4">
        <h2 className="text-preset-7 text-white">Switch to Imperial</h2>
      </header>

      <section className="temp border-b border-b-neutral600 py-2">
        <h4 className="text-preset-8 text-neutral300 mb-1">Temperature</h4>
        {temp}
      </section>
      <section className="wind border-b border-b-neutral600 py-2">
        <h4 className="text-preset-8 text-neutral300 mb-1">Wind</h4>
        {wind}
      </section>
      <section className="precipitation  py-2">
        <h4 className="text-preset-8 text-neutral300 mb-1">Precipitation</h4>
        {precipitation}
      </section>
    </div>
  );
}
