export default function Search() {
  return (
    <div className="">
      <form className="flex flex-col gap-3">
        <div>
          <input
            className="w-full h-14 rounded-xl text-preset-5-medium text-neutral200 bg-neutral800"
            type="text"
          />
        </div>

        <input
          className="w-full h-14 rounded-xl text-preset-5-medium bg-blue500 text-white"
          type="button"
          value="Search"
        />
      </form>
    </div>
  );
}
