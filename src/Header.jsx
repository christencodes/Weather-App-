import Logo from "/src/images/logo.svg";

export default function Header() {
  return (
    <div className="w-full border-sky-100 flex items-center justify-between">
      <img src={Logo} alt="" />
      {/* Create a DropDown Component */}
    </div>
  );
}
