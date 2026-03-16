import logo from "/images/logo.svg";
import gear from "/images/icon-units.svg";
import downArrow from "/images/icon-dropdown.svg";
import UnitDropDown from "./UnitDropDown";

export default function Header({ dropDown, showDD }) {
  return (
    <div className="w-full border-sky-100 flex items-center justify-between ">
      <img src={logo} alt="" />
      {/* Create a DropDown Component */}
      <div
        onClick={() => showDD()}
        className="relative text-white bg-neutral800 px-4 py-3 rounded-xl cursor-pointer "
      >
        <div className="flex gap-2.5">
          {" "}
          <img className="select-none" src={gear} alt="" />
          <p className="text-preset-7 select-none">Units</p>
          <img className="select-none" src={downArrow} alt="" />
        </div>
        {dropDown}
      </div>
    </div>
  );
}
