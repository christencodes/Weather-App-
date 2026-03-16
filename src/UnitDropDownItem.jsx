// could be composed of two divs that act together?
//2 divs 1 cup?
//2 buttons 1 div?
//they pass info to the header -> to app?

import { useEffect, useState } from "react";
import checkMark from "/images/icon-checkmark.svg";

export default function UnitDropDownItem({
  item1name,
  item2name,
  onUnitChange,
}) {
  //false - item 2
  //true - item 1

  const [selected, setSelected] = useState(false);
  useEffect(() => {
    onUnitChange(selected);
  }, [selected]);

  return (
    <div className="flex flex-col gap-1">
      <div
        onClick={() => {
          setSelected(true);
        }}
        className={`px-1 pr-4 py-1  rounded-lg w-full hover:cursor-pointer hover:bg-neutral600 flex items-center justify-between  ${selected == true ? "bg-neutral600" : ""}`}
      >
        <p className="text-preset-7 px-2 py-2">{item1name}</p>
        <img
          className={`${selected ? "opacity-100" : "opacity-0"}`}
          src={checkMark}
          alt=""
        />
      </div>
      <div
        onClick={() => {
          setSelected(false);
        }}
        className={`px-1 pr-4 py-1  rounded-lg w-full hover:cursor-pointer hover:bg-neutral600 flex items-center justify-between ${selected == false ? "bg-neutral600" : ""} `}
      >
        <p className="text-preset-7 px-2 py-2">{item2name}</p>
        <img
          className={`${!selected ? "opacity-100" : "opacity-0"}`}
          src={checkMark}
          alt=""
        />
      </div>
    </div>
  );
}
