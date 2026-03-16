import { useState } from "react";
import SearchIcon from "/images/icon-search.svg";

export default function Search({ typing, children }) {
  const [setSearchInput] = useState("");
  return (
    <div className="relative">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-center items-center gap-4 md:flex-row"
      >
        <div className="h-14 rounded-xl text-preset-5-medium text-neutral200 bg-neutral800 px-4 flex gap-4 items-center w-full lg:max-w-131.5">
          <img src={SearchIcon} alt="" />
          <input
            onChange={(e) => {
              setSearchInput(e.target.value);
              e.target.value.length > 0 ? typing(e.target.value) : "";
            }}
            className="h-full outline-0 "
            type="text"
            placeholder="Search for a place..."
          />
        </div>

        <input
          className=" md:max-w-28.5  w-full h-14 rounded-xl text-preset-5-medium bg-blue500 text-white cursor-pointer "
          type="submit"
          value="Search"
        />
      </form>
      {children}
    </div>
  );
}
