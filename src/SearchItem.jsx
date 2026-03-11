export default function SearchItem({
  name,
  country,
  locationData,
  setCurrentLocation,
}) {
  return (
    <div
      onClick={() => setCurrentLocation(locationData)}
      className="border border-neutral600 rounded-lg w-full max-h-9.75 h-fit flex flex-col px-2 py-8 justify-center items-start gap-0 hover:cursor-pointer hover:bg-neutral600 transition duration-300  "
    >
      <div className="px-2">
        <h3 className="text-preset-5 text-white ">{name}</h3>
        <p className="italic text-white">{country}</p>
      </div>
    </div>
  );
}
