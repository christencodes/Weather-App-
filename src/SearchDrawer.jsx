// This is where we take the object

export default function SearchDrawer({ children }) {
  return (
    <div className="absolute bg-neutral800 border-neutral600 border h-fit px-7 py-4  items-center lg:max-w-131.5 w-full  lg:right-[31.4%] mt-2 rounded-xl flex flex-col gap-3 ">
      {children}
    </div>
  );
}
