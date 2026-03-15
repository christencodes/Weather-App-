import Logo from "/src/images/logo.svg";
import gear from "/src/images/icon-units.svg";
import downArrow from "/src/images/icon-dropdown.svg";
export default function Header() {
  return (
    <div className="w-full border-sky-100 flex items-center justify-between">
      <img src={Logo} alt="" />
      {/* Create a DropDown Component */}
      <button className="relative text-white bg-neutral800 px-4 py-3 rounded-xl">
        <div className="flex gap-2.5">
          {" "}
          <img src={gear} alt="" />
          <p className="text-preset-7">Units</p>
          <img src={downArrow} alt="" />
        </div>
        <div className="absolute h-fit w-10 border border-red-500 ">
          <div>
            <h2>Switch to x</h2>
          </div>
          <div>
            {/* WE STOPPED HERE */}
            <details>Temperature</details>
            <button></button>
            <button></button>
          </div>
        </div>
      </button>
    </div>
  );
}
